const express = require("express");
const app = express();
const reqFilter = require("./middleware");
const route = express.Router();
// app.use(reqFilter);
app.use("/", route);
route.use(reqFilter);

app.get("/", (_, res) => {
  res.send("Welcome to home page");
});

app.get("/users", (_, res) => {
  res.send("Welcome to users page");
});

route.get("/about", (_, res) => {
  res.send("Welcome to About page");
});

route.get("/contact", (_, res) => {
  res.send("Welcome to Contact page");
});

app.listen(5000);
