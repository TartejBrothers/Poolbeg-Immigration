import React, { useState } from "react";
import "../styles/immigrationpage.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import immigrationImage from "../images/immigrationpages.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";

const LongTermJoinFamilyVisa = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Long Term ‘D’ (Join Family) Visa</h3>
      <h4>Introduction</h4>
      <p>
        Relocating to a new country often means leaving close friends and family
        behind. However, via the Long Term ‘D’ (Join Family) Visa route, certain
        immediate family members are able to move to Ireland as a ‘dependent’ of
        the family member who is living in the State already or who plans on
        moving to the State for whatever reason. The ‘Long Term’ branch of this
        visa is applicable to those who intend on residing in the State for
        longer than 3 months.
      </p>
      <p>
        Although in most circumstances it is an automatic right to be with your
        offspring, your child must be dependent of you and under the age of 18
        to successfully join you in Ireland. 23-year old dependents may also
        apply to join but they must be in full-time education. Parents can be
        either an Irish citizen, an EEA national or a non-EEA national who is
        residing in the State on another visa such as a Work Visa or Spouse
        Visa, for example.
      </p>
    </div>
  );
};

const Eligibility = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Eligibility</h3>
      <p>You may be eligible if:</p>
      <ul>
        <li>You are the biological parent of an Irish citizen child</li>
        <li>Your Irish citizen child is residing full time in Ireland</li>
        <li>
          You are involved in the upbringing of your Irish citizen child
          (emotionally or financially)
        </li>
        <li>Your Irish citizen child is under the age of 18</li>
        <li>
          You are named as the biological parent on your child’s birth
          certificate.
        </li>
      </ul>
      <p>
        You must meet all of the above criteria to qualify for permission as the
        parent of an Irish citizen child.
      </p>
    </div>
  );
};

const HowToApply = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>How to Apply</h3>
      <p>
        If you are the parent of an Irish citizen child, you may be eligible for
        permission to remain in Ireland on this basis.
      </p>
      <p>
        If you have entered Ireland on a valid “D Reside Parent of an Irish
        Citizen child” visa, you must make an appointment with the Registration
        Office and attend in the presence of your Irish child to have this
        permission registered.
      </p>
      <p>
        If you have an existing permission registered in the State (e.g., Stamp
        1, 1A, 1G, 1H, 2, 2A, 3, 4) – you may renew this permission online with
        sufficient documentation provided.
      </p>
      <p>
        If you do not hold a valid immigration permission or are on a short stay
        ‘C’ visa, you must complete the parent of Irish citizen child
        application form and submit it, with all the required documentation, to
        the Department of Justice. Please note that incomplete application forms
        will not be processed and will be returned.
      </p>
    </div>
  );
};

export default function ChildVisa() {
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
          <h1>Parent of an Irish Child</h1>

          <p>
            If you are the parent of an Irish citizen child, you may be eligible
            for permission to remain in Ireland on this basis. All applications
            for permission to remain as the parent of an Irish citizen child are
            examined on a case-by-case basis.
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
              Long Term ‘D’ (Join Family) Visa
            </li>
            <li
              onClick={() => setSelectedMode(2)}
              className={selectedMode === 2 ? "selectedelement" : ""}
            >
              Eligibility
            </li>
            <li
              onClick={() => setSelectedMode(3)}
              className={selectedMode === 3 ? "selectedelement" : ""}
            >
              How to Apply
            </li>
          </ul>
        </div>
      </div>
      <div className="criticalpagecontent">
        {selectedMode === 1 && <LongTermJoinFamilyVisa />}
        {selectedMode === 2 && <Eligibility />}
        {selectedMode === 3 && <HowToApply />}
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
