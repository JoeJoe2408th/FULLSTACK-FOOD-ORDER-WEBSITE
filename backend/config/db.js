import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("KET NOI MONGODB THANH CONG");
  } catch (error) {
    console.log("CO LOI KET NOI MONGODB:", error);
  }
};

