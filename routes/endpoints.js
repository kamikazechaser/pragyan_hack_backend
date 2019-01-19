const Client = require('../models/clientModel.js')
const Partner = require('../models/partnerModel.js')

exports = module.exports = {
    clientRegistrationController,
    partnerRegistrationController
}


// own modules
const package = require("../package");


function clientRegistrationController(req, res) {
    console.log(req.query);
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
    })
    res.sendStatus(200)
}

function partnerRegistrationController(req, res) {
    console.log(req.query);
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
    })
    res.sendStatus(200)
}