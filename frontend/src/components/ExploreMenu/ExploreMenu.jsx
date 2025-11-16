import React from "react"
import "./ExploreMenu.css"
import { menu_list } from "../../assets/frontend_assets/assets"

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="flex flex-col gap-5 mt-15" id="explore-menu">
            <h1 className="font-medium text-[max(2vw,24px)] text-[#262626]">Explore our Menu</h1>
            <p className="text-[#808080] max-w-[60%] explore-menu-text">Chose from a diverse menu featuring delectable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="flex justify-between items-center gap-[30px] text-center m-[20px_0px] overflow-x-scroll explore-menu-list">
                {menu_list.map((item,index) => {
                    return (
                        <div onClick={() => setCategory(pre => pre === item.menu_name?"All":item.menu_name)} key={index} className="min-w-[150px] items-center flex flex-col">
                            <img
                                src={item.menu_image}
                                alt={item.menu_name}
                                className={`w-[7.5vw] min-w-20 cursor-pointer rounded-[50%] duration-200 ${category === item.menu_name ? 'active' : ''}`}
                            />
                            <p className="mt-2.5 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">{item.menu_name}</p>
                        </div>
                    )
                })}
            </div> 
            <hr className="m-[10px_0px] h-0.5 border-t-3 border-[#e2e2e2] "/>
        </div>
    )
}

export default ExploreMenu