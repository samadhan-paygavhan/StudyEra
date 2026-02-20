import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/study-era`);
    console.log("Database was connected successfully");
  } catch (error) {
    console.log("MongoDB connection error ", error);
  }
};

export default connectDB;
