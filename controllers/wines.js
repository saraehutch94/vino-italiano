// Require dependencies

const express = require("express");
const Wine = require("../models/wine");

// Create router/controller object

const wineRouter = express.Router();

// List router actions

wineRouter.get("/", (req, res) => {
    res.send("Hello World");
});

// Export router object for use in server.js

module.exports = wineRouter;