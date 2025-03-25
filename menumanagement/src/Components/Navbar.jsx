import React from "react";
import {NavLink} from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <NavLink className="navbar-brand logo" to="/">
            <span className="logo-primary">DEEP</span>{" "}
            <span className="logo-secondary">NET</span>
            <span className="logo-soft">SOFT</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">
                  MENU
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reservation">
                  MAKE A RESERVATION
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
