import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://unifysolutions:abcdefg@cluster0.hqkekfc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}