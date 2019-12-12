const express = require("express");
const router = express.Router();
const homepageRoutes = require("./homepage_routes");
const gameRoutes = require("./game_routes");
const publisherRoutes = require("./publisher_routes");

router.use("/", homepageRoutes);
router.use("/games", gameRoutes);
router.use("/publishers", publisherRoutes);

module.exports = router;