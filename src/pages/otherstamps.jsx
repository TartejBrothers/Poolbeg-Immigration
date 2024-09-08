import React, { useState } from "react";
import "../styles/immigrationpage.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import immigrationImage from "../images/immigrationpages.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";

const Stamp0 = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Stamp 0</h3>
      <p>
        Stamp 0 indicates permission to stay in Ireland for a temporary period,
        subject to conditions.
      </p>
      <h4>Summary of conditions</h4>
      <ul>
        <li>
          You must be of independent means, fully financially self-sufficient.
        </li>
        <li>
          You cannot receive any benefits or use publicly funded services, like
          public hospitals.
        </li>
        <li>You must have private medical insurance.</li>
        <li>
          You must not work or engage in any business, trade, or profession
          unless specified in a letter of permission from Immigration Service
          Delivery.
        </li>
      </ul>
      <h4>Examples when used</h4>
      <ul>
        <li>Retire to or live in Ireland as a person of independent means.</li>
        <li>Be a visiting academic at an Irish university or college.</li>
        <li>
          Live in Ireland as the elderly, dependent relative of an Irish
          National, or a non-EU/EEA or Swiss citizen.
        </li>
      </ul>
    </div>
  );
};

const Stamp1 = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Stamp 1</h3>
      <p>
        Stamp 1 indicates permission to work or operate a business in Ireland,
        subject to conditions.
      </p>
      <h4>Summary of conditions</h4>
      <ul>
        <li>
          You must not start a job or enter employment unless you or your
          employer has obtained an employment permit for you, or if your letter
          of permission clearly states you do not require an employment permit.
        </li>
        <li>
          You cannot engage in any business, trade, or profession unless
          specified in a letter of permission from ISD.
        </li>
        <li>
          Stamp 1 is reckonable as residence when applying for citizenship by
          naturalisation.
        </li>
      </ul>
      <h4>Examples when used</h4>
      <ul>
        <li>Work here based on an employment permit.</li>
        <li>Operate a business here.</li>
        <li>
          Work here based on a Working Holiday Authorisation (not renewable or
          variable).
        </li>
      </ul>
    </div>
  );
};

const Stamp1H = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Stamp 1H</h3>
      <p>
        Stamp 1H indicates permission for doctors in receipt of a two-year
        General Employment Permit to work as an NCHD (Non Consultant Hospital
        Doctor) in any public hospital or health care facility during the
        two-year validity period of their permit.
      </p>
      <h4>Summary of conditions</h4>
      <ul>
        <li>
          Doctors will still only have a six-month contract with the initial
          hospital, which must be provided at registration/renewal stage.
        </li>
        <li>
          Doctors are permitted to move to a different hospital within the HSE
          group, subject to valid contracts monitored by DETE.
        </li>
        <li>
          Stamp 1H is reckonable as residence when applying for citizenship by
          naturalisation.
        </li>
      </ul>
      <h4>Examples when used</h4>
      <ul>
        <li>
          Work as a doctor in receipt of a two-year General Employment Permit as
          an NCHD in any public hospital or health care facility during the
          permit's validity period.
        </li>
      </ul>
    </div>
  );
};

const Stamp1A = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Stamp 1A</h3>
      <p>
        Stamp 1A indicates permission to participate in full-time, paid
        accountancy training for a specified period, subject to conditions.
      </p>
      <h4>Summary of conditions</h4>
      <ul>
        <li>
          You must not engage in any other business, trade, or profession unless
          specified in a letter of permission from ISD.
        </li>
        <li>
          This permission is time-bound, and you must complete your accountancy
          course within 4 years.
        </li>
        <li>
          If you wish to stay in Ireland past the expiry date of your
          immigration permission, you must apply to renew your permission and
          registration before they expire, or apply for an alternative
          permission, such as an employment permit.
        </li>
      </ul>
      <h4>Examples when used</h4>
      <ul>
        <li>
          Study accountancy as a trainee and be employed as a trainee
          accountant.
        </li>
      </ul>
    </div>
  );
};

const Stamp2 = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Stamp 2</h3>
      <p>
        Stamp 2 indicates permission to study a full-time course on the official
        Interim List of Eligible Programmes (ILEP) for a specified period,
        subject to conditions.
      </p>
      <h4>Summary of conditions</h4>
      <ul>
        <li>
          You cannot receive any benefits or use publicly funded services unless
          you have an entitlement via other means.
        </li>
        <li>
          You can work in casual employment for a maximum of 20 hours per week
          during school term and 40 hours per week during holidays.
        </li>
        <li>You must not engage in any other business or trade.</li>
        <li>
          Students can only study in the State for a maximum of 7 years and must
          show progression each year in their course.
        </li>
        <li>
          English language students must have an attendance of at least 85%.
        </li>
      </ul>
      <h4>Examples when used</h4>
      <ul>
        <li>
          Study English language, higher national diploma, degree
          (undergraduate), master’s degree (postgraduate), PhD, or other
          eligible courses.
        </li>
      </ul>
    </div>
  );
};

