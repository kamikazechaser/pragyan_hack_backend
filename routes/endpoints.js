exports = module.exports = {
    clientRegistrationController
}


// own modules
const package = require("../package");


function clientRegistrationController(req, res) {
    console.log(req.query);
    res.status(200);
}