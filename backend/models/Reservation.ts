import mongoose from 'mongoose'

const Reservation = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'User',required: true},
    startDate:{type: Date, required: true},
    endDate:{type: Date, required: true},
    totalPrice: {type: Number, required: true},
    reservedStatus: {type: String, required: true, default: 'Pending' },
    room: {type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true}
})

export default mongoose.model('Reservation',Reservation)