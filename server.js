const express = require("express");
const app = express();
const path = require("path");
const PublicPath = path.join(__dirname, "public");

// app.use(express.static(PublicPath));
app.set("view engine", "ejs");
app.get("", (_, res) => {
  res.sendFile(`${PublicPath}/index.html`);
});

app.get("/profile", (_, res) => {
  const user = {
    name: "Sagar Verma",
    email: "sagar@test.com",
    city: "Delhi",
    skills: ["php", "react", "js"],
  };
  res.render("profile", { user });
});

app.get("/about", (_, res) => {
  res.sendFile(`${PublicPath}/About.html`);
});

app.get("/login", (_, res) => {
  res.render("login");
});

app.get("*", (_, res) => {
  res.send(`This is not a valid path ====>>> ${PublicPath}/index.html`);
});
// app.get("", (req, res) => {
//   res.send("<h1>Hello, This is my Home page</h1><a href='/about'>Go To About page</a>");
// });

// app.get("/about", (req, res) => {
//   res.send(`
//     <input type='text' placeholder='Enter your name'/>
//     <button>Click Me</button>
//   `);
// });

// app.get("/help", (req, res) => {
//   res.send({
//     name: "sagar",
//     email: "sagar@test.com",
//   });
// });

app.listen(4000);
