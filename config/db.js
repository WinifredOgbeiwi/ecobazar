import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("connected to DB");
  } catch (error) {
    console.log(`ERROR:${error.message}`);
  }
};

export default connectDB;
