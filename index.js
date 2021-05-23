const Product = require('./models/Product');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();

app.use(express.json());

app.get('/products', async (req, res) => {
	const products = await Product.find();
	res.send(products);
});

app.post('/products', async (req, res) => {
	console.log('req.body');
	const product = new Product({
		name: req.body.name,
		price: req.body.price,
		image_url: req.body.image_url,
	});
	await product.save();
	res.status(201).send(product);
});

mongoose.connect('mongodb://localhost:27017/ebbes', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	console.log('connected to database');
	app.listen(5000, () => {
		console.log('running on port 5000');
	});
});
