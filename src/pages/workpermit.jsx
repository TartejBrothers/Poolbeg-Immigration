import React, { useState } from "react";
import "../styles/workpermit.css";
import workpermit from "../images/workpermithome.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactform";
import TalkToUs from "../components/talktous";
import { useNavigate } from "react-router-dom";
export const WorkPermitComponentOne = () => {
  return (
    <div className="workpagecontentelement">
      <h3>Employment Permits in Ireland</h3>
      <p>
        The Department of Enterprise, Trade, and Employment (DETE) oversees all
        employment permit applications in Ireland. This system is designed to
        enable non-EU/EEA nationals to work in Ireland in roles where there is a
        labour shortage and where an employer has been unable to find an Irish or
        EU national for the position. ​<br />
        ​<br />
        Non-EEA nationals currently in Ireland on a Working Holiday
        Authorisation or Van Der Elst Transfer Permission cannot apply for an
        employment permit while in the State and must leave Ireland to make
        their application. ​​
        <br />
        ​<br />
        However, individuals residing in Ireland with a valid visa (Stamp 1, 1G,
        2, 2A, or 3) may apply for an employment permit.
      </p>
    </div>
  );
};
export const WorkPermitComponentTwo = () => {
  return (
    <div className="workpagecontentelement">
      <h3>Types of Employment Permits</h3>
      <p>
        {" "}
        Ireland offers nine different types of employment permits. The most
        common are:
      </p>
      ​
      <ol>
        <li>Critical Skills Employment Permit (CSEP)</li>
        <p>
          Targets highly skilled individuals to encourage permanent residency in
          Ireland. Only occupations listed on the Critical Skills Occupations
          List are eligible under this permit.
        </p>
        ​<li> General Employment Permit (GEP)</li>
        <p>
          Designed for non-EU/EEA nationals who do not qualify for the Critical
          Skills Employment Permit. This permit covers a broader range of
          occupations.
        </p>
        ​<h4>The remaining permits include:</h4>​
        <li>Dependant/Partner/Spouse Employment Permit</li>
        <p>
          Available to spouses and de-facto partners of CSEP holders, allowing
          them to reside in Ireland under Stamp 1 conditions and access the
          labour market without an additional employment permit.
        </p>
        ​<li>Intra-Company Transfer Employment Permit</li>
        <p>
          Facilitates the transfer of senior management, key personnel, or
          trainees from a multinational corporation’s overseas branch to its
          Irish branch.
        </p>
        <li>Contract for Services Employment Permit</li>
        <p>
          For foreign contractors who have secured a contract with an Irish
          company, allowing their non-EEA employees to work in Ireland under
          this contract.
        </p>
        ​<li>Reactivation Employment Permit</li>
        <p>
          Allows non-EEA nationals who previously held a valid employment permit
          but have fallen out of the system or were exploited to return to legal
          employment.
        </p>
        ​<li>Internship Employment Permit</li>
        <p>
          For non-EEA students studying a relevant discipline at a third-level
          institution outside Ireland, to gain work experience in Ireland.
        </p>
        ​<li>Sport and Cultural Employment Permit</li>
        <p>
          Enables non-EEA nationals with specific qualifications, skills, or
          experience to work in the development and operation of sporting and
          cultural activities.
        </p>
        ​<li>Exchange Agreement Employment Permit</li>
        <p>
          Facilitates employment under prescribed or international agreements to
          which Ireland is a party.
        </p>
      </ol>
    </div>
  );
};
export const WorkPermitComponentThree = () => {
  return (
    <div className="workpagecontentelement">
      <h3>Occupation Lists</h3>
      <p>
        DETE issues two types of occupation lists:
        <ul>
          <li>
            <u>Critical Skills Occupations List:</u> Lists jobs eligible for the
            Critical Skills Employment Permit.
          </li>
          <li>
            <u>Ineligible List of Occupations:</u> Lists jobs that are not
            eligible for any Employment Permits in Ireland.
          </li>
        </ul>
        Please note, there is no specific list of eligible occupations for the
        General Employment Permit; all occupations are considered eligible
        unless they are on the Ineligible List of Occupations.
      </p>
    </div>
  );
};

