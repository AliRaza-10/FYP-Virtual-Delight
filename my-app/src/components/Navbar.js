import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* Navigation links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  {/* <li className="nav-item">
    <Link className="nav-link btn btn-primary rounded-pill px-4 py-2" to="/signup">
      Sign Up
    </Link>
  </li> */}
  <li className="nav-item">
    <Link className="nav-link btn btn-success rounded-pill px-4 py-2" to="/signup">
      Sign Up
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link btn btn-success rounded-pill px-4 py-2" to="/login">
      Login
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link btn btn-outline-primary rounded-pill px-4 py-2" to="/home">
      Home
    </Link>
  </li>
</ul>


        {/* Dark/Light mode switch */}
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'white'}`}>
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">
            Enable Mode
          </label>
        </div>

        {/* Search form */}
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
