import React from 'react';
import logo from '../../Assests/dairyLogo.png'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col w-full '>

      {/* samll description */}
      <div className='mt-8 mr-2'>
        <h1 className='font-semibold text-[18px]'>Welcome Back</h1>
        <p className='text-xs mt-2 text-gray-300 tracking-wider'>All are welcomed to our dairy managemnt platform, which manages all the functionalities in Supply chain of dairy products.</p>
      </div>

      <div className='mt-12 font-semibold text-[14px] w-full flex flex-col gap-3'>
        {/* The field for company id */}
        <div className='flex flex-col gap-1'>
          <label>CompanyID</label>
          <input 
            type="text"
            className='border w-full  focus:outline-none p-3 text-normal text-[12px] text-gray-300 rounded-lg'
          >
          </input>
        </div>
  
        {/* The field for password */}
        <div className='flex flex-col gap-1'>
          <label>Password</label>
          <input 
            type="password"
            className='border w-full  focus:outline-none p-3 text-normal text-[12px] text-gray-300 rounded-lg'
          >
          </input>
        </div>

        <div className='mt-8 flex flex-col items-center gap-4'>
          <button
            className='bg-blue_green w-full text-white p-2  rounded-lg'
          >
            LogIn
          </button>
          <h3 className='font-light text-gray-400 text-[12px] '>Not Registered yet?
             <button 
              onClick={ ()=>navigate("/homesignup")}
              className='text-blue_green font-bold ml-1'
            > 
              Create an Account
             </button> 
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Login