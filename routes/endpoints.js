const Client = require('../models/clientModel.js')
const Partner = require('../models/partnerModel.js')

exports = module.exports = {
    clientRegistrationController,
    clientLoginController,
    partnerLoginController,
    partnerRegistrationController
}


// own modules
const package = require("../package");

function partnerRegistrationController(req, res) {
    console.log(req.query);
    res.status(200);
}


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

function partnerLoginController(req, res) {
    console.log(req.query);
    res.status(200);
}

function clientLoginController(req, res) {
  console.log(req.query);
  res.status(200);
}
