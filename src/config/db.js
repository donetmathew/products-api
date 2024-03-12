const mongoose=require("mongoose");

const connectDB=async function connectDB(){
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to db");
    }
    catch(err){
        console.log(err);
    }
}

module.exports= connectDB