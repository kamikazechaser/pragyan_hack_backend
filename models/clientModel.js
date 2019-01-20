const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// schema
const clientSchema = new Schema({
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
    interests: {
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
        type: String,
        required: false,
    },
    y_location: {
        type: String,
        required: false,
    }
});

const Client = mongoose.model("Client", clientSchema, "client");
module.exports = Client