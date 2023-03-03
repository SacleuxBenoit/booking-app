import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels";
import roomsRoute from "./routes/rooms";
import userRoute from "./routes/users";

const app = express();
dotenv.config();

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb")
    }catch(error){
        throw error()
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected")
})

// middlewares
app.use("/api/auth", authRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/users", userRoute)



app.listen(7777, () => {
    connect();
    console.log("Connected to Backend")
})