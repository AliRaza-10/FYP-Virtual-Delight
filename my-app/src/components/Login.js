// login.js
import React from "react";
import "C:\\Users\\A.H Computer\\FYP-Virtual Delight\\FYP-Virtual-Delight\\my-app\\src\\App.css";
function Login() {
    return (
        <div className="loginForm">
        <div className="loginContainer">
            <h1>Welcome Back!</h1>

            <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
                {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {/* {renderErrorMessage("pass")} */}
            </div>

            <a href="/forgot-password">Forgot password?</a>
            <a href="/create-account">Create a new account</a>


            <button className="loginBut">
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
