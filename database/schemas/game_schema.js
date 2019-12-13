const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PublisherSchema = require("./publisher_schema");

const GameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ["Platformer", "Shooter", "Fighting", "RPG"]
    },
    releaseYear: {
        type: Number
    },
    publisher: PublisherSchema
});

module.exports = GameSchema;