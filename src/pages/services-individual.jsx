import React from "react";
import "../styles/service.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import twitter from "../images/icons/twittercontact.svg";
import linkedin from "../images/icons/linkedincontact.svg";

export default function ServicesIndividual() {
  return (
    <div className="servicemain">
      <Navbar />
      <div className="servicemainform">
        <div className="contactform serviceform">
          <div className="contactformleft serviceformleft">
            <p>
              <u>For Individuals</u>
            </p>
            <h2>Speak to us about your personal Immigration needs</h2>
            <p>
              Future Direct provides assistance to private clients on various
              applications, such as General Employment Permits, Critical Skill
              Employment Permit, Stamp 1G Extension, Visa Extension, Entry Visa,
              Citizenship, Family Reunification, Stamp 4, Stamp 0, and more.
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
        </div>
      </div>

      <Footer />
    </div>
  );
}
