import React from 'react'
import {assets} from "../../assets/admin_assets/assets"

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center p-[8px_4%]'>
        <img className='logo w-[max(10%,80px)]' src={assets.logo} alt=''/> 
    </div>
  )
}

export default Navbar