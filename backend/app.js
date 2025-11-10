const express = require('express');
const cors = require('cors');

const app = express();
require('dotenv').config();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Justin Store API is running" });
});

app.use('/users', require('./routes/userRoutes'));
app.use('/products', require('./routes/productRoutes'));

app.listen(3000, () => console.log("Server running on port 3000"));
