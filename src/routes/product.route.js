const express=require("express");
const router = express.Router();
const {getProducts,createProducts, getProductById,updateProducts}= require("../controllers/product.controller")

router.get('/products',getProducts);

router.post('/products',createProducts);

router.get('/products/:id',getProductById);

router.put('/products/:id',updateProducts);



module.exports=router