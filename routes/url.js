const express = require("express");
const router = express.Router();
const {
  handleGenerateShortURL,
  handleRedirectUrl,
  handleAnalytics,
} = require("../controllers/url");

router.post("/", handleGenerateShortURL);

router.get("/:shortId", handleRedirectUrl);

router.get("/analytics/:shortId", handleAnalytics);

module.exports = router;

