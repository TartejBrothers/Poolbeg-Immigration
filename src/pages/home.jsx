import React, { useState, useEffect } from "react";
import "../styles/home.css";
import "../styles/industry.css";
import Navbar from "../components/navbar";
import ServicesCard from "../components/elements/servicescard";
import employeehome from "../images/employershome.jpg";
import userhome from "../images/individualshome.png";
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
            <ion-icon name="call"></ion-icon> +353 89 947 1396
          </p>
        </div>
      </div>

      <div className="homeservices">
        <h2>Our Services</h2>
        <div className="servicesrow">
          <ServicesCard
            image={employeehome}
            heading={"For Employers"}
            content={
              "We enable businesses to hire non-EU nationals by processing your work visa applications."
            }
            headingservice={"Top Services"}
            services={[
              "Trusted Partnership Registration",
              "Critical Skills Employment Permits",
              "General Employment Permits",
              "Visa Applications",
            ]}
            link={"home"}
          />
          <ServicesCard
            image={userhome}
            heading={"For Individuals"}
            content={
              "We provide advice and assistance to individuals with immigration support in Ireland."
            }
            headingservice={"Top Services"}
            services={[
              "Naturalisation",
              "Join Family Visa",
              "Dependent Spouse Visa",
              "Stamp 0",
            ]}
            link={"home"}
          />
        </div>
      </div>
      <IndustriesServed />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
}
