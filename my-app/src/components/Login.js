import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "C:\\Users\\A.H Computer\\FYP-Virtual Delight\\FYP-Virtual-Delight\\my-app\\src\\App.css";
// import "E:\\FYP-Virtual-Delight\\my-app\\src\\App.css"
// import "D:\\FYP-Virtual-Delight\\my-app\\src\\App.css"

function Login() {
    const [username, setUsername] = useState(""); // State for username
    const [password, setPassword] = useState(""); // State for password

    const handleUsernameChange = (event) => {
        setUsername(event.target.value); // Update username state
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value); // Update password state
    };
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            console.log(data);
            if (data.success) {
                setSuccessMessage("Login Successfully");
                setErrorMessage('');
            } else {
                setErrorMessage('Login Failed');
                setSuccessMessage('');
            }
        } catch (errorMessage) {
            if (!errorMessage?.response) {
                setErrorMessage('No Server Response');
            } else if (errorMessage.response?.status === 400) {
                setErrorMessage('Missing Username or Password');
            } else if (errorMessage.response?.status === 401) {
                setErrorMessage('Unauthorized');
            } else {
                setErrorMessage('Login Failed');
            }        }
    };

    return (
        <div className="loginForm">
            <div className="loginContainer">
            <h3 className="text-success mt-3">{successMessage}</h3>
                <h1>Login Page</h1>
                <p className="alert-danger" aria-live="assertive">{errorMessage}</p>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" value={username} onChange={handleUsernameChange} required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" value={password} onChange={handlePasswordChange} required />
                </div>

                <a href="/forgot-password">Forgot password?</a>
                {/* <a href="/create-account">Create a new account</a> */}
                <Link to="/create-account">Create a new account</Link>

                <button className="loginBut" onClick={handleLogin}>
                    <p>Login</p>
                </button>

                <button className="siG">
                    <img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                        alt="Trees"
                        height="30"
                    />
                    <p>Sign in with Google</p>
                </button>
            </div>
        </div>
    );
}


export default Login;
