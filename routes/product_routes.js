const Product =  require('../models/Product');
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
router.post('/product',async (req,res)=>{
    const {name, price , category, image_url} = req.body;
    console.log(req.body);
    res.status(201).json(req.body);
    
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