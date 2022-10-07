const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./config");
const Product = require("./product");

app.use(express.json());

app.get("/search/:key", async (req, res) => {
  let data = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  res.send(result);
});

app.get("/list", async (req, res) => {
  let data = await Product.find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  let data = await Product.deleteOne(req.params.id);
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  let data = await Product.updateOne(req.params.id, {
    $set: req.body,
  });
  res.send(data);
});

app.listen(5000);
