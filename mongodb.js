const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "e-comm";

async function dbConnect() {
  let results = await client.connect();
  let db = results.db(database);
  return db.collection("products");
}

module.exports = dbConnect;
