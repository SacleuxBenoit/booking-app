import express from "express";

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Auth endpoint")
})

router.get("/register", (req,res) => {
    res.send("Auth /register endpoint")
})

export default router;