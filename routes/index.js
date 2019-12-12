const express = require("express");
const router = express.Router();
const homepageRoutes = require("./homepage_routes");
const gameRoutes = require("./game_routes");

router.use("/", homepageRoutes);
router.use("/games", gameRoutes);

module.exports = router;