// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Login from './components/Login.js';
import Navbar from './components/Navbar';
import Signup from './components/SignUp.js';
import About from './components/About.js';
import Home from './components/Home.js';
import Service from './components/Service.js';
import Menu from  './components/Menu.js';
import Booking from './components/Booking.js';
import Contact from './components/Contact.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const[mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({           
      msg : message,  
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
   const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
  <BrowserRouter>
  
  <Navbar title = "SignUP" mode = {mode} toggleMode = {toggleMode}/>
  <Alert alert = {alert}/>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup  />} />
          <Route path="/about" element={<About  />} />
          <Route path="/home" element={<Home  />} />
          <Route path="/service" element={<Service  />} />
          <Route path="/menu" element={<Menu  />} />
          <Route path="/booking" element={<Booking  />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/create-account" element={<Signup  />} />
        </Routes>
  </BrowserRouter>
    </>
  
  );
}

export default App;
