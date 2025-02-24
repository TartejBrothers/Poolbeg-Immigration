import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import logo from "../images/icons/logo.jpeg";
import griplines from "../images/icons/griplines.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [footercolumnone, setFootercolumnone] = useState(false);
  const [footercolumntwo, setFootercolumntwo] = useState(false);
  const [footercolumnthree, setFootercolumnthree] = useState(false);
  const [footercolumnfour, setFootercolumnfour] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigateTo = (path) => {
    navigate("/" + path);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar">
      <div className="navbarmain">
        <div className="navbarleft">
          <img src={logo} alt="Logo" onClick={() => navigateTo("")} />
        </div>
        <div className="navbarcenter"></div>
        <div className="navbarright">
          <ul>
            <li onClick={() => navigateTo("")}>Home</li>

            <li onClick={() => navigateTo("about-us")}>About Us</li>
            <li className="dropdown">
              <span onClick={() => navigateTo("work-permit")}>
                Work Permits <ion-icon name="chevron-down"></ion-icon>
              </span>
              <div className="dropdown-content">
                <ul>
                  <li onClick={() => navigateTo("work-permit/critical-skills")}>
                    Critical Skills Employment Permit
                  </li>
                  <li onClick={() => navigateTo("work-permit/general-permits")}>
                    General Employment Permits
                  </li>
                  <li
                    onClick={() =>
                      navigateTo("work-permit/reactivation-permits")
                    }
                  >
                    Reactivation Employment Permit
                  </li>
                  <li onClick={() => navigateTo("work-permit/other-permits")}>
                    Other Employment Permit Types
                  </li>
                  <li
                    onClick={() => navigateTo("work-permit/dependant-permits")}
                  >
                    Partner/Spouse of Permit Holders
                  </li>
                  <li onClick={() => navigateTo("work-permit/appeal-permits")}>
                    Appeal Employment Permit Refusal
                  </li>
                  <li onClick={() => navigateTo("work-permit/labour-permits")}>
                    Labour Market Need Test
                  </li>
                  <li
                    onClick={() =>
                      navigateTo("work-permit/trusted-partnership")
                    }
                  >
                    Trusted Partner
                  </li>
                  <li
                    onClick={() =>
                      navigateTo("work-permit/critical-occupation")
                    }
                  >
                    Critical Skills Occupation Lists
                  </li>
                </ul>
              </div>
            </li>
            {/* <li className="dropdown">
              <span>
                Stamp 1G <ion-icon name="chevron-down"></ion-icon>
              </span>
              <div className="dropdown-content">
                <ul>
                  <li onClick={() => navigateTo("stamp1g-overview")}>
                    Stamp 1G Overview
                  </li>
                  <li onClick={() => navigateTo("stamp1g-extension")}>
                    Stamp 1G Extension
                  </li>
                </ul>
              </div>
            </li> */}
            <li className="dropdown">
              <span onClick={() => navigateTo("immigration")}>
                Immigration <ion-icon name="chevron-down"></ion-icon>
              </span>
              <div className="dropdown-content">
                <ul>
                  <li onClick={() => navigateTo("immigration/work-visa")}>
                    Work Visas
                  </li>
                  <li onClick={() => navigateTo("immigration/study-visa")}>
                    Study Visas
                  </li>
                  <li onClick={() => navigateTo("immigration/short-term-visa")}>
                    Short-Term Visas
                  </li>
                  <li onClick={() => navigateTo("immigration/family-visa")}>
                    Join Family Visas
                  </li>
                  <li onClick={() => navigateTo("immigration/stamp4")}>
                    Stamp 4
                  </li>
                  <li onClick={() => navigateTo("immigration/stamp5")}>
                    Stamp 5
                  </li>
                  <li onClick={() => navigateTo("immigration/stamp6")}>
                    Stamp 6
                  </li>
                  <li onClick={() => navigateTo("immigration/other-stamps")}>
                    Other Irish Immigration Stamps
                  </li>
                  <li onClick={() => navigateTo("immigration/spouse-visa")}>
                    Spouse/Civil Partner Visa
                  </li>
                  <li onClick={() => navigateTo("immigration/child-visa")}>
                    Parent of an Irish Child
                  </li>
                  <li onClick={() => navigateTo("immigration/partner-visa")}>
                    De Facto Partner Visa
                  </li>
                  <li
                    onClick={() =>
                      navigateTo("immigration/immigration-permission")
                    }
                  >
                    Change of Immigration Permission
                  </li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <span>
                Our Services <ion-icon name="chevron-down"></ion-icon>
              </span>
              <div className="dropdown-content">
                <ul>
                  <li onClick={() => navigateTo("services/employee")}>
                    For Employers
                  </li>
                  <li onClick={() => navigateTo("services/individual")}>
                    For Individuals
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <button
            className="contactusbutton"
            onClick={() => {
              navigateTo("contact-us");
            }}
          >
            Contact Us
          </button>
          <div className="navbarmobile" onClick={toggleDropdown}>
            <img src={griplines} alt="Menu Bar" />
          </div>
        </div>
      </div>

      {showDropdown && (
        <div className="navbarmobile-dropdown">
          <div className="navbarmain">
            <div className="navbarleft">
              <img src={logo} alt="Logo" onClick={() => navigateTo("")} />
            </div>
            <div className="navbarcenter"></div>
            <div className="navbarright">
              <ul>
                <li className="dropdown">
                  <span onClick={() => navigateTo("work-permit")}>
                    Work Permits <ion-icon name="chevron-down"></ion-icon>
                  </span>
                  <div className="dropdown-content">
                    <ul>
                      <li
                        onClick={() =>
                          navigateTo("work-permit/critical-skills")
                        }
                      >
                        Critical Skills Employment Permit
                      </li>
                      <li
                        onClick={() =>
                          navigateTo("work-permit/general-permits")
                        }
                      >
                        General Employment Permits
                      </li>
                      <li
                        onClick={() =>
                          navigateTo("work-permit/reactivation-permits")
                        }
                      >
                        Reactivation Employment Permit
                      </li>
                      <li
                        onClick={() => navigateTo("work-permit/other-permits")}
                      >
                        Other Employment Permit Types
                      </li>
                      <li
                        onClick={() =>
                          navigateTo("work-permit/dependant-permits")
                        }
                      >
                        Partner/Spouse of Permit Holders
                      </li>
                      <li
                        onClick={() => navigateTo("work-permit/appeal-permits")}
                      >
                        Appeal Employment Permit Refusal
                      </li>
                      <li
                        onClick={() => navigateTo("work-permit/labour-permits")}
                      >
                        Labour Market Need Test
                      </li>
                      <li
                        onClick={() =>
                          navigateTo("work-permit/trusted-partnership")
                        }
                      >
                        Trusted Partner
                      </li>
                      <li>Critical Skills Occupation Lists</li>
                    </ul>
                  </div>
                </li>
                {/* <li className="dropdown">
                  <span>
                    Stamp 1G <ion-icon name="chevron-down"></ion-icon>
                  </span>
                  <div className="dropdown-content">
                    <ul>
                      <li onClick={() => navigateTo("stamp1g-overview")}>
                        Stamp 1G Overview
                      </li>
                      <li onClick={() => navigateTo("stamp1g-extension")}>
                        Stamp 1G Extension
                      </li>
                    </ul>
                  </div>
                </li> */}
                <li className="dropdown">
                  <span onClick={() => navigateTo("immigration")}>
                    Immigration <ion-icon name="chevron-down"></ion-icon>
                  </span>
                  <div className="dropdown-content">
                    <ul>
                      <li onClick={() => navigateTo("immigration/work-visa")}>
                        Work Visas
                      </li>
                      <li onClick={() => navigateTo("immigration/study-visa")}>
                        Study Visas
                      </li>
                      <li
                        onClick={() =>
                          navigateTo("immigration/short-term-visa")
                        }
                      >
                        Short-Term Visas
                      </li>
                      <li onClick={() => navigateTo("immigration/family-visa")}>
                        Join Family Visas
                      </li>
                      <li onClick={() => navigateTo("immigration/stamp4")}>
                        Stamp 4
                      </li>
                      <li onClick={() => navigateTo("immigration/stamp5")}>
                        Stamp 5
                      </li>
                      <li onClick={() => navigateTo("immigration/stamp6")}>
                        Stamp 6
                      </li>
                      <li
                        onClick={() => navigateTo("immigration/other-stamps")}
                      >
                        Other Irish Immigration Stamps
                      </li>
                      <li>Spouse/Civil Partner Visa</li>
                      <li>Parent of an Irish Child</li>
                      <li>De Facto Partner Visa</li>
                      <li>Change of Immigration Permission</li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown">
                  <span>
                    Our Services <ion-icon name="chevron-down"></ion-icon>
                  </span>
                  <div className="dropdown-content">
                    <ul>
                      <li onClick={() => navigateTo("services/employee")}>
                        For Employers
                      </li>
                      <li onClick={() => navigateTo("services/individual")}>
                        For Individuals
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <button
                className="contactusbutton"
                onClick={() => {
                  navigateTo("contact-us");
                }}
              >
                Contact Us
              </button>
              <div className="navbarmobile" onClick={toggleDropdown}>
                <div className="close-btn-navbar" onClick={toggleDropdown}>
                  &times;
                </div>
              </div>
            </div>
          </div>
          <div className="navbarbottom">
            <ul>
              <li onClick={() => navigateTo("")}>Home</li>
              {/* <li onClick={() => navigateTo("news-updates")}>News & Updates</li> */}
              <li onClick={() => navigateTo("about-us")}>About Us</li>
            </ul>
          </div>
          <div className="footertop">
            <div
              className={
                footercolumnone ? "footerchild activefooter" : "footerchild"
              }
            >
              <span
                onClick={() => {
                  setFootercolumnone(!footercolumnone);
                  setFootercolumntwo(false);
                  setFootercolumnthree(false);
                  setFootercolumnfour(false);
                }}
              >
                <h4
                  onClick={() => {
                    navigateTo("work-permit");
                  }}
                >
                  Work Permits{" "}
                </h4>
                <ion-icon name="chevron-down"></ion-icon>
              </span>
              <ul>
                <li onClick={() => navigateTo("work-permit/critical-skills")}>
                  Critical Skills Employment Permit
                </li>
                <li onClick={() => navigateTo("work-permit/general-permits")}>
                  General Employment Permits
                </li>
                <li
                  onClick={() => navigateTo("work-permit/reactivation-permits")}
                >
                  Reactivation Employment Permit
                </li>
                <li onClick={() => navigateTo("work-permit/other-permits")}>
                  Other Employment Permit Types
                </li>
                <li onClick={() => navigateTo("work-permit/dependant-permits")}>
                  Partner/Spouse of Permit Holders
                </li>
                <li onClick={() => navigateTo("work-permit/appeal-permits")}>
                  Appeal Employment Permit Refusal
                </li>
                <li onClick={() => navigateTo("work-permit/labour-permits")}>
                  Labour Market Need Test
                </li>
                <li
                  onClick={() => navigateTo("work-permit/trusted-partnership")}
                >
                  Trusted Partner
                </li>
                <li
                  onClick={() => navigateTo("work-permit/critical-occupation")}
                >
                  Critical Skills Occupation Lists
                </li>
              </ul>
            </div>
            {/* <div
              className={
                footercolumntwo ? "footerchild activefooter" : "footerchild"
              }
            >
              <span
                onClick={() => {
                  setFootercolumntwo(!footercolumntwo);
                  setFootercolumnone(false);
                  setFootercolumnthree(false);
                  setFootercolumnfour(false);
                }}
              >
                <h4>Stamp 1G </h4>
                <ion-icon name="chevron-down"></ion-icon>
              </span>
              <ul>
                <li onClick={() => navigateTo("stamp1g-overview")}>
                  Stamp 1G Overview
                </li>
                <li onClick={() => navigateTo("stamp1g-extension")}>
                  Stamp 1G Extension
                </li>
              </ul>
            </div> */}
            <div
              className={
                footercolumnthree ? "footerchild activefooter" : "footerchild"
              }
            >
              <span
                onClick={() => {
                  setFootercolumnthree(!footercolumnthree);
                  setFootercolumnone(false);
                  setFootercolumntwo(false);
                  setFootercolumnfour(false);
                }}
              >
                <h4
                  onClick={() => {
                    navigateTo("immigration");
                  }}
                >
                  Immigration{" "}
                </h4>
                <ion-icon name="chevron-down"></ion-icon>
              </span>
              <div className="footerinnerchild">
                <div className="footerelement">
                  <ul>
                    <li onClick={() => navigateTo("immigration/work-visa")}>
                      Work Visas
                    </li>
                    <li onClick={() => navigateTo("immigration/study-visa")}>
                      Study Visas
                    </li>
                    <li
                      onClick={() => navigateTo("immigration/short-term-visa")}
                    >
                      Short-Term Visas
                    </li>
                    <li onClick={() => navigateTo("immigration/family-visa")}>
                      Join Family Visas
                    </li>
                  </ul>

                  <ul>
                    <li onClick={() => navigateTo("immigration/stamp4")}>
                      Stamp 4
                    </li>
                    <li onClick={() => navigateTo("immigration/stamp5")}>
                      Stamp 5
                    </li>
                    <li onClick={() => navigateTo("immigration/stamp6")}>
                      Stamp 6
                    </li>
                    <li onClick={() => navigateTo("immigration/other-stamps")}>
                      Other Irish Immigration Stamps
                    </li>
                    <li onClick={() => navigateTo("immigration/spouse-visa")}>
                      Spouse/Civil Partner Visa
                    </li>
                    <li onClick={() => navigateTo("immigration/child-visa")}>
                      Parent of an Irish Child
                    </li>
                    <li onClick={() => navigateTo("immigration/partner-visa")}>
                      De Facto Partner Visa
                    </li>
                    <li
                      onClick={() =>
                        navigateTo("immigration/immigration-permission")
                      }
                    >
                      Change of Immigration Permission
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={
                footercolumnfour ? "footerchild activefooter" : "footerchild"
              }
            >
              <span
                onClick={() => {
                  setFootercolumnfour(!footercolumnfour);
                  setFootercolumnone(false);
                  setFootercolumntwo(false);
                  setFootercolumnthree(false);
                }}
              >
                <h4>Our Services </h4>
                <ion-icon name="chevron-down"></ion-icon>
              </span>
              <ul>
                <li onClick={() => navigateTo("services/employee")}>
                  For Employers
                </li>
                <li onClick={() => navigateTo("services/individual")}>
                  For Individuals
                </li>

                <li>
                  <button
                    className="contactusbutton"
                    onClick={() => {
                      navigateTo("contact-us");
                    }}
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
