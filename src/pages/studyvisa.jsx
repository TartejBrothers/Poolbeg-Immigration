import React, { useState } from "react";
import "../styles/immigrationpage.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import immigrationImage from "../images/back/back11.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";
export const CriticalSkillsOne = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Introduction</h3>
      <p>
        Non-EU citizens wishing to study in Ireland must meet specific criteria
        to obtain a right of residence. To qualify for student conditions, you
        must be enrolled in a full-time course on the Interim List of Eligible
        Programmes (ILEP), which generally includes higher education and English
        language courses. Note that international students have restrictions on
        the number of English language courses they can take.
      </p>
      <ul>
        <li>A letter of enrollment</li>
        <li>Proof of fee payment</li>
        <li>
          Depending on your nationality, you may also need to apply for a visa.
          If your stay exceeds 90 days, registration is required.
        </li>
      </ul>
    </div>
  );
};

export const CriticalSkillsTwo = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Study Options</h3>
      <p>You can choose from various study options in Ireland, including:</p>
      <ul>
        <li>
          <strong>Third-Level Courses:</strong> Enroll in a university or
          third-level institution, including higher education programmes from
          level 6 to 10 on the National Framework of Qualifications,
          professional awards, or foundation programmes.
        </li>
        <li>
          <strong>Language Courses:</strong> Undertake English language
          programmes lasting at least 25 weeks.
        </li>
        <li>
          <strong>Short-Term Courses:</strong> For studies less than 90 days,
          such as English or Irish language courses or cultural studies, you
          will need a Short Stay visa (C Visa) if you are from a visa-required
          country.
        </li>
        <li>
          <strong>Fee-Paying Private Schools:</strong> For primary or secondary
          education, your child must be enrolled in a fee-paying school and the
          fees must be paid before arrival in Ireland. Applications for schools
          not listed on the Department of Education and Skills website will be
          refused.
        </li>
      </ul>
    </div>
  );
};

export const CriticalSkillsThree = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Visa Options</h3>
      <p>
        Depending on your study duration, you will need to apply for either a
        short stay or a long stay visa before arriving in Ireland. If your stay
        exceeds 90 days, you must also register upon arrival.
      </p>
      <ul>
        <li>
          <strong>Short Stay ‘C’ Visa:</strong> For courses lasting 90 days or
          less. Apply from your country of residence; applications from other
          countries will not be accepted.
        </li>
        <li>
          <strong>Long Stay ‘D’ Visa:</strong> For courses longer than three
          months. Apply up to three months before your travel date. If visiting
          another country before Ireland, ensure you have the relevant visa for
          that country before applying for the Irish visa.
        </li>
      </ul>
    </div>
  );
};

export const CriticalSkillsFour = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Before and After You Arrive</h3>
      <p>
        <strong>Before Arriving:</strong>
      </p>
      <ul>
        <li>
          <strong>Visa Application:</strong> Apply for a visa up to three months
          before your travel date. Apply as soon as you accept a place in your
          course.
        </li>
        <li>
          <strong>Short Stay Visa:</strong> For stays under 90 days, apply for a
          Short Stay ‘C’ Visa.
        </li>
        <li>
          <strong>Long Stay Visa:</strong> For stays over 90 days, apply for a
          Long Stay ‘D’ Visa.
        </li>
      </ul>
      <p>
        <strong>After Arriving:</strong>
      </p>
      <ul>
        <li>
          <strong>Immigration Check:</strong> Present your passport, permit,
          visa, and all required documentation to the immigration officer. Even
          with a valid visa, you may be refused entry if the officer is not
          satisfied with your documents.
        </li>
        <li>
          <strong>Registration:</strong> If you have a Long Stay ‘D’ Visa and
          intend to stay longer than three months, visit the registration office
          in Dublin or a local Garda station to extend your permission and
          register your details.
        </li>
        <li>
          <strong>Refusal:</strong> If refused entry, you will be sent back to
          your departure point.
        </li>
      </ul>
    </div>
  );
};

export const CriticalSkillsFive = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Applying for a Student Visa</h3>
      <p>
        The application process involves two steps: the online application and
        document submission.
      </p>
      <ul>
        <li>
          <strong>Online Application:</strong> Complete the application form
          online, print the summary, and follow instructions for document
          submission. Submission locations vary by country.
        </li>
        <li>
          <strong>Processing Time:</strong> Expect processing to take about
          eight weeks. Delays may occur due to peak times or missing documents.
        </li>
        <li>
          <strong>Appeal:</strong> If your visa is refused, you have the option
          to appeal the decision.
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

export default function StudyVisa() {
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
          <h1>Study Visa</h1>
          <p>
            If you plan to study in Ireland, you need to enroll in a full-time
            course listed on the Interim List of Eligible Programmes (ILEP).
            Here is how you can apply for the necessary visa to travel to
            Ireland for your studies.
          </p>
          <button
            className="contactusbutton"
            onClick={() => navigate("/contact-us")}
          >
            Know More
          </button>
        </div>
        <div className="workheaderright">
          <img
            src={immigrationImage}
            alt="Immigration"
            className="roundedcorners"
          />
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
              Study Options
            </li>
            <li
              onClick={() => setSelectedMode(3)}
              className={selectedMode === 3 ? "selectedelement" : ""}
            >
              Visa Options
            </li>
            <li
              onClick={() => setSelectedMode(4)}
              className={selectedMode === 4 ? "selectedelement" : ""}
            >
              Before and After You Arrive
            </li>
            <li
              onClick={() => setSelectedMode(5)}
              className={selectedMode === 5 ? "selectedelement" : ""}
            >
              Applying for a Student Visa
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
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}
