const express = require("express");
const router = express.Router();
const { handleGenerateNewShortUrl , handleRedirectToUrl , handleGetAnalytics } = require("../controllers/url");
const URL = require("../models/url");

router.post("/", handleGenerateNewShortUrl);

router.get("/:shortId",handleRedirectToUrl);

router.get("/analytics/:shortId" , handleGetAnalytics);


module.exports = { router };
