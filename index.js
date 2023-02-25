const express = require("express");
const app = express();

const { join } = require("path");

const compression = require("compression");
const expressEJSLayouts = require("express-ejs-layouts");

app.disable('x-powered-by');

app.use(compression());
app.use(express.static(join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.use(expressEJSLayouts);

app.use((req, res, next) => {
  // Security Headers - Refer to MDN and helmetjs docs
  res.set("Content-Security-Policy", `default-src 'self'; img-src 'self'; media-src 'self'; script-src 'unsafe-inline' 'self' https://cdn.jsdelivr.net https://code.jquery.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; font-src 'self' data:; object-src 'none'; child-src 'none'; frame-ancestors 'none'; frame-src 'none'; upgrade-insecure-requests`);
  res.set("Strict-Transport-Security", "max-age=15552000; includeSubDomains");
  res.set("X-Content-Type-Options", "nosniff");
  res.set("X-Frame-Options", "DENY");
  next();
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/rices", (req, res) => {
  res.render("rices");
});

app.use((_, res) => {
  res.status(404).render("404");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Listening to PORT: 4000");
});

app.get("/discord", (req, res) => {
  res.status(200).send("<head><title>redirecting...</title><body><script>window.location.href='https://discord.gg/hQ9XvMUjjr';</script></body>");
});