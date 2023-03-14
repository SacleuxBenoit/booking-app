import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js"

export const createRoom = async (req,res,next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}})
        }catch(err){
            next(err)
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err)
    }
} 

export const updateRoom = async (req,res) => {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedRoom);
    }catch(err){
        next(err)
    }
}

export const deleteRoom = async (req,res) => {
    const hotelId = req.params.hotelid;

    try{
        const deletedRoom = await Room.findByIdAndDelete(req.params.id)
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {rooms: req.params.id}})
        }catch(err){
            next(err)
        }
        res.status(200).json(deletedRoom);
    }catch(err){
        next(err);
    }
}

export const getRoom = async (req,res) => {
    try{
        const room = await Room.findById(req.params.id)
        res.status(200).json(room);
    }catch(err){
        next(err)
    }
}

export const getRooms = async (req,res) => {
    try{
        const rooms = await Room.find()
        res.status(200).json(rooms);
    }catch(err){
        next(err);
    }
}