import React, { useState, useEffect } from "react";
import "../styles/home.css";
import "../styles/industry.css";
import Navbar from "../components/navbar";
import homeabout from "../images/homeaboutus.jpeg";
import Testimonial from "../components/testimonial";
import ContactForm from "../components/contactform";
import Footer from "../components/footer";
import IndustriesServed from "../components/industriesserved";
import { useNavigate } from "react-router-dom";
import ContactFormPopup from "../components/contactformpopup";
export default function Home() {
  const navigateTo = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsPopupVisible(true);
    }, 5000);
  }, []);

  return (
    <div className="home">
      <Navbar />
      <ContactFormPopup isVisible={isPopupVisible} onClose={togglePopup} />

      <div className="homeheader">
        <h1> Poolbeg Immigration</h1>
        <h3>Irish Employment Permit and Immigration Specialists</h3>
        <p className="headercentertext">
          At Poolbeg Immigration, we specialise in Critical Skills Employment
          Permits, General Employment Permits, and Visa Applications.
          <br />
          Our services enable businesses to hire non-EEA nationals and
          individuals to secure their legal status in Ireland.
        </p>
        <div className="homeheaderbottom">
          <button
            onClick={() => {
              navigateTo("contact-us");
            }}
          >
            Contact Us
          </button>
          <div className="homeheaderdivider">
            <hr />
            <p>or Call Us On</p>
            <hr />
          </div>
          <p>
            <ion-icon name="call"></ion-icon> 0874836445
          </p>
        </div>
      </div>
      <div className="homeaboutus">
        <div className="homeaboutusleft">
          <h2>About Us</h2>
          <p>One-Step Solution for All Your Immigration Needs in Ireland</p>
          <ul>
            <li>
              Comprehensive immigration services for employers and individuals.
            </li>
            <li>
              Tailored support for Irish citizenship and family reunification
              visas.
            </li>
            <li>
              Expertise in employment permits and visa applications for non-EU
              nationals.
            </li>
            <li>
              Trusted consultancy for visa appeals and complex immigration
              cases.
            </li>
          </ul>
        </div>
        <div className="homeaboutusright">
          <img src={homeabout} alt="Logo" />
        </div>
      </div>

      <IndustriesServed />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
}
