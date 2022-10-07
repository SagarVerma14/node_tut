const mysql = require("mysql");
const com = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

com.connect((err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("connected");
  }
});

com.query("select * from users", (err, result) => {
  console.log("results", result);
});
