exports = module.exports = {
    clientRegistrationController,
    clientLoginController,
    partnerLoginController,
    partnerRegistrationController
}

const Client = require('../models/clientModel.js')
const Partner = require('../models/partnerModel.js')

function clientRegistrationController(req, res) {
    const { email, name, password, age, address, interests, phone, sex } = req.query
    const newClient = Client.create({
        email,
        name,
        password,
        age,
        address,
        interests,
        phone,
        sex,
    }, (error, ctx) => {
        if (error) {
            console.error(error);
        } else {
            return res.status(200).json({ message: "Registered successfully!" });
        }
    });
}

function partnerRegistrationController(req, res) {
    const { email, name, password, age, address, languages, phone, sex } = req.query
    const newPartner = Partner.create({
        email,
        name,
        password,
        age,
        address,
        languages,
        phone,
        sex,
    }, (error, ctx) => {
        if (error) {
            console.error(error);
        } else {
            return res.status(200).json({ message: "Registered successfully!" });
        }
    });
}

function partnerLoginController(req, res) {
    Partner.findOne({ email: req.query.email }, (error, ctx) => {
        if (ctx === null) {
            res.status(200).json({ status: 404, message: "User not found!" });
        } else if (req.query.password !== ctx.password) {
            res.status(200).json({ status: 403, message: "Password is wrong!" });
        } else {
            res.status(200).json({ status: 200, message: "Success!" });
        }
    });   
}

function clientLoginController(req, res) {
    Client.findOne({ email: req.query.email }, (error, ctx) => {
        if (ctx === null) {
            res.status(200).json({ status: 404, message: "User not found!" });
        } else if (req.query.password !== ctx.password) {
            res.status(200).json({ status: 403, message: "Password is wrong!" });
        } else {
            res.status(200).json({ status: 200, message: "Success!" });
        }
    });  
}
