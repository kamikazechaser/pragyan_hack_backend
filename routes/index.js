// npm installed modules
const express = require("express");


// module variables
const router = express.Router();


// routes controller
const api = require("./endpoints");


// other routes
router.get("/registerclient", api.clientRegistrationController);


exports = module.exports = router;