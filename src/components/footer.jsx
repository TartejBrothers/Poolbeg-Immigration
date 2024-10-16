import React, { useState, useEffect } from "react";
import "../styles/footer.css";
import logo from "../images/icons/logo.jpeg";
import instagram from "../images/icons/instagram.svg";
import linkedin from "../images/icons/linkedin.svg";
import facebook from "../images/icons/facebook.png";
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
          {/* <img src={logo} alt="Logo" /> */}
          <p>
            At Poolbeg Immigration, we specialize in navigating all aspects of
            immigration to Ireland, from visas and work permits to residency and
            citizenship.
          </p>
        </div>
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
            <li onClick={() => navigateTo("work-permit/general-permits")}>
              General Employment Permits
            </li>
            <li onClick={() => navigateTo("work-permit/reactivation-permits")}>
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
            <li onClick={() => navigateTo("work-permit/trusted-partnership")}>
              Trusted Partner
            </li>
            <li onClick={() => navigateTo("work-permit/critical-occupation")}>
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
                <li onClick={() => navigateTo("immigration/short-term-visa")}>
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
                  Stamp 6{/* Naturalisation/ Irish Citizenship */}
                </li>
                <li onClick={() => navigateTo("immigration/other-stamps")}>
                  Other Irish Immigration Stamps
                </li>
              </ul>

              <ul>
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
          <div className="footerbottomleftkeytags">
            <p
              onClick={() => {
                navigateTo("");
              }}
            >
              Home
            </p>
            {/* |
            <p
              onClick={() => {
                navigateTo("news-updates");
              }}
            >
              News and Updates
            </p> */}
            |{" "}
            <p
              onClick={() => {
                navigateTo("about-us");
              }}
            >
              About Us
            </p>
          </div>
        </div>
        <div className="footerbottomrightkey">
          <p
            onClick={() => {
              navigateTo("data-privacy");
            }}
          >
            Data Privacy
          </p>
          |{" "}
          <p
            onClick={() => {
              navigateTo("terms-and-conditions");
            }}
          >
            Terms and Conditions
          </p>
          |{" "}
          <p
            onClick={() => {
              navigateTo("cookie-policy");
            }}
          >
            Cookie Policy
          </p>
        </div>
        <div className="footerbottomright">
          <a
            href="https://www.instagram.com/poolbegimmigration?igsh=MWR4bnR0NXllaTJ1eA=="
            target="_blank"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/poolbeg-immigration/"
            target="_blank"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61565391312086&mibextid=ZbWKwL"
            target="_blank"
          >
            <img src={facebook} alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
  );
}
