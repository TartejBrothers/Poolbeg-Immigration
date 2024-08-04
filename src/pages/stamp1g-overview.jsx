import React from "react";
import "../styles/stamp1g.css";
import stamp1g from "../images/stampoverview.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactform";
export default function Stamp1GOverview() {
  return (
    <div className="stampmain">
      <Navbar />
      <div className="stampheader">
        <div className="workheaderleft">
          <h1>Stamp 1G Overview</h1>
          <h5>Click here for Stamp 1G Extension</h5>
          <p>
            An international student finishing studies in Ireland is eligible to
            apply for Stamp 1G permission to seek employment without an
            employment permit under the Third Level Graduate Programme. Learn
            more about who is eligible for Stamp 1G, Stamp 1G validity, and who
            is eligible for Stamp 1G.
          </p>
        </div>
        <div className="workheaderright">
          <img src={stamp1g} alt="Stamp 1G" />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
