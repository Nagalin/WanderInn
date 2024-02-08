import { Response } from "express";
import AuthRequest from "../interfaces/AuthRequest";
import User from "../models/User";

export const fetchProfile = async (req: AuthRequest, res: Response) => {
    try {
        const id = req.id
        const user = await User.findOne({_id: id})
        if(!user) return res.status(404).send('No user found')
        res.status(200).send({username: user.username, role: user.role})
        
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
    }
}