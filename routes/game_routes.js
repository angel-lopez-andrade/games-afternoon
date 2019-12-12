const express = require("express");
const router = express.Router();
const GameController = require("../controllers/game_controller");

router.get("/", GameController.index);

module.exports = router;