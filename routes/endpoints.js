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
    res.status(200);
}

function partnerRegistrationController(req, res) {
    console.log(req.query);
    res.status(200);
}

function partnerLoginController(req, res) {
    console.log(req.query);
    res.status(200);
}

function clientLoginController(req, res) {
  console.log(req.query);
  res.status(200);
}
