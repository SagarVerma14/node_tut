const dbConnect = require("./mongodb");

const deleteData = async () => {
  const db = await dbConnect();
  const results = await db.deleteOne({
    name: "max 2",
  });
  console.log(results);
};

deleteData();
