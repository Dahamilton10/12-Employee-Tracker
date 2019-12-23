const router = require("express").Router();

// we require the dbconnection file so that we can access the connection oobject that we established
// this allows us to call "connection.query(...)" anyhere the connection has been required.
const connection = require('../db/dbConnection')

// router in this case is behaving the same as it has throughout the route tree, however we are now at the endpoints that will bit hit with browser requests
// instead of calling "router.USE(...)" we will be calling "router.get(..)", replacing "get" with whichever http verb is relevant (post, delete, etc.)


router.post("/api/employee", function(req, res) {
  const query = `"INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (${req.params}, ${req.params}, ${req.params}, ${req.params})"`
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  })
});

router.put("/api/employee/:id", function(req, res) {
  console.log(req.body);
  connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [req.params.roleid, req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

router.delete("/api/employee/:id", function(req, res) {
  connection.query("DELETE FROM employee WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200);

  });
});



// 



router.post("/all", function(req, res) {
  const query = "SELECT * FROM users"
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  })
});

router.post("/all", function(req, res) {
  const query = "SELECT * FROM users"
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  })
});



// 



router.post("/all", function(req, res) {
  const query = "SELECT * FROM users"
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  })
});

router.post("/all", function(req, res) {
  const query = "SELECT * FROM users"
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  })
});


module.exports = router;