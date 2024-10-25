import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";


function Login() {
  const navigate = useNavigate();

  const handleLoginSubmit =async(values)=>{
   try{
    const response = await fetch('/api/login',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        user_name : values.user_name,
        hashed_password : values.hashed_password,
      }),
    });

    if(!response.ok){
      throw new Error(`HTTP error! Status : ${response.status}`)
    }

    const data = await response.json();
    alert(data.message);
    navigate('/dashboard');
   }catch(error){
      console.error('Login error:' , error)
   }
  }

  const validate = Yup.object({
    user_name:Yup.string()
    .required("*Required"),
    hashed_password:Yup.string()
    .required("*Password is Required")
  })

  return (
    <div className='flex flex-col w-full '>

      {/* samll description */}
      <div className='mt-8 mr-2'>
        <h1 className='font-bold text-[18px]'>Welcome Back</h1>
        <p className='text-xs mt-2 text-gray-300 tracking-wider'>All are welcomed to our dairy managemnt platform, which manages all the functionalities in Supply chain of dairy products.</p>
      </div>

      <Formik
        initialValues={{
           user_name:"",
           hashed_password:""
        }}
        validationSchema={validate}
        onSubmit={handleLoginSubmit}
      >
        {(formik) => (
          <Form className='mt-12 font-semibold text-[14px] w-full flex flex-col gap-3'>
            {/* The field for company id */}
            <div className='flex flex-col h-20'>
              <label>CompanyID</label>
              <Field 
                type="text"
                id="user_name"
                name="user_name"
                onChange={formik.handleChange}
                value={formik.values.user_name}
                className='border w-full mt-1  focus:outline-none p-3 text-normal text-[12px] text-gray-300 rounded-lg'
              />
              <ErrorMessage 
                name="user_name" 
                component="div" 
                className="text-red-500 text-[9px] font-medium italic mt-1" 
              />
            </div>

            {/* The field for password */}
            <div className='flex flex-col h-20 '>
              <label>Password</label>
              <Field 
                type="text"
                id="hashed_password"
                name="hashed_password"
                onChange={formik.handleChange}
                value={formik.values.hashed_password}
                className='border w-full mt-1 focus:outline-none p-3 text-normal text-[12px] text-gray-300 rounded-lg'
              />
              <ErrorMessage 
                name="hashed_password" 
                component="div" 
                className="text-red-500 text-[9px] font-medium italic mt-1" 
              />
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
          </Form>
        )}

      </Formik>

    </div>
  )
}

export default Login