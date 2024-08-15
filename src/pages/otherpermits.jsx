import React, { useState } from "react";
import "../styles/critical-skills.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import workpermit from "../images/workpermit1.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";

export const CriticalSkillsOne = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Intra-Company Transfer Employment Permit</h2>
      <p>
        The Intra-Company Transfer Employment Permit allows a non-EEA employee
        to transfer from a foreign branch of a company to its Irish branch. This
        permit facilitates temporary transfers while enabling the employee to
        remain on a foreign payroll, retaining certain home-country benefits.
      </p>
      <h2>Eligibility for the Transferee:</h2>
      <ul>
        <li>
          Senior management or key personnel must earn at least €46,000 per
          annum.
        </li>
        <li>
          Personnel in training programs must earn at least €34,000 per annum.
        </li>
        <li>
          Specific requirements must be met for the transferee’s role and
          salary. Contact us for detailed guidance.
        </li>
      </ul>
      <h2>Eligibility for the Employer:</h2>
      <ul>
        <li>
          The Irish branch must be registered with the Company Registration
          Office and the Revenue Commissioners and be actively trading, unless a
          start-up.
        </li>
        <li>
          The foreign branch must be operational and linked through one of the
          following relationships: subsidiary, joint subsidiary, or business
          agreement across multiple states.
        </li>
      </ul>
      <h2>Family Reunion:</h2>
      <p>
        Dependents/partners/spouses must apply for separate employment permits.
      </p>
    </div>
  );
};


export const CriticalSkillsTwo = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Contract for Services Employment Permit</h2>
      <p>
        The Contract for Services Employment Permit is for situations where a
        foreign contractor has a contract to provide services to an Irish entity
        and needs to bring non-EEA employees to Ireland for this contract.
      </p>
      <h2>Eligibility for the Employee:</h2>
      <ul>
        <li>
          The occupation must not be on the Ineligible List of Occupations.
        </li>
        <li>
          The initial permit can last up to 24 months, extendable to 5 years.
        </li>
      </ul>
      <h2>Eligibility for the Employer:</h2>
      <ul>
        <li>
          The contractor must be registered with the Revenue Commissioners and,
          if applicable, the Companies Registration Office.
        </li>
        <li>
          At least 50% of the contractor’s employees or the Irish entity’s
          employees must be EEA nationals, unless exempt.
        </li>
      </ul>
      <h2>Family Reunion:</h2>
      <p>
        Dependents/partners/spouses must apply for separate employment permits.
      </p>
    </div>
  );
};


export const CriticalSkillsThree = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Internship Employment Permit</h2>
      <p>
        This permit allows foreign students enrolled in universities outside
        Ireland to work in Ireland to gain practical experience related to their
        studies. The permit lasts up to 12 months and cannot be renewed.
      </p>
      <h2>Eligibility for the Employee:</h2>
      <ul>
        <li>
          Must be a full-time student at a third-level institution outside
          Ireland.
        </li>
        <li>
          The internship must be relevant to the student’s course of study and
          provide practical experience.
        </li>
      </ul>
      <h2>Eligibility for the Employer:</h2>
      <ul>
        <li>
          Must be registered with the Revenue Commissioners and, if applicable,
          the Companies Registration Office.
        </li>
        <li>Must employ the student directly and meet the 50:50 rule.</li>
      </ul>
      <h2>Family Reunion:</h2>
      <p>
        Dependents/partners/spouses must apply for separate employment permits.
      </p>
    </div>
  );
};

export const CriticalSkillsFour = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Sport and Cultural Employment Permit</h2>
      <p>
        This permit is for foreign nationals with the qualifications, skills, or
        experience needed to develop and enhance sporting and cultural
        activities in Ireland.
      </p>
      <h2>Eligibility for the Employee:</h2>
      <ul>
        <li>
          Must possess the necessary qualifications and experience for the job.
        </li>
        <li>The role must meet the national minimum wage or higher.</li>
      </ul>
      <h2>Eligibility for the Employer:</h2>
      <ul>
        <li>
          Must be registered with the Revenue Commissioners and, if applicable,
          the Companies Registration Office.
        </li>
        <li>Must adhere to the 50:50 rule.</li>
      </ul>
      <h2>Family Reunion:</h2>
      <p>
        Dependents/partners/spouses must apply for separate employment permits.
      </p>
    </div>
  );
};

export const CriticalSkillsFive = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Exchange Agreement Employment Permit</h2>
      <p>
        This permit is granted based on specific exchange agreements or
        international treaties involving Ireland. It allows foreign nationals to
        work in Ireland for up to two years, depending on the agreement.
      </p>
      <h2>Eligible Agreements Include:</h2>
      <ul>
        <li>AIESEC</li>
        <li>IAESTE</li>
        <li>Fulbright Programme</li>
        <li>Various university and program-based exchanges</li>
      </ul>
      <h2>Eligibility for the Employee:</h2>
      <ul>
        <li>
          Must meet the qualifications and salary requirements as specified in
          the exchange agreement.
        </li>
        <li>
          Must provide a supporting letter from the exchange organization.
        </li>
      </ul>
      <h2>Family Reunion:</h2>
      <p>
        Dependents/partners/spouses must apply for separate employment permits.
      </p>
    </div>
  );
};

export default function OtherPermits() {
  const [selectedMode, setSelectedMode] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="criticalskillsmain">
      <Navbar />
      <div className="workpageheader criticalskillsheader">
        <div className="workheaderleft">
          <p
            onClick={() => {
              navigate("/work-permit");
            }}
          >
            <u>
              <ion-icon name="arrow-back-outline"></ion-icon>
              Back to Work Permits
            </u>
          </p>
          <h1>Other Employment Permit Types</h1>
          <p>
            Our consultancy has successfully secured hundreds of Critical Skills
            and General Employment Permits for clients. We work with you through
            every step to ensure all procedures are correctly followed.
          </p>
          <button
            className="contactusbutton"
            onClick={() => navigate("/contact-us")}
          >
            Know More
          </button>
        </div>
        <div className="workheaderright">
          <img src={workpermit} alt="Work Permit" />
        </div>
      </div>
      <div className="criticalskillbody">
        <div className="workpagecomponentselector">
          <ul>
            <li
              onClick={() => setSelectedMode(1)}
              className={selectedMode === 1 ? "selectedelement" : ""}
            >
              Intra-Company Transfer Employment Permit
            </li>

            <li
              onClick={() => setSelectedMode(2)}
              className={selectedMode === 2 ? "selectedelement" : ""}
            >
              Contract for Services Employment Permit
            </li>
            <li
              onClick={() => setSelectedMode(3)}
              className={selectedMode === 3 ? "selectedelement" : ""}
            >
              Internship Employment Permit
            </li>
            <li
              onClick={() => setSelectedMode(4)}
              className={selectedMode === 4 ? "selectedelement" : ""}
            >
              Sport and Cultural Employment Permit
            </li>
            <li
              onClick={() => setSelectedMode(5)}
              className={selectedMode === 5 ? "selectedelement" : ""}
            >
              Exchange Agreement Employment Permit
            </li>
          </ul>
        </div>
        <div className="criticalskillscontent">
          {selectedMode === 1 && <CriticalSkillsOne />}
          {selectedMode === 2 && <CriticalSkillsTwo />}
          {selectedMode === 3 && <CriticalSkillsThree />}
          {selectedMode === 4 && <CriticalSkillsFour />}
          {selectedMode === 5 && <CriticalSkillsFive />}
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
