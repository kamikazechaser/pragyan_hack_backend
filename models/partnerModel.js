const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// schema
const partnerSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },    
    password: {
        type: String,
        required: true,
    },
    languages: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        string: true,
    },
    address: {
        type: String,
        string: true,
    },
    gravatar: {
        type: String,
        required: false,
    },
    x_location: {
        type: NumberLong,
        required: true,
    },
    y_location: {
        type: NumberLong,
        required: true,
    }
});

const Partner = mongoose.model("Partner", partnerSchema, "partner");
module.exports = Partner