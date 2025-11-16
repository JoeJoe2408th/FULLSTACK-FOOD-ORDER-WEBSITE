import orderModel from "../models/orderModels.js";
import userModel from "../models/userModels.js";

// placing user order for frontend
const placeOrder = async (req,res) => {
    
    try {
        // 1. Tạo order mới
        const newOrder = new orderModel ({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })

        await newOrder.save()

        // 2. Xóa giỏ hàng
        await userModel.findByIdAndUpdate(req.body.userId, {cartData: {}})

        // 3. Trả về thành công
        res.json({
            success: true,
            message: "Đặt hàng thành công",
            orderId: newOrder._id
        });
    } catch (err) {
        console.log(err)
        res.json({success: false, message: "Lỗi khi đặt hàng"});
    }

}

// user orders for frontend
const getUserOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({userId: req.body.userId})
        res.json({success: true, data: orders})
    } catch (err) {
        console.log(err)
        res.json({success: false, message: "Lỗi khi lấy đơn hàng"})
    }
}

// Listing orders for admin panel
const listOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true, data: orders})
    } catch (err) {
        console.log(err)
        res.json({success: false, message: "Error"})
    }
}

// api for updating order status
const updateStatus = async (req,res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, {status:req.body.status})
        res.json({success: true, message:"Status Updated"})
    } catch (err) {
        console.log(err)
        res.json({success:false, message:"Error"})
    }
}

export {placeOrder, getUserOrders, listOrders, updateStatus}