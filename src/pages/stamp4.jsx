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
        Stamp 4 is immigration permission for foreign nationals to work, live,
        study, and operate businesses in Ireland without an employment permit.
        Stamp 4 stands out among all Irish immigration stamps as the ultimate
        boon for immigrants that are non-EEA nationals. Typically, citizens from
        a non-visa-required country (or spouse/civil partner to one) don’t need
        to apply for a visa or employment permit to enter Ireland.
      </p>
      <p>
        If you’re not a citizen of Ireland and want to stay in Ireland for more
        than 90 days, ordinarily, you need to get immigration permission and an
        employment permit. However, with Stamp 4, you are not restricted to
        conditions and permits. You can do the following things:
      </p>
      <ul>
        <li>Work without an employment permit in any profession.</li>
        <li>Start and run a business.</li>
        <li>
          Access state funds and services (subject to Government departments or
          agencies’ provisions).
        </li>
      </ul>
    </div>
  );
};

const WhoCanApply = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Who Can Apply for Stamp 4?</h3>
      <p>
        You can take up employment and are not required to hold an Employment
        Permit. You can work in a profession, subject to conditions of the
        relevant professional or other bodies.
      </p>
      <p>
        You can establish and operate a business. You may access state funds and
        services as determined by Government departments or agencies.
      </p>
      <p>You may be given Stamp 4 after:</p>
      <ul>
        <li>Holding a valid Critical Skills Employment Permit for 2 years</li>
        <li>Holding a valid employment permit for 5 years</li>
        <li>Being a researcher with a valid Hosting Agreement for 2 years</li>
      </ul>
      <p>Other cases for Stamp 4 eligibility include:</p>
      <ul>
        <li>
          Joining and residing with your Irish spouse, civil partner, or
          de-facto partner
        </li>
        <li>Being a convention or programme refugee</li>
        <li>
          Joining a family member who is a recognised refugee or has subsidiary
          protection
        </li>
        <li>Remaining with your Irish citizen child</li>
        <li>Being part of the Investor and Entrepreneur Programme</li>
        <li>For Long Term Residence</li>
      </ul>
    </div>
  );
};

const EligibilityRequirements = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Eligibility Requirements for Stamp 4</h3>
      <p>Your eligibility requirements depend on your visa programme.</p>

      <h4>For Start-up Entrepreneur Programme (STEP)</h4>
      <p>The eligibility requirements for STEP are:</p>
      <ul>
        <li>You must be of good character.</li>
        <li>
          You must be free of criminal charges or convictions in any
          jurisdiction.
        </li>
        <li>You must have €50,000 for the required funding.</li>
        <li>You must have an innovative business proposal.</li>
      </ul>

      <h4>For Spouse, Civil Partner or De-facto Partners</h4>
      <p>The eligibility requirements are:</p>
      <ul>
        <li>
          You must not be younger than 18 years of age at the time of your
          application for family reunification.
        </li>
        <li>
          Your marriage must be monogamous, consensual, legalised, and
          recognised by Irish law.
        </li>
        <li>
          Your partnerships must be similar to marriage and cohabiting for two
          years before the family application.
        </li>
        <li>
          Demonstrate commitment to be together permanently as couples, civil
          partners or de facto partners.
        </li>
      </ul>

      <h4>For Long Term Residency</h4>
      <p>
        If you have been offered an Irish Immigration permit, your eligibility
        requirements are as follows:
      </p>
      <ul>
        <li>
          You must have completed at least 5-year legal residence in Ireland.
        </li>
        <li>
          You must have qualifying stamps or valid Irish residence permit (IRP)
          cards as proof of 5-year legal residency.
        </li>
        <li>
          You must have been an employment permit or critical skills employment
          permit holder.
        </li>
        <li>You must have been of good character.</li>
        <li>
          You must not have caused an unnecessary burden on the government.
        </li>
        <li>You must not have an issue or record with the Irish police.</li>
        <li>
          You must have been compliant with all your previous immigration
          permissions.
        </li>
        <li>You must be a legal resident at the application.</li>
        <li>
          You must be in employment before, during, and after your application.
          Self-employment is not allowed.
        </li>
      </ul>
    </div>
  );
};

const ApplicationProcess = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Application Process</h3>
      <p>
        The process for applying for Stamp 4 varies based on the specific visa
        or residency permission you are applying for. Generally, you will need
        to follow these steps:
      </p>
      <ul>
        <li>
          Submit an online application through the appropriate immigration
          portal.
        </li>
        <li>
          Print, sign, and submit the application along with the necessary
          documents.
        </li>
        <li>Provide biometric data if required.</li>
      </ul>
      <p>
        <strong>Important:</strong> Submitting false or misleading information
        may result in visa refusal and a ban on reapplying for up to five years.
      </p>
    </div>
  );
};
export default function Stamp4() {
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
          <h1>Stamp 4</h1>
          <p>
            Stamp 4 is immigration permission that allows foreign nationals to
            work, live, study, and operate businesses in Ireland without an
            employment permit.
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
              Who Can Apply
            </li>
            <li
              onClick={() => setSelectedMode(3)}
              className={selectedMode === 3 ? "selectedelement" : ""}
            >
              Eligibility Requirements
            </li>
            <li
              onClick={() => setSelectedMode(4)}
              className={selectedMode === 4 ? "selectedelement" : ""}
            >
              Application Process
            </li>
          </ul>
        </div>
      </div>

      <div className="criticalpagecontent">
        {selectedMode === 1 && <Introduction />}
        {selectedMode === 2 && <WhoCanApply />}
        {selectedMode === 3 && <EligibilityRequirements />}
        {selectedMode === 4 && <ApplicationProcess />}
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}
