exports = module.exports = {
    clientRegistrationController,
    clientLoginController,
    partnerLoginController,
    partnerRegistrationController,
    openClientBookingHistoryController,
    addNewPartnerLocationController,
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

function openClientBookingHistoryController(req, res) {
    Client.find({ email: req.query.email }, (error, ctx) => {
      const secureObj = ctx;
      //secureObj.password = null;
        if (ctx === null | ctx.length === 0) {
            res.status(200).json({ status: 404, message: "No transactions yet!" });
        } else {
            res.status(200).json({ status: 200, data: secureObj });
          }
    });
}

function addNewPartnerLocationController(req, res) {
  const {email,x_loc,y_loc,description, cost, url} = req.query;
   Partner.findOneAndUpdate({ email: req.query.email }, {
     $set : {
       location_description: description,
       guide_fees: cost,
       x_location: x_loc,
       y_location: y_loc,
       location_cover_image: url
     }
   }, (error, ctx ) => {
     if (ctx === null) {
         res.status(200).json({ status: 404, message: "No data found!" });
     } else {
         res.status(200).json({ status: 200, message:"success"});
   }
 });
}
