const Product =  require('../models/Product');
const Category =  require('../models/Category')
const express = require('express');
const router = express.Router();


/**
 * **** query parameters *****
 * id
 * categoryid
 * priceLevel
 * orderby style ASC and DESC
 * page
 * limit
 */

// app.get('/products', async (req, res) => {
// 	const products = await Product.find();
// 	res.send(products);
// });

// app.post('/products', async (req, res) => {
// 	console.log('req.body');
// 	const product = new Product({
// 		name: req.body.name,
// 		price: req.body.price,
// 		image_url: req.body.image_url,
// 	});
// 	await product.save();
// 	res.status(201).send(product);
// });
router.post('/product',async (req,res)=>{
    const category = new Category({
        
    });

    const product =  new Product(
        {
        name: req.body.name,
		price: req.body.price,
		image_url: req.body.image_url,
        category:{
            name : req.body.category.name,
            type : req.body.category.type,
            color : req.body.category.color
        }
        }
    );
    
    await product.save().then(()=>{
        res.status(201).json(product);

    });
});

router.get('/products',(req,res)=>{
    const {id, categoryId, priceLevel, orderBy,page,limit} = req.query;
    console.log ({id,categoryId,priceLevel,orderBy, page, limit});
    res.status(201).json(req.query);
});

router.get('/product/:id',(req,res)=>{

});
router.patch('/product/:id',async (req, res)=>
{

});
router.delete("/product/:id",async(req,res)=>{

});

module.exports = router;