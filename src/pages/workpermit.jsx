import React, { useState } from "react";
import "../styles/workpermit.css";
import workpermit from "../images/workpermithome.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactform";

export const WorkPermitComponentOne = () => {
  return (
    <div className="workpagecontentelement">
      <h3>Employment Permits in Ireland</h3>
      <p>
        The Department of Enterprise, Trade and Employment (DETE) in Ireland
        processes all employment permit applications. The employment permit
        system was developed to allow non-EU/non-EEA nationals to work in
        Ireland in jobs with a labour shortage in the market and where an
        employer needs help finding an Irish or EU national to file for the
        role. ​<br />
        ​<br />
        Non-EEA nationals currently in Ireland on a Working Holiday
        Authorisation or a Van Der Elst Transfer Permission cannot apply for an
        employment permit from within the State and must leave the State should
        they wish to apply for a permit. ​​
        <br />
        ​<br />
        Persons resident in the State on a valid visa (Stamp 1, 1G, 2, 2A or 3)
        may apply for an employment permit.
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
        There are nine different types of employment permits in Ireland. The
        most common employment permits are:
      </p>
      ​
      <ol>
        <li>Critical Skills Employment Permit (CSEP)</li>
        <p>
          Critical Skills Employment Permit targets highly skilled people to
          encourage them to reside in Ireland permanently. Only the Occupations
          included on the Critical Skills Occupations List are catered under
          this type of employment permit.​ Learn more
        </p>
        ​<li> General Employment Permit (GEP)</li>
        <p>
          Critical Skills Employment Permit targets highly skilled people to
          encourage them to reside in Ireland permanently. Only the Occupations
          included on the Critical Skills Occupations List are catered under
          this type of employment permit.​ Learn more
        </p>
        ​<h4>The other employment permits are:</h4>​
        <li>Dependant/Partner/Spouse Employment Permit</li>
        <p>
          Spouses and de-facto partners of CSEP holders will be granted
          eligibility under this permit. The permit allows the holder to reside
          in Ireland under Stamp 1 Conditions, providing direct access to the
          labour market without needing an employment permit. Learn more
        </p>
        ​<li>Intra-Company Transfer Employment Permit</li>
        <p>
          The Intra-Company Transfer Employment Permit is designed to facilitate
          the transfer of senior management, key personnel or trainees who are
          foreign nationals from an overseas branch of a multinational
          corporation to its Irish branch. Learn more ​
        </p>
        <li>Contract for Services Employment Permit</li>
        <p>
          Contract for Services Employment Permit is designed for situations
          where a foreign undertaking (Contractor) has won a contract to provide
          services to an Irish company (Relevant Person) on a contract for
          services basis and to facilitate the transfer of their non-EEA
          employees to work on the Irish contract in Ireland. Learn more
        </p>
        ​<li>Reactivation Employment Permit</li>
        <p>
          A reactivation Employment Permit is designed to permit a non-EEA
          national who entered the State on a valid Employment Permit but fell
          out of the system through no fault of their own or who has been badly
          treated or exploited in the workplace to work legally again. Learn
          more
        </p>
        ​<li>Internship Employment Permit</li>
        <p>
          Internship Employment Permit is designed to facilitate employment in
          the State of non-EEA nationals who are full-time students studying in
          a discipline relevant to the occupations included on the Critical
          Skills Occupations List and enrolled at a third-level institution
          outside the State to gain work experience.{" "}
        </p>
        ​<li>Sport and Cultural Employment Permit</li>
        <p>
          The Sport and Cultural Employment Permit is designed to facilitate
          employment in the State of non-EEA nationals with the relevant
          qualifications, skills, experience or knowledge for the development,
          operation and capacity of sporting and cultural activities. Learn more
        </p>
        ​<li>Exchange Agreement Employment Permit</li>
        <p>
          The Exchange Agreement Employment Permit is designed to facilitate
          employment in the State of non-EEA nationals pursuant to prescribed
          agreements or other international agreements to which the State is a
          party.
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
        The Department of Enterprise, Trade, and Employment(DETE) issues two
        types of occupation lists. ​​
        <ul>
          <li>
            <u>Critical Skills Occupations List</u> contains a list of jobs{" "}
            <b>eligible</b> for a Critical Skills Employment Permit.
          </li>
          <li>
            <u>Ineligible List of Occupations</u> contains a list of jobs that
            are <b>not eligible</b> for any Employment Permits in Ireland.
          </li>
        </ul>
        ​ Please note that there is no list of eligible occupations list which
        you can take up with the General Employment Permit. All occupations are
        considered eligible unless they are on the list of Ineligible Lists of
        Employment.
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
  const [selectedMode, setSelectedMode] = useState(1);
  return (
    <div className="workpage">
      <Navbar />
      <div className="workpageheader">
        <div className="workheaderleft">
          <h1>Work Permits Ireland</h1>
          <p>
            Our consultancy services have secured hundreds of Employment Permits
            for individuals and organisations. We are committed to working
            closely with you throughout the application process to ensure
            compliance regarding the necessary steps.
          </p>
          <button className="contactusbutton">Know More</button>
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
      <ContactForm />
      <Footer />
    </div>
  );
}
