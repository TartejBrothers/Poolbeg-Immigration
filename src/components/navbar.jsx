import React from "react";
import "../styles/navbar.css";
import logo from "../images/icons/logo.jpeg";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbartop">
        <ul>
          <li>Home</li>
          <li>Updates</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="navbarmain">
        <div className="navbarleft">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbarcenter">
          <ul>
            <li>Work Permits</li>
            <li>Stamp 1G</li>
            <li>Immigration</li>
            <li>Our Services</li>
          </ul>
        </div>
        <div className="navbarright">
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}
