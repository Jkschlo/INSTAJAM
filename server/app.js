// require the express module and body-parser middleware
const express = require("express");
var bodyParser = require("body-parser");

// create an instance of the express application
const app = express();

// serve static files from the "client/public" directory
app.use(express.static("client/public"));

// parse incoming JSON data
app.use(bodyParser.json({ type: "application/json" }));

// define page routes
app.get("/home", function (req, res) {
  res.sendFile("index.html", { root: "client/views" });
});
app.get("/login", function (req, res) {
  res.sendFile("login.html", { root: "client/views" });
});
app.get("/about", function (req, res) {
  res.sendFile("about.html", { root: "client/views" });
});
app.get("/contact", function (req, res) {
  res.sendFile("contact.html", { root: "client/views" });
});
app.get("/feed", function (req, res) {
  res.sendFile("feed.html", { root: "client/views" });
});
app.get("/careers", function (req, res) {
  res.sendFile("careers.html", { root: "client/views" });
});
app.get("/signup", function (req, res) {
  res.sendFile("signup.html", { root: "client/views" });
});

// use userRoute for user-related routes
app.use("/api/user", require("./route/userRoute"));

// use userRoute for post-related routes
app.use("/api/post", require("./route/postRoute"));

// start listening on port 1337
app.listen(1337, () => console.log("Marist Chatter listening on port 1337!"));