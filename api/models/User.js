import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  picture: String,
  auth_time: Number,
  user_id: String,
  email: String,
  uid: String,
});

export default mongoose.model("User", userSchema, "Users");
