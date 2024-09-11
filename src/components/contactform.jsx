import React from "react";
import "../styles/contactform.css";
import twitter from "../images/icons/twittercontact.svg";
import linkedin from "../images/icons/linkedincontact.svg";
import phonecontact from "../images/icons/phonecontact.png";
import emailcontact from "../images/icons/emailcontact.png";
import ContactFormRight from "./contactformright";
import facebookblack from "../images/icons/facebook.svg";
import instagramblack from "../images/icons/instagramblack.svg";

export default function ContactForm() {
  return (
    <div className="contactmain">
      <div className="contactform">
        <div className="contactformleft">
          <h2>Get In Touch With Us</h2>
          <p>
            We are here to help you with your queries. Please feel free to reach
            out to us.
          </p>
          <div className="contactsocials">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/poolbegimmigration?igsh=MWR4bnR0NXllaTJ1eA=="
                  target="_blank"
                >
                  <img src={instagramblack} alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/poolbeg-immigration/"
                  target="_blank"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61565391312086&mibextid=ZbWKwL"
                  target="_blank"
                >
                  <img src={facebookblack} alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>
          <div className="contactinfo">
            <div className="contactelement">
              <div className="leftcontactelement">
                <img src={phonecontact} alt="phone" />
              </div>
              <div className="rightcontactelement">
                <h3>Contact Us</h3>
                <p>+353 89 947 1396 </p>
              </div>
            </div>

            <div className="contactelement">
              <div className="leftcontactelement">
                <img src={emailcontact} alt="email" />
              </div>
              <div className="rightcontactelement">
                <h3>Email Us</h3>
                <p>info@poolbegimmigration.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contactformright">
          <ContactFormRight />
        </div>
      </div>
    </div>
  );
}
