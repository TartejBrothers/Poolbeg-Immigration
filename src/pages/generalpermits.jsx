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
      <h3>What is the General Employment Permit?</h3>
      <p>
        The General Employment Permit is a common work permit in Ireland
        offering more flexible salary requirements and a wider range of eligible
        occupations compared to the Critical Skills Employment Permit. It is an
        ideal option for employees who do not qualify for a Critical Skills
        Employment Permit.
      </p>
      <p>
        This permit generally allows all occupations unless specifically
        excluded in the Ineligible List of Occupations. Occupations listed on
        the Critical Skills Occupations List are also eligible for this permit.
      </p>
      <p>
        If you're uncertain about your eligibility for an Employment Permit,
        contact us for immediate assistance.
      </p>
    </div>
  );
};

export const CriticalSkillsTwo = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Who can apply for a General Employment Permit?</h2>
      <p>
        If you are from outside the European Economic Area (non-EEA), the UK, or
        Switzerland, you must apply for a permit before arriving in Ireland. You
        might also need a visa to enter Ireland.
      </p>
      <p>
        If you are already in Ireland with a valid Irish Residence Permit (IRP)
        with stamps 1, 1A, 2, 2A, or 3 and have a job offer in a non-excluded
        occupation, you might meet the preliminary requirements for the General
        Employment Permit.
      </p>
      <h2>Which jobs qualify for a General Employment Permit?</h2>
      <p>
        The eligibility for a General Employment Permit depends on two main
        lists issued by the Department of Enterprise, Trade, and Employment
        (DETE):
      </p>
      <ul>
        <li>
          <b>Critical Skills Occupations List</b>: If your job is on this list
          but your salary does not meet the €38,000 minimum, you may apply for a
          General Employment Permit, where the minimum salary is €34,000
          annually.
        </li>
        <li>
          <b>Ineligible List of Occupations</b>: Jobs on this list are not
          eligible for any Employment Permits in Ireland.
        </li>
      </ul>
      <p>Generally, jobs are eligible if they:</p>
      <ul>
        <li>Offer a minimum annual salary of €34,000.</li>
        <li>Require relevant qualifications, skills, or experience.</li>
        <li>
          For horticulture or meat processing roles, the minimum salary is
          €30,000, with a minimum hourly rate of €14.79.
        </li>
        <li>
          For Healthcare Assistants (HCA) or Home Support Workers, the minimum
          annual salary is €27,000.
        </li>
      </ul>
      <p>
        For more information on your eligibility, contact us for prompt support.
      </p>
    </div>
  );
};

export const CriticalSkillsThree = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>What do employees need to apply for a General Employment Permit?</h2>
      <p>
        Employees must meet specific qualifications and job offer conditions:
      </p>
      <ul>
        <li>
          For positions with an annual salary of €34,000 or more, a relevant
          degree or higher qualification is required.
        </li>
        <li>
          For horticulture or meat processing roles, the minimum annual salary
          is €30,000, and the minimum hourly rate is €14.79.
        </li>
        <li>
          For HCAs or Home Support Workers, the minimum annual salary is
          €27,000.
        </li>
      </ul>
      <p>
        For help determining your eligibility, reach out to us for immediate
        assistance.
      </p>
    </div>
  );
};

export const CriticalSkillsFour = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>
        What do employers need to know about the General Employment Permit?
      </h2>
      <p>Employers must:</p>
      <ul>
        <li>
          Be registered with the Revenue Commissioners and the Companies
          Registration Office and actively trading in Ireland.
        </li>
        <li>Directly employ and pay the employee.</li>
        <li>
          Employ at least 50% EEA nationals, unless the company is a start-up
          with under two years of operation.
        </li>
      </ul>
      <p>A Labour Market Needs Test is required unless:</p>
      <ul>
        <li>The occupation is on the Critical Skills Occupations List.</li>
        <li>The annual salary exceeds €64,000.</li>
      </ul>
      <p>
        For clarification on employer requirements, contact us for expert
        advice.
      </p>
    </div>
  );
};

export const CriticalSkillsFive = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>What are the advantages of the General Employment Permit?</h2>
      <p>
        Holders can apply for permanent residence (Stamp 4) in Ireland after
        five years of employment.
      </p>
      <p>
        Family reunification can be applied for after one year of employment.
      </p>
      <p>
        For assistance with your work permit application, contact us. Career
        Ireland is dedicated to ensuring a smooth and stress-free process.
      </p>
    </div>
  );
};

export const CriticalSkillsSix = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>
        What is the application procedure for a General Employment Permit in
        Ireland?
      </h2>
      <p>
        Applications must be submitted at least 12 weeks before the intended
        employment start date. The process includes:
      </p>
      <ul>
        <li>
          Completing the application form with required documentation, including
          a Labour Market Needs Test.
        </li>
        <li>Application review and queuing.</li>
        <li>
          Decision-making by an official, who may request additional
          information.
        </li>
      </ul>
      <p>
        The permit is granted for a maximum of 24 months and must be renewed
        within 16 weeks of expiration.
      </p>
      <p>
        For help with your work permit application, contact us for immediate
        assistance. Career Ireland is here to ensure a hassle-free process.
      </p>
    </div>
  );
};

export const CriticalSkillsSeven = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>
        What is the processing time for the General Employment Permit in
        Ireland?
      </h2>
      <p>
        Processing typically takes 5 to 6 weeks, but for trusted partners, it
        can be expedited to 1 to 2 weeks.
      </p>
      <p>
        Career Ireland is committed to closely following up with the department
        to speed up your application.
      </p>
      <p>
        For quick assistance with your work permit application, contact us.
        Career Ireland is dedicated to a seamless experience for you.
      </p>
    </div>
  );
};

export default function GeneralPermits() {
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
          <h1>General Employment Permit</h1>
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
              Introduction
            </li>

            <li
              onClick={() => setSelectedMode(2)}
              className={selectedMode === 2 ? "selectedelement" : ""}
            >
              Criteria of Eligibility
            </li>
            <li
              onClick={() => setSelectedMode(3)}
              className={selectedMode === 3 ? "selectedelement" : ""}
            >
              Employee Criteria
            </li>
            <li
              onClick={() => setSelectedMode(4)}
              className={selectedMode === 4 ? "selectedelement" : ""}
            >
              Employer Criteria
            </li>
            <li
              onClick={() => setSelectedMode(5)}
              className={selectedMode === 5 ? "selectedelement" : ""}
            >
              Advantages
            </li>
            <li
              onClick={() => setSelectedMode(6)}
              className={selectedMode === 6 ? "selectedelement" : ""}
            >
              Application Procedure
            </li>
            <li
              onClick={() => setSelectedMode(7)}
              className={selectedMode === 7 ? "selectedelement" : ""}
            >
              Processing Time
            </li>
          </ul>
        </div>
        <div className="criticalskillscontent">
          {selectedMode === 1 && <CriticalSkillsOne />}
          {selectedMode === 2 && <CriticalSkillsTwo />}
          {selectedMode === 3 && <CriticalSkillsThree />}
          {selectedMode === 4 && <CriticalSkillsFour />}
          {selectedMode === 5 && <CriticalSkillsFive />}
          {selectedMode === 6 && <CriticalSkillsSix />}
          {selectedMode === 7 && <CriticalSkillsSeven />}
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
