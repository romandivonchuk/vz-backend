require("dotenv").config();

const express = require('express');
const connectDB = require('./config/db');
const productsRoutes = require('./routes/productsRoutes');

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/products', productsRoutes);
app.listen(PORT, () => console.log(`server running on port ${PORT} `))
