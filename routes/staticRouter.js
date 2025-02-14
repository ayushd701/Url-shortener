const express = require("express");
const URL = require("../models/url");
const staticRouter = express.Router();

staticRouter.get("/" , (req,res) => {
    const allUrls = URL.find({});
    return res.render("home" , {urls : allUrls ,});
})

module.exports = staticRouter;