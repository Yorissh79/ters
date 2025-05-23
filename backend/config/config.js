import mongoose from "mongoose";
import {configDotenv} from "dotenv";

configDotenv();

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (err) {
        console.log(err);
    }
}

// mongodb+srv://nepic66374:7g4K2cZBu16mAlhG@cluster0.x9w6wg3.mongodb.net/