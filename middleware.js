const reqFilter = (req, res, next) => {
  console.log("reqFilter");
  if (!req.query.age) {
    res.send("Please Enter your Age");
  } else if (req.query.age < 18) {
    res.send("You cannot access this Page");
  } else next();
};

module.exports = reqFilter;
