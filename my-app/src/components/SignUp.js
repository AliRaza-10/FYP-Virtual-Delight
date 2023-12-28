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
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here, such as making an API call or processing the form data
    try {
      const response = await fetch('http://localhost:8000/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('User registered successfully:', data);
        // Handle successful registration, such as redirecting the user or displaying a success message
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        // Handle registration failure, such as displaying error messages to the user
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle other errors, such as network issues
    }
  
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="loginForm">
      <div className="loginContainer signupContainer">
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
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
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
