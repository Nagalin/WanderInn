import mongoose from 'mongoose'

const User = new mongoose.Schema({
    username: {type: String, required: true , unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    email: {type: String, required: true , unique: true},
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    phoneNum: {type: String, unique: true},
    hotel: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
})

export default mongoose.model('User',User)