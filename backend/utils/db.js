import mongoose from "mongoose";


export default async function connectDB(){
    try{
        await mongoose.connect()
    }catch(err){
        console.log(err);
        
    }
}