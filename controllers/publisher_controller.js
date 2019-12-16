const GameModel = require("../database/models/game_model");

async function index(req, res) {
    let publishers = await GameModel.find().select("publisher");
    res.render("publisher/index", { publishers });
}

module.exports = {
    index
};