export const WorkPermitComponentFour = () => {
  return (
    <div className="workpagecontentelement">
      <h3>Fees for Employment Permits</h3>
      <table>
        <thead>
          <tr>
            <th>Employment permit category</th>
            <th>First application fee</th>
            <th>Renewal fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>General Employment Permit</td>
            <td>€1,000 up to 24 months and €500 for six months or less</td>
            <td>€750 for six months or less €1,500 up to 36 months</td>
          </tr>
          <tr>
            <td>Critical Skills Employment Permit</td>
            <td>€1,000 up to 24 month</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Dependant / Partner / Spouse Employment Permit</td>
            <td>No fee</td>
            <td>No fee</td>
          </tr>
          <tr>
            <td>Intra-Company Transfer Employment Permit</td>
            <td>€1,000 up to 24 months and €500 for six months or less</td>
            <td>
              €500 for six months or less €1,000 up to 24 months €1,500 up to 36
              months
            </td>
          </tr>
          <tr>
            <td>Contract for Services Employment Permit</td>
            <td>€1,000 up to 24 months and €500 for six months or less</td>
            <td>€750 for six months or less €1,500 up to 36 months</td>
          </tr>
          <tr>
            <td>Reactivation Employment Permit</td>
            <td>€1,000 up to 24 months and €500 for six months or less</td>
            <td>€750 for six months or less €1,500 up to 36 months</td>
          </tr>
          <tr>
            <td>Sport and Cultural Employment Permit</td>
            <td>€1,000 up to 24 months and €500 for six months or less</td>
            <td>€750 for six months or less €1,500 up to 36 months</td>
          </tr>
          <tr>
            <td>Exchange Agreement Employment Permit</td>
            <td>No fee</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Internship Employment Permit</td>
            <td>€1,000 up to 12 months and €500 for six months or less</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default function WorkPermit() {
  const navigateTo = useNavigate();
  const [selectedMode, setSelectedMode] = useState(1);
  return (
    <div className="workpage">
      <Navbar />
      <div className="workpageheader">
        <div className="workheaderleft">
          <h1>Work Permits </h1>
          <p>
            Our consultancy services have successfully secured hundreds of
            Employment Permits for both individuals and organizations. We are
            dedicated to guiding you through every step of the application
            process to ensure full compliance with the necessary requirements.
          </p>
          <button
            className="contactusbutton"
            onClick={() => {
              navigateTo("/contact-us");
            }}
          >
            Know More
          </button>
        </div>
        <div className="workheaderright">
          <img src={workpermit} alt="Work Permit" />
        </div>
      </div>
      <div className="workpagemainbody">
        <div className="workpagecomponentselector">
          <ul>
            <li
              onClick={() => setSelectedMode(1)}
              className={selectedMode === 1 ? "selectedelement" : ""}
            >
              Employment Permits Ireland
            </li>

            <li
              onClick={() => setSelectedMode(2)}
              className={selectedMode === 2 ? "selectedelement" : ""}
            >
              Types of Employment Permits
            </li>
            <li
              onClick={() => setSelectedMode(3)}
              className={selectedMode === 3 ? "selectedelement" : ""}
            >
              Occupation Lists
            </li>
            <li
              onClick={() => setSelectedMode(4)}
              className={selectedMode === 4 ? "selectedelement" : ""}
            >
              Fees for Employment Permits
            </li>
          </ul>
        </div>
        <div className="workpagecontent">
          {selectedMode === 1 && <WorkPermitComponentOne />}
          {selectedMode === 2 && <WorkPermitComponentTwo />}
          {selectedMode === 3 && <WorkPermitComponentThree />}
          {selectedMode === 4 && <WorkPermitComponentFour />}
        </div>
      </div>
      <TalkToUs />
      <ContactForm />
      <Footer />
    </div>
  );
}
