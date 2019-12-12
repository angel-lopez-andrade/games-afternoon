const GameModel = require("../database/models/game_model");

async function index(req, res) {
    console.log("a");
    let games = await GameModel.find();
    res.render("game/index", { games });
};

module.exports = {
    index
};