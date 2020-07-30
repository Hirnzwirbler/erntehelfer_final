const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const mainRouter = require("./routes/mainRouter");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

//Views
app.set('views', './views');
app.set('view engine', 'ejs');


// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
app.use(mainRouter);
app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);


app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
