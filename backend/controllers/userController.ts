import { Request, Response } from "express"
import User from "../models/User"

export const user = async (req: Request,res: Response)=>{

    try {
        const user = await User.create({
            username: 'john',
            password: 'doe'
        })
        res.status(201).send(user)
        
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
        
    }
}