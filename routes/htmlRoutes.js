const path = require("path");
const router = require("express").Router();
const connection = require("../db/dbConnection");

router.get("/employee", function(req, res) {
  connection.query("SELECT * FROM employee;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    // console.log(data);
    res.render("index", { employees: data });
  });
});

router.get("/role", function(req, res) {
  connection.query("SELECT * FROM role;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    // console.log(data);
    res.render("index", { role: data });
  });
});

router.get("/department", function(req, res) {
  connection.query("SELECT * FROM department;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    // console.log(data);
    res.render("index", { department: data });
  });
});

router.get("/all", function(req, res) {
  connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    // console.log(data);
    res.render("all", { all: data });
  });
});

// All other routes respond with the index.html file
router.get('/', function (req, res) {
  res.render('home');
});

module.exports = router;