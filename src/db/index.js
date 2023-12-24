import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONOGODB is conntected ! DB Host !! "${connectionInstance.connection.host}" \n DB_NAME !!"${DB_NAME}"`);
        return connectionInstance;
    } catch (error) {
        console.log("MONGODB connection error", error);
        throw error;
    }
}

export default connectDB