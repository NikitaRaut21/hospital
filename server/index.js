import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import  dotenv from 'dotenv';
dotenv.config();

const app =express();
const PORT =process.env.PORT  || 5000;
const MONGO_URI=process.env.MONGO_URI
app.use(express.json());
app.use(cors());

//connect db
(async()=>{
    const conn = await mongoose.connect( MONGO_URI);
    if(conn){
        console.log('mongoDB Connected successfully✅');
    }
})();

app.get("/",(req,res)=>{
    res.json({
        message:"welcome to  my healthcare api"
    })
})
 


 app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
 })




