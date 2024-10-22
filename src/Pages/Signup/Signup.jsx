import React, { useState } from 'react';
import logo from '../../Assests/dairyLogo.png';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  return (
    <div className='flex flex-col w-full'>

      {/* Common Fields */}
      <div className='flex flex-col gap-2 mt-1'>
        {/* Name */}
        <input
          placeholder='Name'
          type="text"
          className='border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg'
        />
        {/* Company ID */}
        <input
          placeholder='CompanyID'
          type="text"
          className='border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg'
        />
        {/* Address */}
        <input
          placeholder='Address'
          type="text"
          className='border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg'
        />
        {/* SSN */}
        <input
          placeholder='SSN'
          type="text"
          className='border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg'
        />

        {/* Contact Number */}
        <input
          placeholder='Contact No.'
          type="text"
          className='border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg'
        />

        {/* Role Dropdown */}
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-[14px]'>Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className='border w-full focus:outline-none p-3 text-[12px] text-black rounded-lg'
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
          <div className='flex flex-col gap-4 '>
            {/* Field for NIC of supplier */}
            <input
              placeholder='NIC'
              type="text"
              className='border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg'
            />
            {/* Field for Area of supplier */}
            <input
              placeholder='Area'
              type="text"
              className='border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg'
            />
            {/* Field for Address of supplier */}
            <input
              placeholder='Address'
              type="text"
              className='border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg'
            />
          </div>
        )}



        {role === 'driver' && (
          <div className='flex flex-col gap-4'>
            {/* Field for NIC of driver */}
            <input
              placeholder='NIC'
              type="text"
              className='border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg'
            />
            {/* Field for Address of driver */}
            <input
              placeholder='Address'
              type="text"
              className='border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg'
            />
            {/* Field for Licenece upload of driver */}
            <div className='flex flex-col gap-1'>
              <label className='text-[14px] font-semibold'>License (Upload)</label>
              <input
                type="file"
                className='w-full focus:outline-none p-3 text-[12px] text-gray-300'
              />
            </div>
          </div>
        )}



        {role === 'admin' && (
          <div className='flex flex-col gap-4'>
            {/* Field for email of admin */}
            <input
              placeholder='Email'
              type="email"
              className='border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg'
            />
            {/* field for designation of admin */}
            <input
              placeholder='Designation'
              type="text"
              className='border w-full focus:outline-none p-3 text-[12px] text-gray-300 rounded-lg'
            />
          </div>
        )}

        {/* Field for password */}
        <input 
            placeholder='Password'
            type="password"
            className='border w-full  focus:outline-none p-3 text-normal text-[12px] text-gray-300 rounded-lg'
          >
        </input>
        {/* Field for confirm password */}
        <input 
            placeholder='Confirm password'
            type="password"
            className='border w-full  focus:outline-none p-3 text-normal text-[12px] text-gray-300 rounded-lg'
          >
        </input>

        <div className='flex flex-col items-center gap-4 mt-4'>
          <button
            className='bg-blue_green w-full text-white p-2  rounded-lg'
          >
            SignUp
          </button>
          <h3 className='font-light text-gray-400 text-[12px] '>Already have an account?
             <button 
              onClick={ ()=>navigate("/")}
              className='text-blue_green font-bold ml-1'
            > 
             Login to the Account
             </button> 
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Signup;
