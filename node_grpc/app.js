const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const { responseBody } = require("./utils/responseDto");

const app = express();


// Express Midleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Express Route Import
const test = require("./routes/test");

// Express Route Path
app.use("/test", test);


// catch 404 and forward to error handler
app.use( (req, res, next) =>{
    let err = new Error;
    err.message = 'Page Not Found'
    res.status(404).json(responseBody(err, "Page Not Found", 404)).end();

});

module.exports = app;
