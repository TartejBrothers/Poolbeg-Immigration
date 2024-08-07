import React from "react";
import "../styles/contactform.css";
import twitter from "../images/icons/twittercontact.svg";
import linkedin from "../images/icons/linkedincontact.svg";
import phonecontact from "../images/icons/phonecontact.png";
import emailcontact from "../images/icons/emailcontact.png";
export default function ContactForm() {
  return (
    <div className="contactmain">
      <div className="contactform">
        <div className="contactformleft">
          <h2>Get In Touch With Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <div className="contactsocials">
            <ul>
              <li>
                <img src={twitter} alt="Twitter" />
              </li>
              <li>
                <img src={linkedin} alt="LinkedIn" />
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
                <p>+353 01 234 567</p>
              </div>
            </div>

            <div className="contactelement">
              <div className="leftcontactelement">
                <img src={emailcontact} alt="email" />
              </div>
              <div className="rightcontactelement">
                <h3>Email Us</h3>
                <p>info@careerireland</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contactformright">
          <h4>Fill In Your Details</h4>
          <form>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
            />
            <div className="inputdivhalf">
              <input type="email" placeholder="Enter Your Email" required />

              <input
                type="number"
                placeholder="Enter Your Phone Number"
                required
              />
            </div>
            <textarea placeholder="Enter Your Message" required></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
