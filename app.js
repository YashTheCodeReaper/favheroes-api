// 3rd party imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize app with express 
const app = express();

// Middlewares to be used by app
app.use(bodyParser.json());

// http headers
app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src *'; font-src *; img-src *; script-src *; style-src *; frame-src *"
  );
  next();
});

// Export app
module.exports = app;
