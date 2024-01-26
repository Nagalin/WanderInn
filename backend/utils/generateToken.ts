import mongoose from "mongoose"

const generateToken = (
    id:  mongoose.Schema.Types.ObjectId,
    tokenType: 'ACCESS' | 'REFRESH')  => {
        
}

export default generateToken