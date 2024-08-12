import React, { useState, useEffect } from "react";
import "../styles/footer.css";
import logo from "../images/icons/logo.jpeg";
import instagram from "../images/icons/instagram.svg";
import linkedin from "../images/icons/linkedin.svg";
import { useNavigate, useLocation } from "react-router-dom";
export default function Footer() {
  const [footercolumnone, setFootercolumnone] = useState(false);
  const [footercolumntwo, setFootercolumntwo] = useState(false);
  const [footercolumnthree, setFootercolumnthree] = useState(false);
  const [footercolumnfour, setFootercolumnfour] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navigateTo = (path) => {
    navigate("/" + path);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="footer">
      <div className="footerabout">
        <div className="footeraboutheader">
          <h3>About Us</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dolorum quae, voluptates, quos, doloribus quia quod doloremque
          voluptatem autem quidem fugit. Quisquam dolorum quae, voluptates,
          quos, doloribus quia quod doloremque voluptatem autem quidem fugit.
        </p>
      </div>
      <hr />
      <div className="footertop">
        <div
          className={
            footercolumnone ? "footerchild activefooter" : "footerchild"
          }
        >
          <span
            onClick={() => {
              setFootercolumnone(!footercolumnone);
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
        <div
          className={
            footercolumntwo ? "footerchild activefooter" : "footerchild"
          }
        >
          <span
            onClick={() => {
              setFootercolumntwo(!footercolumntwo);
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
        </div>
        <div
          className={
            footercolumnthree ? "footerchild activefooter" : "footerchild"
          }
        >
          <span
            onClick={() => {
              setFootercolumnthree(!footercolumnthree);
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
                <li>Work Visas</li>
                <li>Study Visas</li>
                <li>Short-Term Visas</li>
                <li>Family Visas</li>
              </ul>

              <ul>
                <li>Stamp 4</li>
                <li>Stamp 5</li>
                <li>Stamp 6 (Irish Citizenship)</li>
                <li>Other Irish Immigration Stamps</li>
              </ul>

              <ul>
                <li>Spouse/Civil Partner Visa</li>
                <li>Parent of an Irish Child</li>
                <li>De Facto Partner Visa</li>
                <li>Change of Immigration Permission</li>
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
      <hr />
      <div className="footerbottom">
        <div className="footerbottomleft">
          <img src={logo} alt="About" />
          <span>
            <p
              onClick={() => {
                navigateTo("");
              }}
            >
              Home
            </p>
            |
            <p
              onClick={() => {
                navigateTo("news-updates");
              }}
            >
              News and Updates
            </p>
            |{" "}
            <p
              onClick={() => {
                navigateTo("about-us");
              }}
            >
              About Us
            </p>
          </span>
        </div>
        <div className="footerbottomright">
          <img src={instagram} alt="Instagram" />
          <img src={linkedin} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
}
