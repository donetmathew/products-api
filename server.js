const express=require("express");
const dotenv = require("dotenv");
const connectDB=require("./src/config/db")
const router=require("./src/routes/product.route")

dotenv.config();

const app=express();

app.use(express.json());

connectDB();

app.use('/api',router);

app.get("/",(req,res)=>{
    console.log("Entered");
    res.send("API is succesfull");
})

app.listen(process.env.PORT || 3000 ,()=>{
    console.log("Server started at 5000");
})
