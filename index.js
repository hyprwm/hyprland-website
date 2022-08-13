const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req,res) => {
  res.render("home")
})

app.get("/install", (req, res) => {
  res.render("install");
});

app.get("/configure", (req, res) => {
  res.render("configure");
});

app.get("*", (req,res) => {
  res.render("404")
})

app.listen(4000, () => {
  console.log("Listening to PORT: 4000");
});