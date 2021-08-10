import express from "express"
import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"



const router = express.Router()


 // Fetch all products - set to model Product with find method and empty object - return everything
 // Route - GET  /api/products
 // Access - Public
router.get('/', asyncHandler(async (req, res) => {
    // Product.find({}) return a promise so we need to use await - use express-async-handler
    const products = await Product.find({})
    res.json(products)
}))


 // Fetch single product 
 // Route - GET  /api/products/:id
 // Access - Public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    // check to make sure there is a product
    product ? res.json(product) : res.status(404).json({message: 'Product not found'})
}))

export default router