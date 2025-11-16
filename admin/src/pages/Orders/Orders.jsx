import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "../../assets/admin_assets/assets";
import './Orders.css'

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const statusHandler = async (event,orderId) => {
    const response = await axios.post(url + "/api/order/status",{
      orderId,
      status:event.target.value
    })
    if (response.data.success){
      await fetchAllOrders()
    }
  }
  return (
    <div className="order add w-[70%] ml-[max(5vw,25px)] mt-[50px]">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => {
          return (
            <div
              key={index}
              className="order-item grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-7.5 border border-red-400 p-5 m-[30px_0] text-[14px] text-[#505050]"
            >
              <img src={assets.parcel_icon} className="w-[50px] h-[50px] object-cover" />
              <div className="flex flex-col gap-1">
                <p>
                  {order.items.map((item, itemIndex) => {
                    if (itemIndex === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ", ";
                    }
                  })}
                </p>
                <p className="order-item-name">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <p className="order-item-address">
                  {order.address.street + ","}
                </p>
                <p className="order-item-address">
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country}
                </p>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
              <p>Items: {order.items.length}</p>
              <p>${order.amount}</p>
              <div className="relative w-[150px]">
                <select onChange={(event) => statusHandler(event,order._id)} value={order.status} className="w-full outline-none p-3 rounded-[8px] bg-gray-600 text-white appearance-none cursor-pointer pr-[30px]">
                  <option className="bg-white text-black" value="Food Processing">Food Processing</option>
                  <option className="bg-white text-black" value="Out for delivery">Out for delivery</option>
                  <option className="bg-white text-black" value="Delivered">Delivered</option>
                </select>
                {/* pointer-events-none: không chặn click vào select */}
                <div className="absolute right-[10px] top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
