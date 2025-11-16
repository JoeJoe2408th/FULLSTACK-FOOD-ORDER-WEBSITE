import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 p-[20px_8vw] pt-20 mt-20' id='footer'>
        <div className='w-full grid grid-cols-[2fr_1fr_1fr] gap-20 footer-content'>
            {/* Footer Content Left */}
            <div className='flex flex-col items-start gap-5'>
                <img src={assets.logo} alt="Logo" className="" />
                <p>You've reached the end of the page, but the flavor still lingers, because every dish we serve isn't just a meal, it's a heartfelt experience</p>
                <div className='flex gap-5'>
                    <img className='w-10' src={assets.facebook_icon} />
                    <img className='w-10' src={assets.twitter_icon} />
                    <img className='w-10' src={assets.linkedin_icon} />
                </div>
            </div>
            {/* Footer Content Center */}
            <div className='flex flex-col items-start gap-5'>
                <h2 className='text-2xl font-bold text-white'>COMPANY</h2>
                <ul className=''>
                    <li className='mb-2.5 text-[16px]'>Home</li>
                    <li className='mb-2.5 text-[16px]'>About us</li>
                    <li className='mb-2.5 text-[16px]'>Delivery</li>
                    <li className='mb-2.5 text-[16px]'>Privacy policy</li>
                </ul>
            </div>
            {/* Footer Content Right */}
            <div className='flex flex-col items-start gap-5'>
                <h2 className='text-white text-2xl font-bold'>GET IN TOUCH</h2>
                <ul>
                    <p className='text-[16px] mb-2.5'>Vu Duy</p>
                    <li className='text-[16px] mb-2.5'>+84 36 834 9475</li>
                    <li className='text-[16px] mb-2.5'>vuleducduy@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-0.5 m-[20px_0] bg-gray-600' />
        <p className='footer-copyright'>Copyright © Tomato - 2024</p>
    </div>
  )
}

export default Footer