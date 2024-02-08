import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from 'bcryptjs'
import generateToken from "../utils/generateToken";
import { JwtPayload } from "jsonwebtoken";
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
import extractTokenFromHeader from "../utils/extractTokenFromHeader";
config()

//@description      register a user to database
//@route            POST /register
//@access           public
export const register = async (req: Request, res: Response) => {
    const {username, password, role, email, fname, lname, phoneNum} = req.body

    if(!username || !password || !role || !email || !fname || !lname || !phoneNum ) {
        return res.status(400).send('Missing username info')
    }

    try {
        const existUser = await User.findOne({$or: [{username},{email}]})

        if(existUser?.username === username) return res.status(409).send('Username is already in used')
        if(existUser?.email === email) return res.status(409).send('Email is already in used')

        const hashedPassword = await bcrypt.hash(password,10)

        await User.create({
            username,
            password: hashedPassword,
            role,
            email,
            fname,
            lname,
            phoneNum
        })

    return res.status(201).send('Your account have been created')
        
    } catch (error) {
        console.error(error)
        return res.status(500).send('Internal server error')        
    }
}

//@description      authenticate user credentials
//@route            POST /login
//@access           public
export const login = async (req: Request, res: Response) => {
    const {username, password} = req.body
    if(!username || !password) {
        return res.status(400).send('Username and password are required')
    }

    try {
        const user = await User.findOne({username})
        if(!user || !(await bcrypt.compare(password,user.password))) {
            return res.status(401).send('Invalid username or password')
        }

        const accessToken = generateToken(user._id,"ACCESS")
        const refreshToken = generateToken(user._id,"REFRESH")

        res.cookie('access_token',accessToken,{httpOnly: true})
        res.cookie('refresh_token',refreshToken,{httpOnly: true})
        res.status(200).end()
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
    }
}

//@description      create new access token with valid refresh token
//@route            GET /access-token
//@access           public
export const getNewToken = async(req: Request,res : Response) => {
    try {
        const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY
        const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY
        
        if(!ACCESS_TOKEN_KEY || !REFRESH_TOKEN_KEY) {
            throw new Error('Access token key and refresh token key are required in env file')
        }

        const cookiesHeader = req.headers.cookie
        if(!cookiesHeader) return res.status(403).send('Cookie headers are missing')

        const refreshToken = extractTokenFromHeader(cookiesHeader,'refresh_token')

        jwt.verify(refreshToken,REFRESH_TOKEN_KEY,(err,decoded) => {
            if(err) return res.status(403).send('Invalid refresh token')

            decoded = decoded as JwtPayload
            console.log('rtwrwerwrwerwerwe')
            const accessToken = generateToken(decoded.id,'ACCESS')
            res.cookie('accessToken',accessToken,{httpOnly: true})
        })
        return res.status(200).end()
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }
}
