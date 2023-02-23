import express from "express";
const app = express();

import { join, dirname } from "path";
const __dirname = dirname(new URL(import.meta.url).pathname);

import compression from "compression";

app.disable('x-powered-by');

app.use(compression());
app.use(express.static(join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

app.use((req, res, next) => {
  // Security Headers - Refer to MDN and helmetjs docs
  res.set("Content-Security-Policy", `default-src 'self' https://cdn.jsdelivr.net; img-src 'self'; media-src 'self'; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; font-src 'self'; object-src 'none'; child-src 'none'; frame-ancestors 'none'; frame-set 'none'; upgrade-insecure-requests`);
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

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(4000, () => {
  console.log("Listening to PORT: 4000");
});