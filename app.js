const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const connectMongoDb = require("./init/mongodb")

//Connect MongoDB
connectMongoDb();
// init app
const app = express();

// 3rd party middlewares
app.use(express.json({limit: "500mb"}));
app.use(bodyParser.urlencoded({limit: "500mb", extended: true}));



module.exports = app;