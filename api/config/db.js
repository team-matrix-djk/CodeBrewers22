import mongoose from "mongoose";
import "dotenv/config.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.DB_CON,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("database connected");
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
