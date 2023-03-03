import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"

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

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected")
})

app.get("/", (req,res) => {
    res.send("Ok")
})

app.listen(7777, () => {
    connect();
    console.log("Connected to Backend")
})