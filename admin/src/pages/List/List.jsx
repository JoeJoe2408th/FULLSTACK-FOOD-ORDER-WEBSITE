import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import './List.css'

const List = ({url}) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
      console.log(response.data)
    } else {
      toast.error("Error");
    }
  };

  useEffect (() => {  
    fetchList()
  }, [])

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList()
    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error("Error")
    }
  }

  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]">
      <p className="mb-5 text-2xl font-semibold">All Foods List</p>
      <div>
        <div className="list-table-format title bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item,index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" className="w-[70px]"/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className="cursor-pointer" onClick={() => removeFood(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
    
};

export default List;
