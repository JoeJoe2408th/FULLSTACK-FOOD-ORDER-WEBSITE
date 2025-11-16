import express from 'express'
import authMiddleware from '../middleware/auth.js'
import {placeOrder, getUserOrders, listOrders, updateStatus} from '../controllers/orderController.js'
import { OrderedBulkOperation } from 'mongodb'

const orderRouter = express.Router()

orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/user-orders",authMiddleware,getUserOrders)
orderRouter.get('/list',listOrders)
orderRouter.post('/status', updateStatus)

export default orderRouter 