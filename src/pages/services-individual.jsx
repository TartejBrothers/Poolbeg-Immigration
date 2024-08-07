import React from "react";
import "../styles/service.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import twitter from "../images/icons/twittercontact.svg";
import linkedin from "../images/icons/linkedincontact.svg";

export default function ServicesEmployee() {
  return (
    <div className="serviceemployee">
      <Navbar />
      <div className="contactform serviceform">
        <div className="contactformleft serviceformleft">
          <p>
            <u>For Individuals</u>
          </p>
          <h2>Speak to us about your personal Immigration needs</h2>
          <p>
            We provide immigration services to employers and recruiters. We
            enable businesses to hire non-EU nationals by processing the work
            permit and visa applications for you from start to finish. We
            streamline the process for you and take the stress out of visa
            applications for you and your team.
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
          <button className="talktousbutton">
            Talk To Us <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
        <div className="contactformright serviceformright">
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
        <form></form>
      </div>
      <Footer />
    </div>
  );
}
