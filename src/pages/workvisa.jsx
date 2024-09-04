import React, { useState } from "react";
import "../styles/immigrationpage.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import immigrationImage from "../images/immigrationpages.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";
export const CriticalSkillsOne = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Introduction</h3>
      <p>
        Citizens of the EEA (which includes the EU, Iceland, Norway, and
        Liechtenstein), Switzerland, and the UK can live and work in Ireland
        without needing an employment permit.
      </p>
      <p>
        However, if you are from a country outside the EEA, Switzerland, or the
        UK, you will need to:
      </p>
      <ul>
        <li>Obtain an employment permit from DETE.</li>
        <li>
          Apply for a visa to enter Ireland if you come from a visa-required
          country.
        </li>
      </ul>
    </div>
  );
};

export const CriticalSkillsTwo = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>When to Apply</h3>
      <p>
        You can apply for a visa to enter Ireland up to 3 months before your
        intended travel date, once you have your employment permit from DETE.
        DETE offers various types of permits, including Critical Skills
        Employment Permits and General Employment Permits.
      </p>
      <p>
        If you are visiting another country before coming to Ireland, ensure you
        have the appropriate visa for that country before applying for an Irish
        visa.
      </p>
      <p>
        Need assistance with your work visa? <a href="#">Contact us now</a> for
        immediate support and guidance.
      </p>
    </div>
  );
};

export const CriticalSkillsThree = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>How to Apply</h3>
      <p>
        Submit your visa application online, following the instructions on the
        application form and preparing all required documents. Print, sign, and
        date the application form before submission. You may also need to
        provide biometric information. This process can be detailed and
        time-consuming.
      </p>
      <p>
        Need help with your work visa? <a href="#">Contact us now</a> for expert
        assistance. Future Direct is dedicated to guiding you through the entire
        process and handling it for you.
      </p>
    </div>
  );
};

export const CriticalSkillsFour = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Fees</h3>
      <p>
        The visa application fee is €60 for a single entry and €100 for multiple
        entries, payable to the Irish Visa Office. Some applicants may be exempt
        from this fee.
      </p>
      <p>
        Additional charges might apply during the application process. You may
        be able to pay in local currency. Check the visa office, embassy, or
        consulate website for details on additional charges and local payment
        options.
      </p>
      <p>
        Have questions or need immediate professional advice?{" "}
        <a href="#">Contact us now.</a>
      </p>
    </div>
  );
};

export const CriticalSkillsFive = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Processing Time</h3>
      <p>
        Applications are processed in the order they are received. It’s
        advisable not to purchase travel tickets until your visa application has
        been approved.
      </p>
      <p>
        Processing times can vary by country and may be longer during peak
        periods. Generally, you can expect a decision within 8 weeks from the
        date your application is lodged. Your application may take longer if
        supporting documentation is missing or requires verification, or due to
        your personal circumstances.
      </p>
      <p>
        Check the processing times on the visa office, embassy, or consulate
        website handling your application. For applications processed by the
        Dublin visa office, you can view the current processing dates on the
        visa decisions page.
      </p>
    </div>
  );
};

export const CriticalSkillsSix = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Supporting Documentation</h3>
      <p>
        Providing the correct supporting documents is crucial, as they help
        establish your circumstances in the country of application. Submitting
        documents does not guarantee that your visa will be granted. Ensure that
        all documents are originals.
      </p>
      <p>
        Documents not in English or Irish must be accompanied by a full
        translation, including:
      </p>
      <ul>
        <li>Confirmation from the translator of accuracy</li>
        <li>Translation date</li>
        <li>Translator’s full name, signature, and contact details</li>
      </ul>
      <p>
        Business or organizational letters must be on official headed paper and
        include:
      </p>
      <ul>
        <li>Full name</li>
        <li>Postal address</li>
        <li>Fixed telephone number</li>
        <li>Website and email address (excluding Yahoo and Hotmail)</li>
        <li>Contact person’s name and position</li>
        <li>
          Signature of an authorized representative (electronic signatures are
          not accepted)
        </li>
      </ul>
    </div>
  );
};

export const CriticalSkillsSeven = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Return of Documents</h3>
      <p>
        All submitted documents should be originals, and you should keep copies
        of everything you provide. Original documents such as marriage or birth
        certificates will be returned, but other documents like bank statements
        or invitation letters will not. Indicate which documents you wish to
        have returned with your application.
      </p>
    </div>
  );
};

export default function WorkVisa() {
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
          <h1>Work Visa</h1>
          <p>
            If you want to work in Ireland, you must obtain an Employment Permit
            from the Department of Enterprise, Trade and Employment (DETE). Here
            you can find detailed information on how to apply for the necessary
            visa to work in Ireland.
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
              When to Apply
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
              Fees
            </li>
            <li
              onClick={() => setSelectedMode(5)}
              className={selectedMode === 5 ? "selectedelement" : ""}
            >
              Processing Time
            </li>
            <li
              onClick={() => setSelectedMode(6)}
              className={selectedMode === 6 ? "selectedelement" : ""}
            >
              Supporting Documentation
            </li>
            <li
              onClick={() => setSelectedMode(7)}
              className={selectedMode === 7 ? "selectedelement" : ""}
            >
              Return of Documents
            </li>
          </ul>
        </div>
      </div>
      <div className="criticalpagecontent">
        {selectedMode === 1 && <CriticalSkillsOne />}
        {selectedMode === 2 && <CriticalSkillsTwo />}
        {selectedMode === 3 && <CriticalSkillsThree />}
        {selectedMode === 4 && <CriticalSkillsFour />}
        {selectedMode === 5 && <CriticalSkillsFive />}
        {selectedMode === 6 && <CriticalSkillsSix />}
        {selectedMode === 7 && <CriticalSkillsSeven />}
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}
