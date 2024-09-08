import React, { useState } from "react";
import "../styles/immigrationpage.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import immigrationImage from "../images/immigrationpages.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";

const Introduction = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Introduction</h3>
      <p>
        If you are married to or in a civil partnership with an Irish, UK, EEA,
        or Swiss National, or a Non-EEA national work permit holder in Ireland,
        you may be permitted to live in Ireland with your spouse/partner. The
        status change refers to a person who is already a resident in the state
        and had an alternative permission before getting married.
      </p>
      <p>The application process time varies from four to six months.</p>
    </div>
  );
};

const CivilPartnerships = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Civil Partnerships</h3>
      <p>
        Persons who entered into a civil partnership before 16 May 2016 in
        another jurisdiction will be recognized as civil partners in Ireland.
        This recognition is as provided for under Section 5 of the Civil
        Partnership and Certain Rights and Obligations of Cohabitants Act 2010.
      </p>
      <p>
        Persons who entered into civil partnerships after 16 May 2016 outside
        the jurisdiction will no longer be recognized in Ireland. This is as
        provided for under the Marriages Act 2015.
      </p>
      <p>
        Same-sex marriages which were entered into prior to the introduction of
        the Marriage Bill 2015 are now recognized in Ireland with effect from 16
        November 2015. You can find more information on our Department of
        Justice website.
      </p>
    </div>
  );
};

const HowToApply = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>How to Apply</h3>
      <h4>If your spouse is an Irish National</h4>
      <p>
        Your application must be submitted in writing to Immigration Service
        Delivery. You must complete the Spouse/ Civil Partner of an Irish
        National Application Form and submit it with all the required original
        documentation, to the Department of Justice.
      </p>
      <h4>If your spouse is a Non-EEA and Swiss work permit holder</h4>
      <p>
        Your application must be submitted in writing to Immigration Service
        Delivery. You must complete the dependent application form and submit it
        with all the required documentation.
      </p>
    </div>
  );
};

const Eligibility = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Eligibility</h3>
      <p>
        If your spouse is an Irish resident work permit holder, there are
        certain criteria to be fulfilled:
      </p>
      <ul>
        <li>Your spouse must be on a Stamp 1, 4, or 5.</li>
        <li>
          You must have entered Ireland legally. If you are unlawfully present
          in the State at the time of making the application, we will refuse the
          application.
        </li>
        <li>
          We will not accept your application if you are the subject of a
          notification of intention to deport (15-day letter under Section 3 of
          the 1999 Immigration Act) or a Deportation Order or any other
          requirement to leave the State.
        </li>
        <li>You must be a person of good character and obey Irish laws.</li>
      </ul>
      <p>
        In this application, you would need to provide evidence of your
        relationship and evidence of the current activity of your spouse.
      </p>
    </div>
  );
};

export default function SpouseVisa() {
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
          <h1>Spouse/Civil Partner Visa</h1>
          <p>
            If you are married to, or in a civil partnership with, an Irish
            national you may be permitted to live in Ireland with your
            spouse/partner. Learn more about bringing your non-EEA spouse or
            civil partner home to Ireland here.
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
              Civil Partnerships
            </li>
            <li
              onClick={() => setSelectedMode(3)}
              className={selectedMode === 3 ? "selectedelement" : ""}
            >
              How to Apply
            </li>
            <li
              onClick={() => setSelectedMode(4)}
              className={selectedMode === 4 ? "selectedelement" : ""}
            >
              Eligibility
            </li>
          </ul>
        </div>
      </div>
      <div className="criticalpagecontent">
        {selectedMode === 1 && <Introduction />}
        {selectedMode === 2 && <CivilPartnerships />}
        {selectedMode === 3 && <HowToApply />}
        {selectedMode === 4 && <Eligibility />}
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
