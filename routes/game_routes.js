const express = require("express");
const router = express.Router();
const GameController = require("../controllers/game_controller");

router.get("/", GameController.index);
router.get("/new", GameController.newGame);
router.post("/", GameController.create);

module.exports = router;