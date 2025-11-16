import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn-2s header-contents"> 
            <h2>Order your favorite food here</h2>
            <p className='text-white text-[1vw]'>Chose from a diverse menu featuring delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button className='cursor-pointer text-[#747474] p-[1vw_2.3vw] rounded-4xl text-[max(1vw,13px)] bg-white'>View Menu</button>
        </div>
    </div>
  )
}

export default Header
