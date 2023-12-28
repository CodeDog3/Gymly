import mongoose from "mongoose";

export const connectMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log("connected to mongodb")
    } catch (error) {
        console.log("error connecting to mongodb: ",error)
    }
}