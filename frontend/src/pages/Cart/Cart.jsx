import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);

  const navigate = useNavigate()
  return (
    <div className="cart mt-[100px]">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img className="w-[50px]" src={url + "/images/" + item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cursor-pointer">X</p>
                </div>
                <hr className="h-px bg-[#e2e2e2] border-none" />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom mt-20 flex justify-between gap-[max(12vw,20px)]">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold">Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2 }</p>
            </div>
            <hr />
            <div className="cart-total-details text-xl font-bold">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2  }</p>
            </div>
          </div>
          <button className="cursor-pointer text-white bg-red-400 w-[max(15vw,200px)] p-[12px_0] rounded-sm border-none" onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-code flex-1">
          <div>
            <p className="text-[#555]">If you have a promo code, Enter it here</p>
            <div className="cart-code-input mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded-sm">
              <input type="text" placeholder="promo code" className="bg-transparent flex-1 pl-2.5 outline-none"/>
              <button className="border bg-black text-white p-[12px_5px] rounded-sm w-[max(10vw,150px)]">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
