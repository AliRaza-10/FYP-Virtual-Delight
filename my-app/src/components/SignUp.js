// Signup.js
import React, { useState } from "react";
import "C:\\Users\\A.H Computer\\FYP-Virtual Delight\\FYP-Virtual-Delight\\my-app\\src\\App.css";
// import "E:\\FYP-Virtual-Delight\\my-app\\src\\App.css"
// import "D:\\FYP-Virtual-Delight\\my-app\\src\\App.css";


function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here, such as making an API call or processing the form data
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        setErrorMessage('');
        console.log('User registered successfully:', data);
      } else {
        const errorData = await response.json();
        if (errorData.username && errorData.username.length > 0) {
          setErrorMessage(errorData.username[0]); // Username already exists
        } else if (errorData.email && errorData.email.length > 0) {
          setErrorMessage("Email must be unique"); // Email must be unique
        } else if (errorData.phoneNo && errorData.phoneNo.length > 0) {
          setErrorMessage("Phone No is required"); // Phone number is required
        } else {
          setErrorMessage('Registration failed. Please check your inputs.'); // Generic error message
        }
  
        setSuccessMessage('');
        console.error('Registration failed:', errorData);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage('An error occurred during registration');
      setSuccessMessage('');
    }
  
    setFormData({
      username: "",
      email: "",
      password: "",
      phoneNo: "",
    });
  };

  return (
    <div className="loginForm">
      <div className="loginContainer signupContainer">
      {successMessage && (
        <div>
          <h3 className="text-success">{successMessage}</h3>
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          <p>{errorMessage}</p>
        </div>
      )}
        <h1>Create an Account</h1>

        <div className="input-container">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-container">
          <label>Phone No</label>
          <input
            type="number"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
        </div>

        <button className="loginBut signupBut" onClick={handleSubmit}>
          <p>Sign Up</p>
        </button>

        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
