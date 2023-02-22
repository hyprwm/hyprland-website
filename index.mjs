import express from "express";
const app = express();

import { join, dirname } from "path";
const __dirname = dirname(new URL(import.meta.url).pathname);

app.use(express.static(join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/rices", (req, res) => {
  res.render("rices");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(4000, () => {
  console.log("Listening to PORT: 4000");
});