const express = require("express");
const router = express.Router();
const homepageController = require("../controllers/homepage_controller");

router.get("/", homepageController.home);

module.exports = router;