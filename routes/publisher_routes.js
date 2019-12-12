const express = require("express");
const router = express.Router();
const publisherController = require("../controllers/publisher_controller");

router.get("/new", publisherController.newPublisher);

module.exports = router;