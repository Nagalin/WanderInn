import mongoose from 'mongoose'

const Address = new mongoose.Schema({
    hotel: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
    village: {type: String, required: true},
    road: {type: String, required: true},
    subdistrict: {type: String, required: true},
    district: {type: String, required: true},
    province: {type: String, required: true},
    postalCode: {type: String, required: true},
    country: {type: String, required: true},
})

export default mongoose.model('Address',Address)
