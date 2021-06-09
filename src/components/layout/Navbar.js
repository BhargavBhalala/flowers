import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  // ---------Responsive-navbar-active-animation----------
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-mainbg rounded navbar-rounded shadow">
        <div className="container">
          <a className="navbar-brand navbar-logo" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/"><i className="fas fa-home"></i>Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/service"><i className="far fa-clone"></i>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about"><i className="far fa-calendar-alt"></i>About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact"><i className="far fa-chart-bar"></i>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}



export default Navbar;