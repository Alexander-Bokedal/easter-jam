import mongoose from "mongoose";

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

const connectMongoDB = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error("URI IS NOT DEFINED");
    }
    await mongoose.connect(MONGODB_URI, {
      dbName: "easter-jam",
    });
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

export default connectMongoDB;
