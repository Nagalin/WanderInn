import mongoose from 'mongoose'

const Hotel = new mongoose.Schema({
    name: {type: String, required: true},
    phoneNum: {type: String, required: true},
    description: {type: String, required: true},
    isActive: {type: Boolean, required: true},
    picName: {type: String, required: true},
})

export default mongoose.model('Hotel',Hotel)