const dbConnect = require("./mongodb");

const insertData = async () => {
  const db = await dbConnect();
  const result = await db.insert([
    {
      name: "max 1",
      brand: "micromax",
      price: 2701,
      categories: "mobile",
    },
    {
      name: "max 2",
      brand: "micromax",
      price: 2702,
      categories: "mobile",
    },
    {
      name: "max 3",
      brand: "micromax",
      price: 2703,
      categories: "mobile",
    },
  ]);
  if (result.acknowledged) {
    console.log("Data Inserted Successfully");
  }
  console.log("result", result);
};

insertData();
