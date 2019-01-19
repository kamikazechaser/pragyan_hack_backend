// npm installed modules
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");


// own modules
const config = require("./config");
const routes = require("./routes");


// module variables
mongoose.connect(config.mongo.url, { useNewUrlParser: true });

const db = mongoose.connection;

const app = express();


// API
// Express middlewares
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express router
app.use("/", routes);

// Gracefully connected/disconnected to the database.
db.once("open", () => {
    console.log("Successfully connected to DB");
    app.listen(config.server.port, () => {
        console.log(`Server started on port ${config.server.port}`);
    });
});

db.on("error", () => {
    console.error("Failed to connect to DB");
});

db.on("disconnected", () => {
    console.log("Connection to DB disconnected");
});