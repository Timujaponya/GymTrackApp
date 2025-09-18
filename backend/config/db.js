// src/config/db.js
import mongoose from "mongoose";
import env from "./dotenv.js"
const {mongo_uri} = env;

export async function connectDb() {
  try {
    await mongoose.connect(mongo_uri);
    console.log("MongoDB connected with Mongoose");
  } catch (err) {
    console.error("DB connection error", err);
    process.exit(1);
  }
}


export default {connectDb};