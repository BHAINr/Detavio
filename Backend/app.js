const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

// Correct usage of require for importing the router

app.use('/api/v1',require('./routes/UserRoutes'));
app.use('/api/v1', require('./routes/ProductRoutes'));
module.exports = app;
