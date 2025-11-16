import React, { useState } from "react";
import { assets } from "../../assets/admin_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
    const [image, setImage] = useState(false)
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",data.price)
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/food/add`,formData)
        if (response.data.success){   // data o day la trong axios
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"    
            })
            setImage(false)
            toast.success(response.data.message)  // Hiển thị thông báo thành công
        } else {
            toast.error(response.data.message)  // Hiển thị lỗi
        }
    }
    
  return (
    <div className="add w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]">
      <form className="flex flex-col gap-2.5" onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <label htmlFor="image">
            {/* htmlFor: Khi người dùng click vào label, input sẽ tự động được kích hoạt  */}
            <img src={image?URL.createObjectURL(image):assets.upload_area} className="w-[120px]" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <div className="w-[max(40%,280px)] flex flex-col gap-4">
          <p>Product name</p>
          <input
            className="border w-full p-2.5"
            type="text"
            name="name"
            placeholder="Type here"
            onChange={onChangeHandler}
            value={data.name}
          />
        </div>

        <div className="w-[max(40%,280px)] flex flex-col gap-4 ">
          <p>Product description</p>
          <textarea
            className="border w-full p-2.5"
            name="description"
            rows="6"
            placeholder="Write content here"
            onChange={onChangeHandler}
            value={data.description}
          ></textarea>
        </div>

        <div className="flex gap-7.5">
          <div className="flex flex-col gap-4">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category" value={data.category} className="border p-2.5 max-w-[120px] text-center" >
              <option className="text-left" value="Salad">Salad</option>
              <option className="text-left" value="Rolls">Rolls</option>
              <option className="text-left" value="Deserts">Deserts</option>
              <option className="text-left" value="Sandwich">Sandwich</option>
              <option className="text-left" value="Cake">Cake</option>
              <option className="text-left" value="Pure Veg">Pure Veg</option>
              <option className="text-left" value="Pasta">Pasta</option>
              <option className="text-left" value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} className="border p-2.5 max-w-[120px]" name="price" placeholder="$20" />
          </div>
        </div>
        <button className="border p-2.5 max-w-[120px] mt-4 rounded-[3px] bg-black text-white cursor-pointer" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
