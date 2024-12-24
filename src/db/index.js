import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try{
        const connectio = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MONGO DB connected!! DB HOST: ${connectio.connection.host}`);

    }catch(error){
        console.log("mongo db connection  error ",error);
        process.exit(1);
    }
}

export default connectDB