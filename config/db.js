import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://comalappa:0613BTS7@cluster0.ovj3k94.mongodb.net/food-del').then(()=>console.log('DB Connected'));
}