import React, { useState } from "react";
import "../styles/immigrationpage.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import immigrationImage from "../images/immigrationpages.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";

const Stamp5Introduction = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Introduction</h3>
      <p>
        Stamp 5 is a permission that allows its holders to live and work in
        Ireland without the need for an Employment Permit. It does not give you
        a right to any particular public service or funding. The relevant
        government Department or State agency makes this decision.
      </p>
      <p>
        All intending applicants must have legal residence in Ireland to apply.
      </p>
    </div>
  );
};

const Stamp5Conditions = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Conditions attached to Stamp 5</h3>
      <ul>
        <li>Obey the laws of Ireland.</li>
        <li>Avoid involvement in any criminal activity.</li>
        <li>
          Reside continuously in the state, though reasonable periods of absence
          for holidays or family reasons are allowed.
        </li>
        <li>
          Make every effort to be employed and not become an undue burden to the
          State.
        </li>
        <li>
          Accept that permission does not automatically grant family members the
          right to enter or remain in Ireland.
        </li>
      </ul>
      <h4>Acceptable Stamps for Stamp 5 Application</h4>
      <ul>
        <li>Stamp 1</li>
        <li>Stamp 1G</li>
        <li>Stamp 3</li>
        <li>Stamp 4</li>
        <li>Stamp 4S</li>
      </ul>
      <h4>Unacceptable Stamps for Stamp 5 Application</h4>
      <ul>
        <li>Stamp 4 EuFam</li>
        <li>Stamp 0</li>
        <li>Student – Stamp 2 or Stamp 2A</li>
        <li>Temporary Registered Doctor’s – Stamp 4</li>
        <li>Intra Company Transfer – Stamp 4</li>
        <li>Spouse or dependent of an Intra Company Transfer – Stamp 3</li>
      </ul>
    </div>
  );
};

const Stamp5ProcessingTime = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Processing Time</h3>
      <p>
        Applications currently take a minimum of six months to process. They are
        processed in the order they are received and considered on their merits.
      </p>
    </div>
  );
};

export default function Stamp5() {
  const [selectedMode, setSelectedMode] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="criticalskillsmain">
      <Navbar />
      <div className="workpageheader immigrationpageheader">
        <div className="workheaderleft">
          <p
            onClick={() => {
              navigate("/immigration");
            }}
          >
            <u>
              <ion-icon name="arrow-back-outline"></ion-icon>
              Back to Immigration
            </u>
          </p>
          <h1>Stamp 5</h1>
          <p>
            Immigration stamps enable non-EEA nationals to live, work, invest,
            do business, and study in Ireland. The stamps vary by number and are
            subject to conditions. Stamp 5 is also known as a permission without
            condition as to time.
          </p>
          <button
            className="contactusbutton"
            onClick={() => navigate("/contact-us")}
          >
            Know More
          </button>
        </div>
        <div className="workheaderright">
          <img src={immigrationImage} alt="Immigration" />
        </div>
      </div>
      <div className="criticalskillbody">
        <div className="workpagecomponentselector">
          <ul>
            <li
              onClick={() => setSelectedMode(1)}
              className={selectedMode === 1 ? "selectedelement" : ""}
            >
              Introduction
            </li>
            <li
              onClick={() => setSelectedMode(2)}
              className={selectedMode === 2 ? "selectedelement" : ""}
            >
              Conditions attached to Stamp 5
            </li>
            <li
              onClick={() => setSelectedMode(3)}
              className={selectedMode === 3 ? "selectedelement" : ""}
            >
              Processing Time
            </li>
          </ul>
        </div>
      </div>
      <div className="criticalpagecontent">
        {selectedMode === 1 && <Stamp5Introduction />}
        {selectedMode === 2 && <Stamp5Conditions />}
        {selectedMode === 3 && <Stamp5ProcessingTime />}
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
