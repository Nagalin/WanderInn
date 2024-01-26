import mongoose from "mongoose"
import jwt from 'jsonwebtoken'
import { config } from "dotenv"
config()

const generateToken = (
    id: mongoose.Types.ObjectId,
    tokenType: 'ACCESS' | 'REFRESH'
): string => {
    const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY
    const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY

    if (!ACCESS_TOKEN_KEY || !REFRESH_TOKEN_KEY) {
        throw new Error('Access token key and refresh token are required in env file')
    }
    const expirationTime = tokenType === 'ACCESS' ? '5s' : '1d';
    const secretKey = tokenType === 'ACCESS' ? ACCESS_TOKEN_KEY : REFRESH_TOKEN_KEY;

    const token = jwt.sign({ id: id }, secretKey, { expiresIn: expirationTime });
    return token;
};

export default generateToken