const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config();

const connectMongoDb = require("./init/mongodb")
const {authRoute} = require("./routes")
const {errorHandler} = require("./middlewares")
//Connect MongoDB
connectMongoDb();
// init app
const app = express();

// 3rd party middlewares
app.use(express.json({limit: "500mb"}));
app.use(bodyParser.urlencoded({limit: "500mb", extended: true}));
app.use(morgan("dev"));

//route section
app.use("/api/v1/auth", authRoute)

//error handler section
app.use(errorHandler)

module.exports = app;