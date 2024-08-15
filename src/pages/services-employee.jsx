import React from "react";
import "../styles/service.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import twitter from "../images/icons/twittercontact.svg";
import linkedin from "../images/icons/linkedincontact.svg";
import ServicePoints from "../components/elements/servicepoints";
import IndustriesServed from "../components/industriesserved";
import ContactFormRight from "../components/contactformright";

export default function ServicesEmployee() {
  return (
    <div className="servicemain">
      <Navbar />
      <div className="servicemainform">
        <div className="contactform serviceform">
          <div className="contactformleft serviceformleft">
            <p>
              <u>For Employees</u>
            </p>
            <h2>
              Get help with visa applications to hire non-EU nationals for your
              company
            </h2>
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
            <ContactFormRight />
          </div>
        </div>
      </div>
      <div className="servicemainbody">
        <h1>Why Us?</h1>
        <p>
          We focus on delivering positive results to our clients and dedicate to
          offering quality services.
        </p>
        <div className="servicepoints">
          <ServicePoints
            header="Fast turnaround time"
            content="Full-time focus to operate efficiently and effectively to deliver
          results on time."
          />
          <ServicePoints
            header="Dedicated account manager"
            content="Access to the consultant on the phone for quick support without the barrier of a receptionist."
          />
          <ServicePoints
            header="Seamless application supports"
            content="Prepare files and manage immigration-related applications from start to finish for you."
          />
          <ServicePoints
            header="Fast-track your application"
            content="Follow up closely with the Irish department to track your application and liaise on your behalf."
          />
          <ServicePoints
            header="Professional advice and guidance"
            content="Stay abreast with the latest immigration changes in Ireland, ensuring you and your employees remain compliant with Immigration requirements."
          />
          <ServicePoints
            header="On-going Immigration consultations"
            content="Respond to regular enquires and act on your behalf in the events of immigration audit or difficult immigration matters, reviews, appeals, or cancellations."
          />
        </div>
      </div>
      <IndustriesServed />
      <Footer />
    </div>
  );
}
