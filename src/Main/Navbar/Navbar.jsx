import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="navbar-list">
        <NavLink activeclassname="active" className="navbar-link" to="/">
          About
        </NavLink>
        <NavLink activeclassname="active" className="navbar-link" to="/resume">
          Resume
        </NavLink>
        <NavLink activeclassname="active" className="navbar-link" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink activeclassname="active" className="navbar-link" to="contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
