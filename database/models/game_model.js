const mongoose = require("mongoose");
const GameSchema = require("../schemas/game_schema");

const GameModel = mongoose.model("game", GameSchema);

module.exports = GameModel;