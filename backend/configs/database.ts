import mongoose from "mongoose";
import { config } from "dotenv";
config()

const MONGO_URI = process.env.MONGO_URI

if(!MONGO_URI) throw new Error('Mongo URI is required in env file')

mongoose.connect(MONGO_URI)
.then(() => console.log('Connected to MongoDB database'))
.catch(err => console.error(err))
