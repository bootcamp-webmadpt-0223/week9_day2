const express = require("express");
const path = require("path");
const hbs = require("hbs");
const Movie = require("./models/Movie");
require('./configs/db');

hbs.registerPartials(path.join(__dirname, "views", "partials"));

const app = express();

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.get("/", (request, response, next) => {
  Movie.find()
  .then(moviesFromDb => {
    response.render('index', { films:moviesFromDb })
  })
});

// Create a ranking page (10 movies order by rate)
// Create random movie page

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
