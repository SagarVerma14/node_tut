const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  categories: String,
});
const saveInDB = async () => {
  const productModal = mongoose.model("products", productSchema);
  let data = new productModal({
    name: "M80",
    price: 1000,
    brand: "Samsung",
    categories: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "M80" },
    { $set: { price: 6000 } }
  );
  console.log("data", data);
};

const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteOne({ name: "M80" });
  console.log("data", data);
};

const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find();
  console.log("data", data);
};
// main();
// updateInDB();
// deleteInDB();
// findInDB();
