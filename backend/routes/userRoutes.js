const express = require('express');
const router = express.Router();
const db = require('../config/db');

// CREATE
router.post('/', (req, res) => {
  const { name, email, password } = req.body;
  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err) => {
      if (err) throw err;
      res.json({ message: "User created" });
    }
  );
});

// READ
router.get('/', (req, res) => {
  db.query("SELECT * FROM users", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  const { name, email, password } = req.body;
  db.query(
    "UPDATE users SET name=?, email=?, password=? WHERE id=?",
    [name, email, password, req.params.id],
    (err) => {
      if (err) throw err;
      res.json({ message: "User updated" });
    }
  );
});

// DELETE
router.delete('/:id', (req, res) => {
  db.query("DELETE FROM users WHERE id=?", [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: "User deleted" });
  });
});

module.exports = router;
