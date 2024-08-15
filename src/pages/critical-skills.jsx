import React, { useState } from "react";
import "../styles/critical-skills.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import workpermit from "../images/workpermit1.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";
export const CriticalSkillsOne = () => {
  const navigate = useNavigate();
  const navigatetoContact = () => {
    navigate("/contact-us");
  };
  return (
    <div className="criticalskillsbodyelement">
      <h4> What is the Critical Skills Employment Permit?</h4>
      <p>
        The Critical Skills Employment Permit is one of the most coveted permits
        in Ireland. It is designed to attract highly skilled professionals to
        the Irish labor market, with the aim of encouraging them to settle
        permanently in Ireland.
        <br />
        <br />
        Occupations eligible for this permit are deemed crucial for Ireland's
        economic growth, are in high demand, and face significant supply
        shortages in the labor market. The eligible jobs are listed in the
        Critical Skills Occupations List.
        <br />
        <br />
        Unlike other permits, the Critical Skills Employment Permit does not
        require a Labour Market Needs Test.
        <br />
        <br />
        This permit has replaced the Green Card type permit and remains highly
        sought after.
      </p>
    </div>
  );
};
export const CriticalSkillsTwo = () => {
  const navigate = useNavigate();
  const navigatetoContact = () => {
    navigate("/contact-us");
  };

  return (
    <div className="criticalskillsbodyelement">
      <h2>Who qualifies for a Critical Skills Employment Permit?</h2>
      <p>
        If you are from a non-EEA country, the UK, or Switzerland, you must
        apply for the permit before arriving in Ireland. You may also need to
        apply for a visa to enter Ireland.
      </p>
      <p>
        If you are already in Ireland with a valid Irish Residence Permit (IRP)
        with stamps 1, 1A, 2, 2A, or 3, and you have a job offer in an
        occupation listed on the Critical Skills Occupations List, you are
        eligible to apply for the Critical Skills Employment Permit.
      </p>

      <h2>Eligible Occupations:</h2>
      <p>
        The Department of Enterprise, Trade, and Employment (DETE) issues two
        types of occupation lists:
      </p>
      <ul>
        <li>
          <b>Critical Skills Occupations List:</b> Contains jobs eligible for
          the Critical Skills Employment Permit.
        </li>
        <li>
          <b>Ineligible List of Occupations:</b> Lists jobs that are not
          eligible for any Employment Permits in Ireland, including both
          Critical Skills and General Employment Permits.
        </li>
      </ul>

      <h4>
        Eligibility for the Critical Skills Employment Permit is determined by
        the type of occupation and proposed salary. Generally, there are two
        pathways:
      </h4>

      <h5>Pathway 1:</h5>
      <ul>
        <li>The job must be on the Critical Skills Occupations List.</li>
        <li>
          The job must offer a minimum salary of <b>€38,000 per annum</b>{" "}
          (€44,000 from 2025).
        </li>
        <li>
          The job must be for at least <b>2 years</b> or permanent.
        </li>
        <li>
          The employee must have a relevant degree or higher qualification.
        </li>
      </ul>

      <h5>Pathway 2:</h5>
      <ul>
        <li>
          Occupations with a minimum salary of <b>€64,000 per annum</b>, not on
          the Ineligible List of Occupations, and not contrary to public
          interest.
        </li>
        <li>
          The employee must have a relevant degree or equivalent experience.
        </li>
        <li>
          The job must be for at least <b>2 years</b> or permanent.
        </li>
      </ul>

      <h4>Employer Criteria:</h4>
      <ul>
        <li>
          Applications are only accepted from employers who are registered with
          the Revenue Commissioners and the Companies Registration
          Office/Registry of Friendly Societies, if applicable.
        </li>
        <li>Employers must be currently trading in Ireland.</li>
        <li>
          Employers must have at least 50% of their employees as EEA nationals
          (the 50:50 rule). This requirement may be waived if the company is a
          start-up with no more than two years of operation.
        </li>
      </ul>

      <p>
        <a onClick={() => navigatetoContact()}>Contact us now</a> for immediate
        help and professional advice with your situation.
      </p>
    </div>
  );
};
export const CriticalSkillsThree = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Employee Requirements:</h2>
      <ol>
        <li>
          Have a job offer from a Revenue Commissioners-registered and trading
          company.
        </li>
        <li>Have a job offer of at least two years.</li>
        <li>Be directly employed and paid by the employer in Ireland.</li>
        <li>
          Meet educational and experience requirements depending on the job type
          and salary.
        </li>
        <li>
          For salaries of <b>€38,000</b> or more, a relevant degree is required.
        </li>
        <li>
          For salaries of <b>€64,000</b> or more, a relevant degree or
          equivalent experience is required.
        </li>
        <li>
          For nurses and midwives, a qualification recognized by the Nursing and
          Midwifery Board of Ireland (NMBI) is necessary.
        </li>
      </ol>
    </div>
  );
};
export const CriticalSkillsFour = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Employer Responsibilities:</h2>
      <ol>
        <li>
          Ensure that at least 50% of their employees are EEA nationals (unless
          the company is a start-up).
        </li>
        <li>
          Be registered with the necessary authorities and currently trading in
          Ireland.
        </li>
      </ol>

      <p>
        Need immediate help and professional advice with your situation?{" "}
        <a href="#">Contact us now.</a>
      </p>
    </div>
  );
};
export const CriticalSkillsFive = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Benefits:</h2>
      <ul>
        <li>
          Critical Skills Employment Permit holders can apply for permanent
          residence (Stamp 4) in Ireland after two years of employment.
        </li>
        <li>
          Critical Skills Employment Permit holders can apply for immediate
          family reunification.
        </li>
        <li>
          Spouses and de facto partners of permit holders can work for any
          employer.
        </li>
        <li>
          Employers are not required to conduct a labor market test,
          streamlining the recruitment process and reducing the administrative
          burden and costs associated with overseas hiring.
        </li>
      </ul>
    </div>
  );
};
export const CriticalSkillsSix = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Application Procedure:</h2>
      <p>
        Applications for the Critical Skills Employment Permit must be submitted
        at least 12 weeks before the proposed employment start date. The
        application process involves:
      </p>
      <ol>
        <li>
          Completing the application form with the required documentation.
        </li>
        <li>The application entering the processing queue.</li>
        <li>
          Review and decision by an official, who may request additional
          information if needed.
        </li>
      </ol>

      <p>
        The application must include details about the job offer, remuneration
        (excluding bonuses), start date, and the employee’s qualifications,
        skills, or experience.
      </p>

      <p>
        <a href="#">Contact us now</a> for immediate help and professional
        advice with your situation.
      </p>
    </div>
  );
};
export const CriticalSkillsSeven = () => {
  const navigate = useNavigate();
  const navigatetoContact = () => {
    navigate("/contact-us");
  };
  return (
    <div className="criticalskillsbodyelement">
      <h2>Processing Time:</h2>
      <p>
        Current processing times for a Critical Skills Employment Permit are 4
        to 6 weeks. However, if the employer is a trusted partner, this can be
        reduced to 1 to 2 weeks.
      </p>
      <p>
        We understand that delays can be stressful. Future Direct is committed
        to ensuring a faster turnaround time and providing exceptional support
        throughout the process.
      </p>
      <p>
        Need immediate help and professional advice?{" "}
        <a onClick={() => navigatetoContact()}>Contact us now.</a> for expert
        assistance with your Critical Skills Employment Permit application.
      </p>
    </div>
  );
};

export default function CriticalSkills() {
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
          <h1>Critical Skills Employment Permit</h1>
          <p>
            Our Employment Permit Consultancy Service has successfully secured
            hundreds of Critical Skills Employment Permits for clients. We
            partner with you from start to finish to ensure the correct
            procedures are followed.
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
              Employees Requirements
            </li>
            <li
              onClick={() => setSelectedMode(4)}
              className={selectedMode === 4 ? "selectedelement" : ""}
            >
              Employers Requirements
            </li>
            <li
              onClick={() => setSelectedMode(5)}
              className={selectedMode === 5 ? "selectedelement" : ""}
            >
              Benefits
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
