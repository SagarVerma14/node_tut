const dbConnect = require("./mongodb");

const deleteData = async () => {
  const db = await dbConnect();
  let results = await db.updateOne(
    { name: "max 3" },
    { $set: { name: "max pro 3" } }
  );
  console.log(results);
};
deleteData();