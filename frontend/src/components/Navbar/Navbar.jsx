import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from "../../context/StoreContext";

export const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount, token, setToken} = useContext(StoreContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  return (
    <div className="p-[20px_0px] flex justify-between items-center navbar">
      <Link to='/'><img src={assets.logo} alt="Logo" className="w-[150px] logo" /></Link>
      <ul className="flex gap-5 text-[#49557e] text-[18px] navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>

      <div className="flex gap-10 items-center navbar-right">
        <img src={assets.search_icon} className="cursor-pointer" />
        <div className="navbar-search-icon cursor-pointer">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() ===0 ? "":"dot"}></div>
        </div>
        {!token ?<button onClick={() => setShowLogin(true)} className="bg-transparent text-[16px] text-[#49557e] cursor-pointer border rounded-[50px] p-[10px_30px] hover:bg-[#fff4f2] delay-50 duration-300">
          sign in
        </button>
        :<div className="navbar-profile relative">
            <img src={assets.profile_icon} />
            <ul className="navbar-profile-dropdown absolute hidden right-0 z-1  ">
              <li onClick={() => navigate('/my-orders')} className="flex items-center gap-2.5 cursor-pointer mr-7 duration-200 hover:text-red-400"><img src={assets.bag_icon} className="w-5" />Orders</li>
              <hr className="text-gray-400"/> 
              <li onClick={logout} className="flex items-center gap-2.5 cursor-pointer mr-7 duration-200 hover:text-red-400"><img src={assets.logout_icon} className="w-5" />Logout</li>
            </ul>
        </div>
        }
        
      </div>
    </div>
  );
};
