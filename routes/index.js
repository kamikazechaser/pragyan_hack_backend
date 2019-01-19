// npm installed modules
const express = require("express");


// module variables
const router = express.Router();


// routes controller
const api = require("./endpoints");


// other routes
router.get("*", api.otherController);


exports = module.exports = router;