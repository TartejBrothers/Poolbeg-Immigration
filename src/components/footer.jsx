import React from "react";
import "../styles/footer.css";
import logo from "../images/icons/logo.jpeg";
import instagram from "../images/icons/instagram.svg";
import linkedin from "../images/icons/linkedin.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerabout">
        <div className="footeraboutheader">
          <img src={logo} alt="Logo" />
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
        <div className="footerchild">
          <h4>Work Permits</h4>
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
        <div className="footerchild">
          <h4>Stamp 1G</h4>
          <ul>
            <li>Stamp 1G Overview</li>
            <li>Stamp 1G Extension</li>
          </ul>
        </div>
        <div className="footerchild">
          <h4>Immigration</h4>
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
        <div className="footerchild">
          <h4>Our Services</h4>
          <ul>
            <li>For Employers</li>
            <li>For Individuals</li>
            <li>Case Studies</li>
          </ul>
          <button className="contactusbutton">Contact Us</button>
        </div>
      </div>
      <hr />
      <div className="footerbottom">
        <div className="footerbottomleft">
          <img src={logo} alt="About" />
          <span>
            <p>Home</p>|<p>Updates</p> | <p>About Us</p>
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
