import React from "react";
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
export default function Home() {
  const navigateTo = useNavigate();

  return (
    <div className="home">
      <Navbar />

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
            <ion-icon name="call"></ion-icon>+353 (01) 234 5678
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
              "Employment Permits",
              "Dependents/Spouses Visas",
              "Stamp 1G Extension",
              "​Stamp 6 (Irish Citizenships)",
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
