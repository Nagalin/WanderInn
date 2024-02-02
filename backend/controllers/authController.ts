import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from 'bcryptjs'
import generateToken from "../utils/generateToken";

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
        if(!user || !(await bcrypt.compare(user.password,password))) {
            return res.status(409).send('Invalid username or password')
        }

        const accessToken = generateToken(user._id,"ACCESS")
        const refreshToken = generateToken(user._id,"REFRESH")

        res.cookie('accessToken',accessToken,{httpOnly: true})
        res.cookie('refresh',refreshToken,{httpOnly: true})
        res.status(200).send(user.role).end()
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
    }
    
    
    
}