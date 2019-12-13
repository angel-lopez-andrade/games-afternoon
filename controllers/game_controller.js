const GameModel = require("../database/models/game_model");

async function index(req, res) {
    let games = await GameModel.find();
    res.render("game/index", { games });
};

async function newGame(req, res) {
    let genres = await GameModel.schema.path("genre").enumValues;
    res.render("game/new", { genres });
}

async function create(req, res) {
    let {name, genre, "release-year": releaseYear, publisher} = req.body;
    let game = await GameModel.create({
        name,
        genre,
        releaseYear,
        publisher
    });
    res.redirect("/games");
}

module.exports = {
    index,
    newGame,
    create
};