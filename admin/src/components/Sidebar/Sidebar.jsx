import React from 'react'
import { assets } from '../../assets/admin_assets/assets'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-[1.5px] border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]'>
        <div className='pt-[50px] pl-[20%] flex flex-col gap-5'>
            <NavLink to='/add' className='sidebar-option flex items-center gap-3 border border-[#a9a9a9] border-r-0 p-[8px_10px] rounded-[3px_0_0_3px] cursor-pointer'>
                <img className='' src={assets.add_icon} />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className='sidebar-option flex items-center gap-3 border border-[#a9a9a9] border-r-0 p-[8px_10px] rounded-[3px_0_0_3px] cursor-pointer'>
                <img className='' src={assets.order_icon} />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className='sidebar-option flex items-center gap-3 border border-[#a9a9a9] border-r-0 p-[8px_10px] rounded-[3px_0_0_3px] cursor-pointer'>
                <img className='' src={assets.order_icon} />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar