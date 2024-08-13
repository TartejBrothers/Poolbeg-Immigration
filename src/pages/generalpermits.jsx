import React, { useState } from "react";
import "../styles/critical-skills.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import workpermit from "../images/workpermit1.jpeg";
import { useNavigate } from "react-router-dom";
export const CriticalSkillsOne = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>What is the General Employment Permit?</h3>
      <p>
        A General Employment Permit is one of the most common type of work
        permit in Ireland. The permit offers more flexible salary requirements
        and a broader range of occupations than a Critical Skills Employment
        Permit. The General Employment Permit is also the next option for
        employees ineligible to apply for a Critical Skills Employment Permit.
        <br />
        <br />
        General Employment Permits assume all occupations are eligible unless
        otherwise specified. Therefore, all occupations are eligible unless
        excluded under the Ineligible List of Occupations. All occupations on
        the Critical Skills Occupations List are also deemed eligible for a
        General Employment Permit. ​<br />
        <br />
        If you are unsure if you are eligible for an Employment Permit, please
        contact us now for instant help and assistance on your situation.
      </p>
    </div>
  );
};
export const CriticalSkillsTwo = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>
        Who is eligible for <u>General Employment Permit</u>?
      </h2>
      <p>
        If you are from a country not in the European Economic Area (non-EEA),
        the UK, or Switzerland, you must apply for a permit before coming to
        Ireland. You may also have to apply for a visa to come to Ireland.
      </p>
      <p>
        If you already live in Ireland and have a valid Irish Residence Permit
        (IRP) with stamps 1, 1A, 2, 2A, or 3 and have been offered a job in an
        occupation not listed on the ineligible list of occupations, you have
        partially fulfilled the requirements to apply for the General Skills
        Employment Permit.
      </p>

      <h2>
        What jobs are eligible for <u>General Employment Permit</u>?
      </h2>
      <p>
        Before going into more detail, please note that there are two types of
        occupation lists issued by The Department of Enterprise, Trade, and
        Employment (DETE).
      </p>
      <ul>
        <li>
          <b>Critical Skills Occupations List</b> contains a list of jobs{" "}
          <b>eligible</b> for a Critical Skills Employment Permit. However, if
          your occupation appears on that list but your salary does not meet the
          minimum requirement of €38,000, you may apply for a General Employment
          Permit, the minimum salary for General Employment Permit is €34,000
          per annum.
        </li>
        <li>
          <b>Ineligible List of Occupations for employment permits</b> contains
          a list of jobs that are not eligible for any Employment Permits in
          Ireland.
        </li>
      </ul>

      <p>
        The eligible jobs for a General Employment Permit are more
        straightforward than a Critical Skills Employment Permit. Provided that
        the occupation is not within the Ineligible List of Occupations and:
      </p>
      <ul>
        <li>Jobs with a minimum annual salary of €34,000</li>
        <li>
          Posted the relevant qualifications, skills, or experience that are
          required for the employment
        </li>
        <li>
          If you are a Horticulture worker or meat Processor Operator, the
          minimum annual salary is €30,000, and the minimum hourly rate is
          €14.79.
        </li>
        <li>
          If you are a Healthcare Assistant (HCA) or Home Support Worker, the
          minimum annual salary is €27,000
        </li>
      </ul>

      <p>
        If you are unsure if you are eligible for an Employment Permit, please{" "}
        <a href="#">contact us now</a> for instant help and assistance on your
        situation.
      </p>
    </div>
  );
};
export const CriticalSkillsThree = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>
        What are the requirements for employees to apply for{" "}
        <u>General Employment Permit?</u>?
      </h2>
      <p>
        There are certain conditions regarding the qualification and job offer
        that employees need to meet in order to be eligible under the General
        Skills Employment Permit.
      </p>

      <h2>Qualification:</h2>

      <ul>
        <li>
          For jobs with an annual salary of €34,000 or more, a relevant degree
          or higher qualification is required.
        </li>
        <li>
          As a Horticultural worker or meat processor operating, the minimum
          annual salary is €30,000, and the minimum hourly rate is €14.79.
        </li>
        <li>
          As a Healthcare Assistant (HCA) or Home Support Worker, the minimum
          annual salary is €27,000.​
        </li>
      </ul>

      <p>
        If you are unsure if you are eligible for an Employment Permit, please
        contact us now for instant help and assistance on your situation.
      </p>
    </div>
  );
};
export const CriticalSkillsFour = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>
        What do Employers Need to Know About the Critical Skills Employment
        Permit?{" "}
      </h2>
      <p>
        Applications will only be accepted from employers that are registered
        with the Revenue Commissioners and with the Companies Registration
        Office/Registry of Friendly Societies, if applicable, and which are
        currently trading in the State. ​<br />​<br />
        That an employer–employee relationship will exist in that the
        prospective employee concerned will be employed, salaried and paid
        directly by the employer. ​<br />
        ​<br />
        An employment permit will not be issued unless at the time of
        application, at least 50% of the employees in a firm are EEA nationals
        (50:50 rule). However, if the company is a start-up with no more than
        two years of operation, this restriction could be waived. ​<br />​<br />
        ​ Need immediate help and professional advice with your situation?{" "}
        <a href="#">Contact us now.</a>
      </p>
    </div>
  );
};
export const CriticalSkillsFive = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>What are the benefits of the Critical Skills Employment Permit?</h2>
      <p>
        The Critical Skills Employment Permit provides permit holders and
        companies with an array of benefits, including:
      </p>
      <ul>
        <li>
          Critical Skills Employment Permit holders can take up permanent
          residence (Stamp 4) in Ireland after two years of employment.
        </li>
        ​
        <li>
          Critical Skills Employment Permit holders can apply for immediate
          family reunification.​
        </li>
        ​
        <li>
          Spouses/De facto partners who come to Ireland through the unification
          scheme can request the right to work for any employer.
        </li>
        ​
        <li>
          Employers are not required to complete a labour market test, which
          shortens the recruitment process and lowers the administrative burden
          and cost of overseas hiring.
        </li>
      </ul>
    </div>
  );
};
export const CriticalSkillsSix = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>
        What are the Application Procedure for{" "}
        <u>Critical Skills Employment Permit in Ireland</u>?
      </h2>
      <p>
        An application for any employment permit must be received at least 12
        weeks before the proposed employment start date. The following are three
        main stages of the Critical Skills Employment Permit application:
      </p>
      <ol>
        <li>Complete the application form with the required documentation.</li>
        <li>The application is placed in the processing queue.</li>
        <li>
          An official with decision-making authority considers the application.
          The official may request further information if they deem it to be
          necessary to reach a decision.
        </li>
      </ol>

      <p>
        The application form must include a full description of the employee’s
        proposed employment, remuneration (excluding bonuses) and start date.
        Information on the educational qualifications, skills, or experience
        required for the job will need to be included.
      </p>

      <p>
        Does it sound like a long and complicated process? That’s why Future
        Direct is here for you! With our exceptional service in this area, we
        are committed to working closely with you throughout the application
        process and ensuring compliance with every requirement.
      </p>

      <p>
        <a href="#">Contact us now</a> for immediate help and professional
        advice with your situation.
      </p>
    </div>
  );
};
export const CriticalSkillsSeven = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>
        What is the processing time for the Critical Skills Employment Permit in
        Ireland?
      </h2>
      <p>
        The current processing time for a critical skill employment permit
        application is within 5 to 6 weeks. However, if your employer is a
        trusted partner, the process will be shortened to 1 to 2 weeks. ​<br />
        <br />
        We understand that a long waiting time is always frustrating and
        anxious. Future Direct is committed to following up closely with the
        department to ensure a faster turnaround time in each case. ​<br />
        <br />
        Need help with your work permit application? Contact us now for instant
        help and assistance on your situation. Future Direct is here to take the
        stress out of you and ensure you obtain your work permit without any
        concerns!
      </p>
    </div>
  );
};
export default function GeneralPemits() {
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
            Our Employment Permit Consultancy Service has secured hundreds of
            Critical Skills Employment Permits and General Employment Permits
            for our clients. We work closely with you from start to finish to
            ensure the right processes are followed.
          </p>
          <button className="contactusbutton">Know More</button>
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
      <Footer />
    </div>
  );
}
