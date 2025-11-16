import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {
    const {url, setToken} = useContext(StoreContext)
    const [currState, setCurrState] = useState("Login")
    const [data, setData] = useState ({
        name : "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({...data,[name]:value}))
    }

    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url
        if (currState === "Login") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data)
        // Backend tạo token → Trả về trong response → Frontend nhận → Lưu vào state
        if (response.data.success) {
            setToken(response.data.token) 
            localStorage.setItem("token",response.data.token)
            setShowLogin(false) // Đóng popup login
        } else {
            alert(response.data.message)
        }
    }

  return (
    <div className='login-popup absolute z-1 w-full h-full bg-[#00000090] grid'>
        <form onSubmit={onLogin} className='login-popup-container relative place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-lg text-[14px] animate-fadeIn-0.5s'>
            <div className='login-popup-title flex justify-between items-center text-black'>
                <h2 className='text-2xl font-medium'>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} className='w-4 cursor-pointer'/>
            </div>
            <div className='login-popup-inputs flex flex-col gap-5'>
                {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' className='border border-[#c9c9c9] p-2.5' required/>}
                <input name='email' onChange={onChangeHandler} value={data.email} className='border border-[#c9c9c9] p-2.5' type="email" placeholder='Your email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} className='border border-[#c9c9c9] p-2.5' type="password" placeholder='Password' required/>
            </div>
            <button type='submit' className='login-popup-submit-btn p-2.5 rounded-sm text-white bg-red-500 text-[15px] cursor-pointer '>{currState === "Sign up" ? "Create Account" : "Login"}</button>
            <div className='login-popup-condition flex items-start gap-2 -mt-[15px]'>
                <input className='mt-[5px]' type='checkbox' required />
                <p>By continuing, I agree to Terms of use and Privacy Policy.</p>    
            </div>  
            {currState === "Login" ?
            <p>Create a new account? <span onClick={() => setCurrState("Sign up")} className='cursor-pointer font-medium text-red-500'>Click here</span></p>
            : <p>Already have an account? <span onClick={() => setCurrState("Login")} className='cursor-pointer font-medium text-red-500'>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup