import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { config } from "dotenv";
import jwt from 'jsonwebtoken'
import AuthRequest from "../interfaces/AuthRequest";
import extractTokenFromHeader from "../utils/extractTokenFromHeader";
config()

const isAuthenticated = (req: AuthRequest, res: Response, next: NextFunction) => {
    const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY
    if(!ACCESS_TOKEN_KEY) {
        new Error('Access token is required in env file')
        return res.status(500).send('Internal server error')
    }

    const cookiesHeader = req.headers.cookie
    if(!cookiesHeader) return res.status(403).send('Cookies header are missing')

    const accessToken = extractTokenFromHeader(cookiesHeader,'access_token')

    jwt.verify(accessToken,ACCESS_TOKEN_KEY,(err,decoded) =>{
        if(err) return res.status(403).send('Invalid access token')
        decoded = decoded as JwtPayload
        req.id = decoded.id
        return next()
    })

}

export default isAuthenticated