// npm installed modules
const express = require("express");


// module variables
const router = express.Router();


// routes controller
const api = require("./endpoints");


// other routes
router.get("/registerclient", api.clientRegistrationController);
router.get("/loginclient", api.clientLoginController);
router.get("/loginpartner", api.partnerLoginController);
router.get("/registerPartner", api.partnerRegistrationController);
router.get("/clientbookinghistory", api.openClientBookingHistoryController);
router.get("/subnewpartnerlocation", api.addNewPartnerLocationController);
router.get("/guidelocations", api.guideLocationsController);


exports = module.exports = router;
