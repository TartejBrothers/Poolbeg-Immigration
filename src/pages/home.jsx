import React from "react";
import "../styles/home.css";
import Navbar from "../components/navbar";
import ServicesCard from "../components/elements/servicescard";
import employeehome from "../images/employershome.jpg";
import userhome from "../images/individualshome.png";
import Testimonial from "../components/testimonial";
import ContactForm from "../components/contactform";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="homeheader">
        <h1>Irish Employment Permit and Immigration Specialists</h1>
        <p className="headercentertext">
          We specialise in Critical Skills Employment Permits, General
          Employment Permits, and Visa Applications.
          <br />
          Our services enable businesses to hire non-EEA nationals and
          individuals to secure their legal status in Ireland.
        </p>
        <div className="homeheaderbottom">
          <button>Talk To Us</button>
          <div className="homeheaderdivider">
            <hr />
            <p>or Call Us On</p>
            <hr />
          </div>
          <p>+353 (01) 234 5678</p>
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
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
}
