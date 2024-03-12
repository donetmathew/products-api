const Product= require("../models/product.model");

const getProducts = async function(req,res){
    try{
        const products= await Product.find({});
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const createProducts= async function(req,res){
    try{
        const product=await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(e){
        res.status(500).send("error occured")
    }
}

const getProductById=async function(req,res){
    try{
        const {id}=req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
        }
        catch(error){
            res.status(500).json({message:error.message})
        }
}

const updateProducts= async function(req,res){
    try{
        const {id}=req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            res.status(404).json({message:"Product not found"});
        }
        const updatedProduct= await Product.findById(id);
        if(updateProducts){
            res.status(200).json(updatedProduct);
        }
        
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports={
    getProducts,
    createProducts,
    getProductById,
    updateProducts
}