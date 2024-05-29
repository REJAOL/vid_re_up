import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';

const connectDB = async () => {

    try {

        const connInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb connected !! DB HOST: ${connInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
}

export default connectDB;