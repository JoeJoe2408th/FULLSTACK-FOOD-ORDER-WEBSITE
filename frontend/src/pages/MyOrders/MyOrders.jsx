import React from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { assets } from '../../assets/frontend_assets/assets'
import './MyOrders.css'

const MyOrders = () => {
   const [data,setData] = useState([])
   const {url,token} = useContext(StoreContext) 
   const fetchUserOrders = async () => {
    const response = await axios.post(url + "/api/order/user-orders", {}, {headers: {token}})
    if (response.data.success) {
        setData(response.data.data)
    }
   }
   useEffect(() => {
    if (token) {
        fetchUserOrders()
    }
   }, [token])  

    return (
    <div className='m-[50px_0px] my-orders'>
        <h2>My Orders</h2>
        <div className='flex flex-col gap-5 mt-7.5 container'>
            {data.map((order,index) => {
                return (
                    <div key={index} className='my-orders-order grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-7.5 text-[14px] p-[10px_20px] text-[#454545] border border-red-400'>
                        <img src={assets.parcel_icon} alt='' className='w-[50px] h-[50px] object-cover'/>
                        <p>{order.items.map((item,index) => {
                            if (index === order.items.length - 1) {
                                return item.name+" x "+ item.quantity
                            } else {
                                return item.name + " x "+item.quantity+ ", " 
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span className='text-red-400'>&#x25cf;</span> <b className='font-medium text-[#454545]'>{order.status}</b></p>
                        <button className='bg-black text-white p-[9px_4px] rounded-[8px] cursor-pointer'>Track Order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrders