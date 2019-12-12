const GameModel = require("../database/models/game_model");

function newPublisher(req, res) {
    res.render("publisher/new");
}

module.exports = {
    newPublisher
};