import React from "react";
import "../styles/navbar.css";
import logo from "../images/icons/logo.jpeg";
import griplines from "../images/icons/griplines.png";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate("/" + path);
  };

  return (
    <div className="navbar">
      <div className="navbarmain">
        <div className="navbarleft">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbarcenter"></div>
        <div className="navbarright">
          <ul>
            <li onClick={() => navigateTo("work-permit")}>Work Permits</li>
            <li>Stamp 1G</li>
            <li>Immigration</li>
            <li>Our Services</li>
          </ul>
          <button>Contact Us</button>
          <div className="navbarmobile">
            <img src={griplines} alt="Menu Bar" />
          </div>
        </div>
      </div>
      <div className="navbarbottom">
        <ul>
          <li onClick={() => navigateTo("")}>Home</li>
          <li>News & Updates</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
}
