import mongoose from 'mongoose'

const Room = new mongoose.Schema({
    name: { type: String, required: true },
    roomNum: {type: Number, required: true},
    description: {type: String, required: true},
    roomCapacity: {type: Number, required: true},
    currentPrice: {type: Number, required: true},
    picName: {type: String, requried: true},
    isActive: {type: Boolean, required: true, default: false},
    hotel: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'}
})

export default mongoose.model('Room',Room)