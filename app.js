//Sets up application packages/middleware
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");

const app = express();

mongoose.connect("mongodb://localhost/games_afternoon", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => console.log(err));

app.use(methodOverride("_method", { methods: ["POST", "GET"]}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./routes");
app.use(routes);

module.exports = app;