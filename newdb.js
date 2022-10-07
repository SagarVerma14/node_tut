const express = require("express");
const app = express();
const con = require("./newConfig");
app.get("/", (req, res) => {
  con.query("select * from users", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

app.post("/", (req, res) => {
  const data = { name: "verma", password: 234567 };
  con.query("INSERT INTO users SET? ", data, (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

app.put("/", (req, res) => {
  const data = ["vermas", 0000, "verma"];
  con.query(
    "UPDATE users SET name = ?,password = ?  WHERE name = ?",
    data,
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/:name", (req, res) => {
  const data = req.params.name;
  console.log(data);
  con.query("DELETE FROM users WHERE name = 'vermas'", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

app.listen(5000);
