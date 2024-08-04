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
            <li className="dropdown">
              <span onClick={() => navigateTo("work-permit")}>
                Work Permits
              </span>
              <div className="dropdown-content">
                <ul>
                  <li>Critical Skills Employment Permit</li>
                  <li>General Employment Permits</li>
                  <li>Reactivation Employment Permit</li>
                  <li>Other Employment Permit Types</li>
                  <li>Partner/Spouse of Permit Holders</li>
                  <li>Appeal Employment Permit Refusal</li>
                  <li>Labor Market Need Test</li>
                  <li>Trusted Partnership</li>
                  <li>Critical Skills Occupation Lists</li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <span>Stamp 1G</span>
              <div className="dropdown-content">
                <ul>
                  <li>Stamp 1G Overview</li>
                  <li>Stamp 1G Extension</li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <span>Immigration</span>
              <div className="dropdown-content">
                <ul>
                  <li>Work Visas</li>
                  <li>Study Visas</li>
                  <li>Short-Term Visas</li>
                  <li>Family Visas</li>
                  <li>Stamp 4</li>
                  <li>Stamp 5</li>
                  <li>Stamp 6 (Irish Citizenship)</li>
                  <li>Other Irish Immigration Stamps</li>
                  <li>Spouse/Civil Partner Visa</li>
                  <li>Parent of an Irish Child</li>
                  <li>De Facto Partner Visa</li>
                  <li>Change of Immigration Permission</li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <span>Our Services</span>
              <div className="dropdown-content">
                <ul>
                  <li>For Employers</li>
                  <li>For Individuals</li>
                  <li>Case Studies</li>
                </ul>
              </div>
            </li>
          </ul>
          <button className="contactusbutton">Contact Us</button>
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
