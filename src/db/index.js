import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`)
        console.log(`\n Database connected successfully: ${connectionInstance.connection.host}`);


    }catch(error){
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit the process with failure
    }
}
export default connectDB;
    

