import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Replace this with your API endpoint for interacting with Hyperledger
const API_URL = "https://your-middleware-api.com/register";

function Signup() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  // Validation schema based on role
  const getValidationSchema = (role) => {
    const baseSchema = {
      user_name: Yup.string().required("*Required"),
      first_name: Yup.string().required("*Required"),
      contactno: Yup.string().required("*Required"),
      hashed_password: Yup.string().required("*Password is Required"),
      address: Yup.string().required("*Required"),
      ssn: Yup.string().required("*Required"),
      confirm_password: Yup.string().oneOf([Yup.ref('hashed_password'), null], "Passwords must match").required("*Required"),
      role: Yup.string().required("*Role is required"),
    };
    if (role === 'supplier') {
      baseSchema.NIC = Yup.string().required("*Required");
      baseSchema.area = Yup.string().required("*Required");
    } else if (role === 'driver') {
      baseSchema.NIC = Yup.string().required("*Required");
      baseSchema.license = Yup.mixed().required("*License is required");
    } else if (role === 'admin') {
      baseSchema.email = Yup.string().email("Invalid email").required("*Required");
      baseSchema.designation = Yup.string().required("*Required");
    }
    return Yup.object(baseSchema);
  };

  // Register function sending data to the middleware API
  const handleRegister = async (values) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        alert("User registered successfully!");
        navigate("/"); // Redirect to login page
      } else {
        const error = await response.json();
        alert(`Registration failed: ${error.message}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed, please try again later.");
    }
  };

  return (
    <Formik
      initialValues={{
        first_name: '', user_name: "", address: "", ssn: '',
        contactno: '', NIC: '', hashed_password: "", confirm_password: '',
        area: '', email: '', designation: '', role: ''
      }}
      validationSchema={getValidationSchema(role)}
      onSubmit={handleRegister}
    >
      {formik => (
        <Form className='flex flex-col gap-1 w-full h-full'>
          <Field type="text" id="first_name" name="first_name" placeholder="Name"
            onChange={formik.handleChange} value={formik.values.first_name} className="border w-full p-3 text-gray-300 rounded-lg" />
          <ErrorMessage name="first_name" component="div" className="text-red-500 text-[9px] font-medium italic " />

          <Field type="text" id="user_name" name="user_name" placeholder="CompanyID"
            onChange={formik.handleChange} value={formik.values.user_name} className="border w-full p-3 text-gray-300 rounded-lg" />
          <ErrorMessage name="user_name" component="div" className="text-red-500 text-[9px] font-medium italic" />

          <Field type="text" id="address" name="address" placeholder="Address"
            onChange={formik.handleChange} value={formik.values.address} className="border w-full p-3 text-gray-300 rounded-lg" />
          <ErrorMessage name="address" component="div" className="text-red-500 text-[9px] font-medium italic" />

          <Field type="number" id="ssn" name="ssn" placeholder="SSN"
            onChange={formik.handleChange} value={formik.values.ssn} className="border w-full p-3 text-gray-300 rounded-lg" />
          <ErrorMessage name="ssn" component="div" className="text-red-500 text-[9px] font-medium italic" />

          <Field type="text" id="contactno" name="contactno" placeholder="Contact No."
            onChange={formik.handleChange} value={formik.values.contactno} className="border w-full p-3 text-gray-300 rounded-lg" />
          <ErrorMessage name="contactno" component="div" className="text-red-500 text-[9px] font-medium italic" />

          <select value={role} onChange={(e) => { setRole(e.target.value); formik.setFieldValue("role", e.target.value); }}
            className='border w-full p-3 text-black rounded-lg'>
            <option value="">Select Role</option>
            <option value="supplier">Supplier</option>
            <option value="driver">Driver</option>
            <optgroup label="Admin Roles">
              <option value="admin">Admin</option>
              <option value="stock_manager">Stock Manager</option>
              <option value="supply_manager">Supply Manager</option>
            </optgroup>
          </select>
          <ErrorMessage name="role" component="div" className="text-red-500 text-[9px] font-medium italic" />

          {role === 'supplier' && (
            <>
              <Field type="text" id="NIC" name="NIC" placeholder="NIC"
                onChange={formik.handleChange} value={formik.values.NIC} className="border w-full p-3 text-gray-300 rounded-lg" />
              <ErrorMessage name="NIC" component="div" className="text-red-500 text-[9px] font-medium italic" />

              <Field type="text" id="area" name="area" placeholder="Area"
                onChange={formik.handleChange} value={formik.values.area} className="border w-full p-3 text-gray-300 rounded-lg" />
              <ErrorMessage name="area" component="div" className="text-red-500 text-[9px] font-medium italic" />
            </>
          )}

          {role === 'driver' && (
            <>
              <Field type="text" id="NIC" name="NIC" placeholder="NIC"
                onChange={formik.handleChange} value={formik.values.NIC} className="border w-full p-3 text-gray-300 rounded-lg" />
              <ErrorMessage name="NIC" component="div" className="text-red-500 text-[9px] font-medium italic" />
              <label>License (Upload)</label>
              <input type="file" className='w-full p-3 text-gray-300' />
            </>
          )}

          {role === 'admin' && (
            <>
              <Field type="email" id="email" name="email" placeholder="Email"
                onChange={formik.handleChange} value={formik.values.email} className="border w-full p-3 text-gray-300 rounded-lg" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-[9px] font-medium italic" />
              <Field type="text" id="designation" name="designation" placeholder="Designation"
                onChange={formik.handleChange} value={formik.values.designation} className="border w-full p-3 rounded-lg" />
              <ErrorMessage name="designation" component="div" className="text-red-500 text-[9px] font-medium italic" />
            </>
          )}

          <Field type="password" id="hashed_password" name="hashed_password" placeholder="Password"
            onChange={formik.handleChange} value={formik.values.hashed_password} className="border w-full p-3 text-gray-300 rounded-lg" />
          <ErrorMessage name="hashed_password" component="div" className="text-red-500 text-[9px] font-medium italic" />

          <Field type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password"
            onChange={formik.handleChange} value={formik.values.confirm_password} className="border w-full p-3 text-gray-300 rounded-lg" />
          <ErrorMessage name="confirm_password" component="div" className="text-red-500 text-[9px] font-medium italic" />

          <button type="submit" className='bg-blue_green w-full text-white p-2 rounded-lg'>SignUp</button>
          <p>Already have an account? <button onClick={() => navigate("/")} className='text-blue_green font-bold'>Login</button></p>
        </Form>
      )}
    </Formik>
  );
}

export default Signup;
