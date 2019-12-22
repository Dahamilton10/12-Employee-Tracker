const path = require("path");
const router = require("express").Router();
const connection = require("../db/dbConnection");

router.get("/", function(req, res) {
  connection.query("SELECT * FROM employee;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    console.log(data);
    res.render("index", { plans: data });
  });
});

// All other routes respond with the index.html file
// router.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

module.exports = router;