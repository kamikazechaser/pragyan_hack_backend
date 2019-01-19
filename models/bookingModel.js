const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// schema
const bookingSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    locationName: {
        type: String,
        required: true,
    },
    client: {
        type: String,
        required: true,
    },
    partner: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },    
    confirmStatus: {
        type: Boolean,
        required: false,
    }
});

const Booking = mongoose.model("Booking", bookingSchema, "booking");
module.exports = Booking