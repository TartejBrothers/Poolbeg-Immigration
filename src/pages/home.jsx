import React, { useState, useEffect } from "react";
import "../styles/home.css";
import "../styles/industry.css";
import Navbar from "../components/navbar";
import homeabout from "../images/back/back15.jpg";
import Testimonial from "../components/testimonial";
import ContactForm from "../components/contactform";
import Footer from "../components/footer";
import IndustriesServed from "../components/industriesserved";
import { useNavigate } from "react-router-dom";
import ContactFormPopup from "../components/contactformpopup";
import AcceptCookies from "../components/accept-cookies";

import CalendlyButton from "../components/calendly";
export default function Home() {
  const navigateTo = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isCookiesAccepted, setIsCookiesAccepted] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const togglePopupCookie = () => {
    setIsCookiesAccepted(!isCookiesAccepted);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCookiesAccepted(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsPopupVisible(true);
    }, 5000);
  }, []);

  return (
    <div className="home">
      <Navbar />
      <ContactFormPopup isVisible={isPopupVisible} onClose={togglePopup} />

      <AcceptCookies
        isVisible={isCookiesAccepted}
        onClose={togglePopupCookie}
      />
      <div className="homeheader">
        <h1> Poolbeg Immigration</h1>
        <h3>End To End Irish Immigration Partners</h3>
        <p className="headercentertext">
          Your Immigration Partner for Naturalization, Dependent Spouse Visa,
          Join Family Visa, Family Re unification visa, De Facto Partner Visa,
          EU Treaty Rights, Entrepreneur Visa, Bringing Elderly parents to
          Ireland, Child Passport Applications, Stamp 4 and Stamp 5
          applications, Work visa, Trusted Partner, Student visa, Tourist and
          Visit Visa Applications and many more.
        </p>
        <h4> Turn your Immigration Ambiguities into Certainties</h4>
        <div className="homeheaderbottom">
          <a href="https://calendly.com/debs-tcd" target="_blank">
            <button>Book A Free Consultation</button>
          </a>
          <div className="homeheaderdivider">
            <hr />
            <p>or We are Available At</p>
            <hr />
          </div>
          <p>
            <ion-icon name="logo-whatsapp"></ion-icon>/
            <ion-icon name="call"></ion-icon> at 0874836445
          </p>
        </div>
      </div>
      <div className="homeaboutus">
        <div className="homeaboutusleft">
          <h2>About Us</h2>
          <p>
            At Poolbeg Immigrations, we are proud to be a trusted leader in
            providing end-to-end immigration solutions for both corporations and
            individuals. With over four years of industry expertise, we have
            built a solid reputation for delivering tailored and efficient
            immigration services. Our deep knowledge of non-EU immigration laws
            ensures that every client receives the most accurate and up-to-date
            guidance.
          </p>

          <h3>Comprehensive Services</h3>
          <p>
            Our expertise spans a broad range of immigration services,
            including:
          </p>
          <ul>
            <li>Naturalization Applications</li>
            <li>Join Family Visas</li>
            <li>Dependent Spouse and De Facto Partner Visas</li>
            <li>Stamp 0 (Elderly Dependent Parent) Visas</li>
            <li>Stamp 4 and Stamp 5 Applications</li>
            <li>
              Work Permits (Critical Skills Employment Permits and General Work
              Permits)
            </li>
            <li>Short Stay - Tourist & Visit Visas</li>
            <li>Student Visa Applications</li>
            <li>EU Treaty Rights</li>
            <li>Labour Market Means Test</li>
            <li>Entrepreneur Visa</li>
          </ul>
        </div>
        <div className="homeaboutusright">
          <img src={homeabout} alt="Logo" className="roundedcorners" />
        </div>
      </div>

      <IndustriesServed />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
}
