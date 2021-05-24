const Product = require('./models/Product');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product_routes');

mongoose.connect('mongodb://localhost:27017/ebbes', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	console.log('connected to database');
	const app = express();

	app.use(express.json());
	app.use('/api/v1/',productRoutes);

	app.listen(5000, () => {
		console.log('running on port 5000');
	});
});
