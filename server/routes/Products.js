const express = require('express')
const router = express.Router()
const Product = require('../model/product')
const { error } = require('console')

router.get('', async function(req, res){
    foundProducts = await Product.find({})
        res.json({foundProducts})
    
})

router.get('/:productId', async function(req, res){
    foundProducts = await Product.findById(req.params.productId)
        res.json({foundProducts})
    
})

module.exports = router