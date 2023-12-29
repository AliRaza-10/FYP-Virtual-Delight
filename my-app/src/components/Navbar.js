import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign UP</Link>
        </li>
      </ul>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/login">{props.textAbout}</Link>
        </li>
      </ul> 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
      </ul> 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul> 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/service">Service</Link>
        </li>
      </ul> 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/menu">Menu</Link>
        </li>
      </ul>
      
       {/* Template literal ye text k dark or light k according change kry ga */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'white'}`}> 
      <input className="form-check-input" onClick = {props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">Enable Mode</label>
      </div>
      <form className="d-flex" role="search">
        <button className="btn btn-primary " type="submit">Search</button>
      </form>
    </div>
  </div> 
  </div>
  </div>
</div>
</div>
</nav>
  )
  }
Navbar.prototype = {
    title: PropTypes.string.isRequired, 
    textAbout: PropTypes.string.isRequired           //object bnaya hai jis me on ki types ko define kia hai
}
// default props
Navbar.defaultProps = {
    textAbout: "Login"
}
//props properties hoti he jo component ko pass ki jati he or components apny apko render kr skty h