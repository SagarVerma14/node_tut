// const os = require("os");

// console.log(os.arch());
// console.log(os.totalmem() / (1024 * 1024 * 1024));
// console.log(os.freemem() / (1024 * 1024 * 1024));
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.userInfo());
 
const express = require("express");
const app = express();
const EventEmitter = require("events");
const events = new EventEmitter();
let count = 0;
events.on("api called", () => {
  count++;
  console.log("This is called", count);
});
app.get("/", (req, res) => {
  res.send("Api called");
  events.emit("api called");
});

app.get("/update", (req, res) => {
  res.send("update Api called");
  events.emit("api called");
});

app.get("/", (req, res) => {
  res.send("search Api called");
  events.emit("api called");
});

app.listen(5000);
