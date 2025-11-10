const express = require('express');
const router = express.Router();
const db = require('../config/db');

// CREATE
router.post('/', (req, res) => {
  const { name, price, stock } = req.body;
  db.query(
    "INSERT INTO products (name, price, stock) VALUES (?, ?, ?)",
    [name, price, stock],
    (err) => {
      if (err) throw err;
      res.json({ message: "Product created" });
    }
  );
});

// READ
router.get('/', (req, res) => {
  db.query("SELECT * FROM products", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  const { name, price, stock } = req.body;
  db.query(
    "UPDATE products SET name=?, price=?, stock=? WHERE id=?",
    [name, price, stock, req.params.id],
    (err) => {
      if (err) throw err;
      res.json({ message: "Product updated" });
    }
  );
});

// DELETE
router.delete('/:id', (req, res) => {
  db.query("DELETE FROM products WHERE id=?", [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: "Product deleted" });
  });
});

module.exports = router;
