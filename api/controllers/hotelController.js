import Hotel from "../models/Hotel.js";

export const createHotel = async (req,res) => {
    const newHotel = new Hotel(req.body);

    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        next(err)
    }
} 

export const updateHotel = async (req,res) => {
    try{
        await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json("hotel has been deleted");
    }catch(err){
        next(err)
    }
}

export const deleteHotel = async (req,res) => {
    try{
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedHotel);
    }catch(err){
        next(err);
    }
}

export const getHotel = async (req,res) => {
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
    }catch(err){
        next(err)
    }
}

export const getHotels = async (req,res) => {
    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels);
    }catch(err){
        next(err);
    }
}