// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import { app } from "./app.js";

import mongoose from "mongoose";
import { DB_NAME} from "./constants.js"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

const port  = process.env.PORT||8000;

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`server is running: ${port}`)
    })
})
.catch((err) =>{
    console.log("MONGO dp connection failed!!! ",err);
})







/*
import express from "express"
const app = express()

//iffyies

;( async ()=>{
    try{
       await mongoose.connect('${process.env ,MONGODB_URI}/${DB_NAME}')
       app.on("error",(error)=>{
        console.log ("error---",error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`app is listining on ${process.env.PORT}`);
       })

    }catch(error){
        console.log("error ", error);
        throw err;
    }
})*/