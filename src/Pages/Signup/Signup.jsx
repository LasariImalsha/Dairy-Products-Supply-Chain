import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";


function Signup() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  //handling the sign up
  const handleRegister = (values)=>{
    console.log(values);
  }
  // const validate = Yup.object({
  //   user_name:Yup.string()
  //   .required("*Required"),
  //   first_name:Yup.string()
  //   .required("*Required"),
  //   contactno:Yup.string()
  //   .required("*required"),
  //   hashed_password:Yup.string()
  //   .required("*Password is Required"),
  //   address:Yup.string()
  //   .required("*Required"),
  //   ssn:Yup.string()
  //   .required("*Required"),
  //   hashed_password:Yup.string()
  //   .required("*Required"),
  //   confirm_password:Yup.string()
  //   .required("*Required"),
  //   NIC:Yup.string()
  //   .required("*Required"),
  //   area:Yup.string()
  //   .required("*Required"),
  //   email:Yup.string()
  //   .required("*Required"),
  //   designation:Yup.string()
  //   .required("*Required"),
  // })

   // Function to get validation schema based on role
   const getValidationSchema = (role) => {
    const baseSchema = {
      user_name: Yup.string()
      .required("*Required"),
      first_name: Yup.string()
      .required("*Required"),
      contactno: Yup.string()
      .required("*Required"),
      hashed_password: Yup.string()
      .required("*Password is Required"),
      address: Yup.string()
      .required("*Required"),
      ssn: Yup.string()
      .required("*Required"),
      confirm_password: Yup.string()
      .required("*Required"),
      role: Yup.string()
      .required("*Role is required"),
    };

    // Add role-specific validations
    if (role === 'supplier') {
      baseSchema.NIC = Yup.string()
      .required("*Required");
      baseSchema.area = Yup.string()
      .required("*Required");
    } else if (role === 'driver') {
      baseSchema.NIC = Yup.string()
      .required("*Required");
      baseSchema.license = Yup.mixed()
      .required("*License is required");
    } else if (role === 'admin') {
      baseSchema.email = Yup.string()
      .email("Invalid email")
      .required("*Required");
      baseSchema.designation = Yup.string()
      .required("*Required");
    }

    return Yup.object(baseSchema);
  };

  return (
    <Formik
      initialValues={{
        first_name:'',
        user_name:"",
        address:"",
        ssn:'',
        contactno:'',
        NIC:'',
        hashed_password:"",
        confirm_password:'',
        area:'',
        email:'',
        designation:'',
        role:''
      }}
      validationSchema={getValidationSchema(role)}
      onSubmit={handleRegister}
    >
     {(formik)=>(
      <Form className='flex flex-col gap-1 w-full h-full mob2:px-12 md:px-0'>
        {/* Field for name */}
        <div className='flex flex-col h-14'>
          <Field
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.first_name}
            className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
          />
          <ErrorMessage 
            name="first_name" 
            component="div" 
            className="text-red-500 text-[9px] font-medium italic " 
          />      
        </div>

        {/* Field for companyId */}
        <div className='flex flex-col h-14'>
          <Field
            type="text"
            id="user_name"
            name="user_name"
            placeholder="CompanyID"
            onChange={formik.handleChange}
            value={formik.values.user_name}
            className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
          />
          <ErrorMessage 
            name="user_name" 
            component="div" 
            className="text-red-500 text-[9px] font-medium italic" 
          />      
        </div>

        {/* Field for address */}
        <div className='flex flex-col h-14'>
          <Field
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            onChange={formik.handleChange}
            value={formik.values.address}
            className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
          />
          <ErrorMessage 
            name="address" 
            component="div" 
            className="text-red-500 text-[9px] font-medium italic" 
          />      
        </div>

         {/* Field for SSN */}
         <div className='flex flex-col h-14'>
          <Field
            type="number"
            id="ssn"
            name="ssn"
            placeholder="SSN"
            onChange={formik.handleChange}
            value={formik.values.ssn}
            className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
          />
          <ErrorMessage 
            name="ssn" 
            component="div" 
            className="text-red-500 text-[9px] font-medium italic" 
          />      
        </div>

        {/* Field for Contact Number */}
        <div className='flex flex-col h-14'>
          <Field
            type="text"
            id="contactno"
            name="contactno"
            placeholder="Contact No."
            onChange={formik.handleChange}
            value={formik.values.contactno}
            className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
          />
          <ErrorMessage 
            name="contactno" 
            component="div" 
            className="text-red-500 text-[9px] font-medium italic" 
          />      
        </div>

         {/* Role Dropdown */}
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-[13px]'>Role</label>
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              formik.setFieldValue("role", e.target.value); 
            }}
            className='border w-full focus:outline-none p-3  text-[12px] text-black rounded-lg'
          >
          <option value="">Select Role</option>

          {/* Supplier and Driver Section */}
          <option value="supplier">Supplier</option>
          <option value="driver">Driver</option>

            {/* Divider */}
          <option disabled className='w-full'>───────────────────────────────────────────────</option> 

            {/* Admin Roles Section */}
            <optgroup label="Admin Roles">
                <option value="Supply_manage">Admin</option>
                <option value="Stock_manager">Stock Manager</option>
                <option value="Financial Manager">Supply Manager</option>
            </optgroup>
        </select>
        </div>

        {/* Fields based on Role Selection */}
        {role === 'supplier' && (
          <>
          <div className='flex flex-col h-14'>
            {/* Field for NIC of supplier */}
           <Field
              type="text"
              id="NIC"
              name="NIC"
              placeholder="NIC"
              onChange={formik.handleChange}
              value={formik.values.NIC}
              className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
          />
          <ErrorMessage 
              name="NIC" 
              component="div" 
              className="text-red-500 text-[9px] font-medium italic" 
          />  
          </div>
          {/* Field for Area of supplier */}
          <div className='flex flex-col h-14'>
            <Field
                type="text"
                id="area"
                name="area"
                placeholder="Area"
                onChange={formik.handleChange}
                value={formik.values.area}
                className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
            />
            <ErrorMessage 
                name="area" 
                component="div" 
                className="text-red-500 text-[9px] font-medium italic" 
            /> 
        </div>
        </>
        )}


        
        {role === 'driver' && (
          <>
          <div className='flex flex-col h-14'>
            {/* Field for NIC of driver */}
           <Field
              type="text"
              id="NIC"
              name="NIC"
              placeholder="NIC"
              onChange={formik.handleChange}
              value={formik.values.NIC}
              className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
           />
            <ErrorMessage 
              name="NIC" 
              component="div" 
              className="text-red-500 text-[9px] font-medium italic" 
            />  
          </div>
          {/* Field for Licenece upload of driver */}
          <div className='flex flex-col h-14'>
            <label className='text-[14px] font-semibold'>License (Upload)</label>
                <input
                  type="file"
                  className='w-full focus:outline-none p-3 text-[12px] text-gray-300'
                />
          </div>
          </>
        )}



      {role === 'admin' && (
        <>
        <div className='flex flex-col h-14'>
          {/* Field for NIC of driver */}
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
           />
            <ErrorMessage 
              name="email" 
              component="div" 
              className="text-red-500 text-[9px] font-medium italic" 
            /> 
        </div>
        <div className='flex flex-col h-14'>
          {/* Field for NIC of driver */}
            <Field
              type="text"
              id="designation"
              name="designation"
              placeholder="Designation"
              onChange={formik.handleChange}
              value={formik.values.designation}
              className="border w-full focus:outline-none p-3 text-[12px] rounded-lg"
           />
            <ErrorMessage 
              name="designation" 
              component="div" 
              className="text-red-500 text-[9px] font-medium italic" 
            /> 
        </div>
        </>
        )}

        {/* Field for password */}
        <div className='flex flex-col h-14'>
          <Field
            type="password"
            id="hashed_password"
            name="hashed_password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.hashed_password}
            className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
          />
          <ErrorMessage 
            name="hashed_password" 
            component="div" 
            className="text-red-500 text-[9px] font-medium italic" 
          />      
        </div>


          {/* Field for Confirm password */}
        <div className='flex flex-col h-14'>
          <Field
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            value={formik.values.confirm_password}
            className="border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg"
          />
          <ErrorMessage 
            name="confirm_password" 
            component="div" 
            className="text-red-500 text-[9px] font-medium italic" 
          />      
        </div>

      <div className='flex flex-col items-center gap-2  mb-1'>
          <button
            type="submit"
            className='bg-blue_green w-full text-white p-2  rounded-lg'
          >
            SignUp
          </button>
          <h3 className='font-light text-gray-400 text-[12px] '>Already have an account?
            <button 
              onClick={()=>navigate("/")}
              className='text-blue_green font-bold ml-1'
            > 
              Login to the Account
            </button> 
          </h3>
      </div>
      </Form>
     )}
    </Formik>  
  );
}

export default Signup;
