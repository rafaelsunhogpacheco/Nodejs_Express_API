const express = require('express');

const app = express();
const productRoutes = require('./routes/routes');

app.use(productRoutes);

app.use(express.json())

module.exports = app