const GameModel = require("../database/models/game_model");

async function index(req, res) {
    let publishers = await GameModel
}

function newPublisher(req, res) {
    res.render("publisher/new");
}

module.exports = {
    newPublisher
};