const Stamp2A = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Stamp 2A</h3>
      <p>
        Stamp 2A indicates permission for full-time study in Ireland for a
        course that is not on the official Interim List of Eligible Programmes
        (ILEP), for a specified period. It may also be granted to spouses of
        certain financially independent students in limited circumstances.
      </p>
      <h4>Summary of conditions</h4>
      <ul>
        <li>
          You cannot receive any benefits or use publicly funded services, such
          as public hospitals.
        </li>
        <li>You must have private medical insurance.</li>
        <li>
          You must not work or engage in any business, trade, or profession.
        </li>
        <li>
          If you wish to stay in Ireland past the expiry date of your
          immigration permission, you must apply to renew your permission and
          registration before they expire.
        </li>
      </ul>
      <h4>Examples when used</h4>
      <ul>
        <li>
          Semester abroad at an Irish university/college, study at a private
          secondary school in Ireland, or be the spouse of a financially
          independent student.
        </li>
      </ul>
    </div>
  );
};

const Stamp3 = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Stamp 3</h3>
      <p>
        Stamp 3 indicates permission to stay in Ireland for a specified period,
        subject to conditions.
      </p>
      <h4>Summary of conditions</h4>
      <ul>
        <li>
          You cannot work or engage in any business, trade, or profession.
        </li>
        <li>
          If you wish to stay in Ireland past the expiry date of your
          immigration permission, you must apply to renew your permission and
          registration before they expire.
        </li>
      </ul>
      <h4>Examples when used</h4>
      <ul>
        <li>
          Volunteer with a charity or non-profit organisation, be a minister of
          religion, or join your non-EEA/EU/Swiss spouse/civil partner or family
          member who is here based on a work permit.
        </li>
      </ul>
    </div>
  );
};

const Stamp4D = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Stamp 4D</h3>
      <p>
        Stamp 4D is for eligible non-EEA family members of UK citizens who are
        seeking to reside in Ireland after 01/01/2021. For further information,
        please read the Brexit policy document.
      </p>
    </div>
  );
};

export default function OtherStamps() {
  const [selectedMode, setSelectedMode] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="criticalskillsmain">
      <Navbar />
      <div className="workpageheader immigrationpageheader">
        <div className="workheaderleft">
          <p
            onClick={() => {
              navigate("/"); // Navigate to homepage or desired route
            }}
          >
            &lt; Back
          </p>
          <h1>Other Stamps</h1>
        </div>
        <div className="workheaderright">
          <img src={immigrationImage} alt="Immigration" />
        </div>
      </div>
      <div className="workpagecontainer">
        <div className="criticalskillbody">
          <div className="workpagecomponentselector">
            <ul>
              <li
                onClick={() => setSelectedMode(1)}
                className={selectedMode === 1 ? "selectedelement" : ""}
              >
                Stamp 0
              </li>
              <li
                onClick={() => setSelectedMode(2)}
                className={selectedMode === 2 ? "selectedelement" : ""}
              >
                Stamp 1
              </li>
              <li
                onClick={() => setSelectedMode(3)}
                className={selectedMode === 3 ? "selectedelement" : ""}
              >
                Stamp 1H
              </li>
              <li
                onClick={() => setSelectedMode(4)}
                className={selectedMode === 4 ? "selectedelement" : ""}
              >
                Stamp 1A
              </li>
              <li
                onClick={() => setSelectedMode(5)}
                className={selectedMode === 5 ? "selectedelement" : ""}
              >
                Stamp 2
              </li>
              <li
                onClick={() => setSelectedMode(6)}
                className={selectedMode === 6 ? "selectedelement" : ""}
              >
                Stamp 2A
              </li>
              <li
                onClick={() => setSelectedMode(7)}
                className={selectedMode === 7 ? "selectedelement" : ""}
              >
                Stamp 3
              </li>
              <li
                onClick={() => setSelectedMode(8)}
                className={selectedMode === 8 ? "selectedelement" : ""}
              >
                Stamp 4D
              </li>
            </ul>
          </div>
        </div>
        {selectedMode === 1 && <Stamp0 />}
        {selectedMode === 2 && <Stamp1 />}
        {selectedMode === 3 && <Stamp1H />}
        {selectedMode === 4 && <Stamp1A />}
        {selectedMode === 5 && <Stamp2 />}
        {selectedMode === 6 && <Stamp2A />}
        {selectedMode === 7 && <Stamp3 />}
        {selectedMode === 8 && <Stamp4D />}

        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
