import foodModels from "../models/foodModels.js";
import { cloudinary } from "../config/cloudinary.js";

const addFood = async (req,res) => {
    try {
        // 1. Validate file upload
        if (!req.file) {
            return res.status(400).json({
                success: false, 
                message: "Image is required"
            })
        }

        // 2. Validate input fields
        const { name, description, price, category } = req.body;
        
        if (!name || !description || !price || !category) {
            // Xóa ảnh đã upload trên Cloudinary nếu validation fail
            const publicId = req.file.path.split('/').slice(-2).join('/').split('.')[0];
            await cloudinary.uploader.destroy(publicId);
            
            return res.status(400).json({
                success: false, 
                message: "All fields are required"
            })
        }
        
        // 3. Lấy filename và URL
        let image_filename = `${req.file.filename}`
        const imageUrl = `${req.file.path}`

        const newFood = new foodModels({
            name,              
            description,       
            price,             
            category,          
            image: image_filename,
            imageUrl: imageUrl
        })
            
        // Save to Database
        const food = await newFood.save()
        res.status(200).json({success: true, message:"Food Added"})
    } 
    catch (err) {
        console.error("Add food error:", err)
        
        // Cleanup: Xóa ảnh trên Cloudinary nếu save DB bị lỗi
        if (req.file) {
            try {
                const publicId = req.file.path.split('/').slice(-2).join('/').split('.')[0];
                await cloudinary.uploader.destroy(publicId);
                console.log("Cleaned up image on Cloudinary")
            } catch (deleteErr) {
                console.error("Error deleting image:", deleteErr);
            }
        }
        
        res.status(500).json({
            success: false, 
            message: "Error"
        })
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
        // 1. Validate ID
        if (!req.body.id) {
            return res.status(400).json({
                success: false, 
                message: "Food ID is required"
            })
        }

        // 2. Find food
        const food = await foodModels.findById(req.body.id)
        if (!food) {
            return res.status(404).json({
                success: false, 
                message: "Food not found"
            })
        }
        // Extract public_id từ Cloudinary URL
        const publicId = food.imageUrl.split('/').slice(-2).join('/').split('.')[0];
        // Xóa ảnh trên Cloudinary
        await cloudinary.uploader.destroy(publicId);

        await foodModels.findByIdAndDelete(req.body.id)
        res.status(200).json({success: true, message: "Food Removed"})
    } catch (err) {
        console.log(err)
        res.status(500).json({success: false, message:"Error"})
    }
}

export {addFood, listFood, removeFood}