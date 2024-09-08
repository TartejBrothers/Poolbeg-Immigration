import React, { useState } from "react";
import "../styles/immigrationpage.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import immigrationImage from "../images/immigrationpages.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";

// Define individual sections for Stamp 6
const Stamp6Introduction = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Stamp 6 Introduction</h3>
      <p>
        Stamp 6 is the permission to remain in Ireland without condition if the
        holder has dual nationality or citizenship. Dual citizenship, in this
        case, denotes Irish citizenship and another. Those who qualify must hold
        or have the right to hold an Irish passport.
      </p>
    </div>
  );
};

const Stamp6Eligibility = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Who is eligible to apply for Stamp 6?</h3>
      <ul>
        <li>Through their parents.</li>
        <li>Through their grandparents.</li>
        <li>By naturalisation or post-nuptial citizenship.</li>
        <li>Stamp 6 permission renewal.</li>
      </ul>

      <h4>Through Parents</h4>
      <p>
        If one of their parents was born in Ireland, they are eligible and must
        provide the following documents:
      </p>
      <ul>
        <li>Mother’s or father’s long-form civil birth certificate.</li>
        <li>
          Mother’s civil marriage certificate if applying through the mother.
        </li>
        <li>Applicant’s long-form civil birth certificate.</li>
        <li>Applicant’s current passport.</li>
      </ul>

      <h4>Through Grandparents</h4>
      <p>Applicants must supply the following documents:</p>
      <ul>
        <li>Their foreign births registration certificate.</li>
        <li>Their current passport.</li>
      </ul>

      <h4>By Post-nuptial Citizenship (PNC)</h4>
      <p>Documents required:</p>
      <ul>
        <li>Current passport.</li>
        <li>Original certificate of naturalisation or PNC certificate.</li>
        <li>Current Irish passport.</li>
      </ul>

      <h4>Renewing Stamp 6 Permission</h4>
      <p>Documents required:</p>
      <ul>
        <li>Expired non-Irish passport with Stamp 6 permission.</li>
        <li>Current non-Irish passport.</li>
        <li>Current Irish passport (if already held).</li>
      </ul>
    </div>
  );
};

const Stamp6Naturalisation = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Steps to becoming an Irish citizen through Naturalisation</h3>
      <p>
        All applications for Irish citizenship by naturalisation are decided by
        the Immigration Service Delivery (ISD) on behalf of the Minister of
        Justice.
      </p>
      <ul>
        <li>Meet the Conditions</li>
        <li>Fill out an Application form</li>
        <li>Gather Supporting Documentation</li>
        <li>Make a Declaration</li>
        <li>Send the application and pay the fee</li>
      </ul>
    </div>
  );
};

const Stamp6Conditions = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Conditions</h3>
      <p>
        Applicants should meet the conditions for age, character, residence in
        the state, and future intentions.
      </p>

      <h4>Age</h4>
      <p>
        Applicants must be at least 18 years old unless applying for a child.
        Eligible children include:
      </p>
      <ul>
        <li>
          Those born in Ireland after 1 January 2005 but not eligible for
          citizenship by birth.
        </li>
        <li>Those of Irish descent or Irish associations.</li>
        <li>Those whose parent is a citizen by naturalisation.</li>
      </ul>

      <h4>Character</h4>
      <p>
        Applicants must be of good character and will be required to declare
        relevant actions on the application form.
      </p>
    </div>
  );
};

const Fees = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Fees</h3>
      <p>
        The fees associated with Stamp 6 applications may vary based on the type
        of application and whether it’s a new application or a renewal. Fees for
        naturalisation and other related applications are generally
        non-refundable, so make sure you meet all the requirements before
        paying.
      </p>
      <ul>
        <li>Application fee: €175</li>
        <li>
          Naturalisation certificate fee: €950 for adults, €200 for children
        </li>
      </ul>
    </div>
  );
};

const ProcessingTime = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Processing Time</h3>
      <p>
        The processing time for Stamp 6 applications can vary. Generally, it
        takes around 6 to 12 months from the submission of a complete
        application. However, this may vary depending on individual
        circumstances and the volume of applications being processed.
      </p>
      <p>
        For naturalisation applications, it is recommended to apply well in
        advance as delays can occur, and processing times may extend beyond the
        average.
      </p>
    </div>
  );
};

export default function Stamp6() {
  const [selectedMode, setSelectedMode] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="criticalskillsmain">
      <Navbar />
      <div className="workpageheader immigrationpageheader">
        <div className="workheaderleft">
          <p onClick={() => navigate("/immigration")}>
            <u>
              <ion-icon name="arrow-back-outline"></ion-icon>
              Back to Immigration
            </u>
          </p>
          <h1>Stamp 6</h1>
          <p>
            If you are married to, in a civil partnership with, or a dependent
            relative of an Irish, UK, EEA, or Swiss national, or a non-EEA
            national work permit holder in Ireland, you may be eligible to live
            in Ireland with your family member. Here’s what you need to know
            about the application process and requirements for various family
            visas.
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
              Eligibility
            </li>
            <li
              onClick={() => setSelectedMode(3)}
              className={selectedMode === 3 ? "selectedelement" : ""}
            >
              Naturalisation Steps
            </li>
            <li
              onClick={() => setSelectedMode(4)}
              className={selectedMode === 4 ? "selectedelement" : ""}
            >
              Conditions
            </li>
            <li
              onClick={() => setSelectedMode(5)}
              className={selectedMode === 5 ? "selectedelement" : ""}
            >
              Fees
            </li>
            <li
              onClick={() => setSelectedMode(6)}
              className={selectedMode === 6 ? "selectedelement" : ""}
            >
              Processing Time
            </li>
          </ul>
        </div>
      </div>

      <div className="criticalpagecontent">
        {selectedMode === 1 && <Stamp6Introduction />}
        {selectedMode === 2 && <Stamp6Eligibility />}
        {selectedMode === 3 && <Stamp6Naturalisation />}
        {selectedMode === 4 && <Stamp6Conditions />}
        {selectedMode === 5 && <Fees />}
        {selectedMode === 6 && <ProcessingTime />}
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}
