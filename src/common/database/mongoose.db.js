import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true })
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

export default mongoose;
