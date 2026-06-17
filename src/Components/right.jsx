import { ShapesIcon, ShoppingCart } from 'lucide-react'
import React from 'react'
import facebook from '../assets/facebook-svgrepo-com.svg'
import google from '../assets/google-svgrepo-com.svg'

function Right() {
 
    return (
        <div className=' w-[40%] h-[80%]  flex flex-col items-center justify-evenly  '>
            <div className='  flex items-center gap-2 '>
                <div className=' w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center'>
                    <ShoppingCart size={25} color='white' />
                </div>
                <p className=' font-bold font-[arial]'>E Spurt</p>
            </div>
            <div className='  h-110 '>
                <form action="" className='   flex flex-col gap-3 items-center '>
                    <div className=' flex flex-col  items-center '>
                        <p className=' font-bold text-4xl'>Welcome Back</p>
                        <p className=' text-gray-400 text-[15px]'>Please login to your account</p>
                    </div>
                    <div className=' flex flex-col  gap-3 pt-2 '>
                        <input required className='  rounded-lg w-99 h-12 bg-gray-200 p-2 ' placeholder='Email address ' type="email" name="" id="" />
                        <input required minLength={4} className=' rounded-lg w-99 h-12 bg-gray-200 p-2 ' placeholder='Password ' type="password" name="" id="" />
                        <p className='  flex justify-end text-[12px]'>Forgot Password?</p>
                    </div>
                    <div className=' '>
                        <button  type='submit' className=' bg-orange-400 w-99 h-12 text-white rounded-lg'>Login</button>
                    </div>
                    <div className='  text-center '>
                        --------Or Login with--------
                    </div>
                    <div className='  flex justify-center gap-3 '>
                        <div className=' w-48 border h-12 flex items-center gap-3 justify-center font-bold rounded-lg'>
                            <img src={google} className=' w-5' alt="" />
                            <p>Google</p>
                        </div>
                        <div className=' w-48 border h-12 flex items-center gap-3 justify-center font-bold rounded-lg'>
                            <img src={facebook} className=' w-5' alt="" />
                            <p>Facebook</p>
                        </div>                    </div>
                    <div className='  text-center '>
                        Don't have an account? <span><u className=' text-orange-500'>Signup</u></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Right
