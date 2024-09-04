import React from "react";
import "../styles/critical-skills.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import workpermit from "../images/workpermit1.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";

export const CriticalSkillOccupation = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Critical Skills Occupations List</h2>

      <ul>
        <li>
          <strong>List Source:</strong>Set out in Schedule 3 of the Employment
          Permits (Amendment) (No 2) Regulations 2022.
        </li>

        <li>
          <strong>Effective Date:</strong> 14 June 2022.
        </li>
      </ul>
      <div className="workpagecontentelement">
        <table>
          <thead>
            <tr>
              <th>Employment Category</th>
              <th>Employments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>(112) Production Managers and Directors</td>
              <td>(1122) Site Manager</td>
            </tr>
            <tr>
              <td>(113) ICT Professionals</td>
              <td>
                (1136) Information technology and telecommunications directors
              </td>
            </tr>
            <tr>
              <td>(118) Health and Social Services Managers and Directors</td>
              <td>
                (1181) Senior health services and public health managers and
                directors
              </td>
            </tr>
            <tr>
              <td>
                (121) Managers and Proprietors in Agriculture Related Services
              </td>
              <td>
                (1213) Professional Forester
                <br />
                Resource modelling, earth observation and data analyst
              </td>
            </tr>
            <tr>
              <td>(211) Natural and Social Science Professionals</td>
              <td>
                (2111) Chemical scientists in manufacturing (including food &
                beverages, medical devices), product development, analytical
                development, clinical co-vigilance, or biotechnology or related
                and relevant specialist skills, qualifications or experience.
                <br />
                (2112) Medical laboratory scientists
                <br />
                Biological scientists and biochemists in manufacturing
                (including food & beverages, medical devices), product
                development, analytical development, clinical co-vigilance, or
                biotechnology or related and relevant specialist skills,
                qualifications or experience.
                <br />
                (2113) Physical scientists in manufacturing (including food &
                beverages, medical devices), product development, analytical
                development, clinical co-vigilance, or biotechnology or related
                and relevant specialist skills, qualifications or experience.
                <br />
                Meteorologist
                <br />
                Operational Forecaster
              </td>
            </tr>
            <tr>
              <td>(212) Engineering Professionals</td>
              <td>
                (2121) Civil Engineers
                <br />
                Structural Engineers and Site Engineers
                <br />
                (2122) Mechanical engineers
                <br />
                (2123) Electrical engineers
                <br />
                (2124) Electronics engineers specialising in:
                <ul>
                  <li>
                    Chip design, test engineering, or application engineering,
                    or
                  </li>
                  <li>Process automation engineering, or</li>
                  <li>Power generation, transmission and distribution, or</li>
                  <li>
                    Related and relevant specialist skills, qualifications or
                    experience
                  </li>
                </ul>
                (2126) Design and development engineers specialising in:
                <ul>
                  <li>
                    Quality control, or validation and regulation engineering
                    (high tech industry; food and beverages), or
                  </li>
                  <li>
                    Chip design, test engineering, or application engineering,
                    or
                  </li>
                  <li>Process automation engineering, or</li>
                  <li>Power generation, transmission and distribution, or</li>
                  <li>
                    Related and relevant specialist skills, qualifications or
                    experience
                  </li>
                </ul>
                (2127) Production and process engineers specialising in:
                <ul>
                  <li>
                    Quality control, or validation and regulation engineering
                    (high tech industry; food and beverages), or
                  </li>
                  <li>Chemical process engineering, or</li>
                  <li>Process automation engineering, or</li>
                  <li>Power generation, transmission and distribution, or</li>
                  <li>
                    Related and relevant specialist skills, qualifications or
                    experience
                  </li>
                </ul>
                Chemical Engineer
                <br />
                (2129) Material scientists
                <br />
                Setting Out Engineer
                <br />
                Façade Designer
                <br />
                Project Engineer
              </td>
            </tr>

            <tr>
              <td>(112) Production Managers and Directors</td>
              <td>
                <ul>
                  <li>(1122) Site Manager</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>(113) ICT Professionals</td>
              <td>
                <ul>
                  <li>
                    (1136) Information technology and telecommunications
                    directors
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>(118) Health and Social Services Managers and Directors</td>
              <td>
                <ul>
                  <li>
                    (1181) Senior health services and public health managers and
                    directors
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                (121) Managers and Proprietors in Agriculture Related Services
              </td>
              <td>
                <ul>
                  <li>(1213) Professional Forester</li>
                  <li>
                    Resource modelling, earth observation and data analyst
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>(211) Natural and Social Science Professionals</td>
              <td>
                <ul>
                  <li>(2111) Chemical scientists in manufacturing</li>
                  <li>(2112) Medical laboratory scientists</li>
                  <li>(2113) Physical scientists in manufacturing</li>
                  <li>Meteorologist</li>
                  <li>Operational Forecaster</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>(212) Engineering Professionals</td>
              <td>
                <ul>
                  <li>(2121) Civil Engineers</li>
                  <li>(2122) Mechanical engineers</li>
                  <li>(2123) Electrical engineers</li>
                  <li>(2124) Electronics engineers</li>
                  <li>(2126) Design and development engineers</li>
                  <li>(2127) Production and process engineers</li>
                  <li>Chemical Engineer</li>
                  <li>(2129) Material scientists</li>
                  <li>Setting Out Engineer</li>
                  <li>Façade Designer</li>
                  <li>Project Engineer</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                (213) Information Technology and Telecommunications
                Professionals
              </td>
              <td>
                <ul>
                  <li>(2133) IT Specialist managers</li>
                  <li>BIM Manager</li>
                  <li>(2134) IT project and programme managers</li>
                  <li>
                    (2135) IT business analysts, architects and systems
                    designers
                  </li>
                  <li>
                    (2136) Programmers and software development professionals
                  </li>
                  <li>(2137) Web design and development professionals</li>
                  <li>
                    (2139) All other ICT professionals not elsewhere classified
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>(221) Health Professionals</td>
              <td>
                <ul>
                  <li>(2211) Medical practitioners</li>
                  <li>(2212) Psychologist</li>
                  <li>(2213) Industrial Pharmacists / Pharmacist</li>
                  <li>(2217) Radiographers</li>
                  <li>Radiation therapists</li>
                  <li>Vascular technologists / physiologists</li>
                  <li>Gastro Intestinal technologists / physiologists</li>
                  <li>(2218) Podiatrist/Chiropodist</li>
                  <li>(2219) Audiologists</li>
                  <li>Perfusionists</li>
                  <li>Dietician</li>
                  <li>Cardiac Physiologist</li>
                  <li>Medical Scientist</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function LabourPermits() {
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
          <h1>Critical Skills Occupations List</h1>
          <p>
            The Critical Skills Occupations List identifies high-demand
            professions in Ireland that require specialized skills and
            qualifications. If your job is on this list and meets the relevant
            requirements, you may be eligible for a Critical Skills Employment
            Permit.
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
        <div className="criticalskillscontent">
          <CriticalSkillOccupation />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
