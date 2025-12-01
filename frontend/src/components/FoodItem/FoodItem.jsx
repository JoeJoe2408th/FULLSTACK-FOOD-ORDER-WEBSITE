import { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, imageUrl }) => {
  // const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="w-full m-auto rounded-[15px] shadow-[0px_0px_10px_#00000015] duration-300 animate-fadeIn-1s">
      <div className="relative">
        <img
          className="w-full rounded-[15px_15px_0px_0px] "
          src={imageUrl}
          alt={name}
        />
        {!cartItems[id] ? (
          <img
            className="w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] bg-white flex justify-center items-center gap-2.5 rounded-[50px] p-1.5">
            <img
              className="w-[30px]"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-[30px]"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-[20px] font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[12px] text-[#676767]">{description}</p>
        <p className="text-red-500 text-[22px] m-[10px_0px]">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
