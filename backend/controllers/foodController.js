import foodModels from "../models/foodModels.js";
import fs from "fs"

const addFood = async (req,res) => {
    try {
        let image_filename = `${req.file.filename}`

        const newFood = new foodModels({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        })

        // Save to Database
        const food = await newFood.save()
        res.status(200).json({success: true, message:"Food Added"})
    } 
    catch (err) {
        res.status(500).json({success:false, message:"Error"})
    }
}

const listFood = async(req,res) => {
    try {
        const food = await foodModels.find({})
        res.status(200).json({success: true, data:food})
    } catch (err) {
        console.log(err)
        res.status(500).json({success: false, message:"Error"})
    }
}

const removeFood = async(req,res) => {
    try {
        const food = await foodModels.findById(req.body.id)
        fs.unlink(`uploads/${food.image}` ,() => {})

        await foodModels.findByIdAndDelete(req.body.id)
        res.status(200).json({success: true, message: "Food Removed"})
    } catch (err) {
        console.log(err)
        res.status(500).json({success: false, message:"Error"})
    }
}

export {addFood, listFood, removeFood}