import React, { useState } from "react";
import "../styles/immigrationpage.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import immigrationImage from "../images/immigrationpages.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";

// New Components
const ChangeInCircumstances = () => (
  <div className="criticalskillsbodyelement">
    <h3>Change in Circumstances</h3>
    <p>
      Some people may need to change the type of immigration permission or stamp
      they have if their circumstances change. If you hold a valid permission,
      represented by a current Irish Residence Permit (IRP card), you may be
      able to apply to change, extend, or vary your permission.
    </p>
    <p>
      For example, if you have held a Critical Skills Employment Permit for at
      least two years, you may be able to apply for a different type of
      permission that offers greater benefits. If your permission is expired,
      you cannot apply to change it. Applying does not extend your current
      permission, so be sure to apply in plenty of time if you meet the
      criteria.
    </p>
    <p>
      Each immigration stamp or permission requires different criteria and
      offers different conditions, for example, the ability to study, work or
      retire in Ireland. If your circumstances change while living in Ireland,
      this may impact your immigration permission.
    </p>
    <p>
      Please note that if you are here on a visitor’s permission for up to 90
      days or if you are here on foot of a Working Holiday Authorisation (on
      Stamp 1), you are not permitted to change your permission. You are
      required to leave the State on or before the expiry of your permission. It
      would remain open to you to apply for another permission from outside the
      State after your departure.
    </p>
    <p>
      We have listed out a few most common changes that you will find in the
      later section. Do note that the list is not exhaustive and are always
      subject to change due to policy changes.
    </p>
  </div>
);

const ChangeOfImmigrationFromStamp1 = () => (
  <div className="criticalskillsbodyelement">
    <h3>Change of Immigration from Stamp 1</h3>
    <h4>Stamp 2</h4>
    <p>
      If you wish to change your current permission to allow you to study in
      Ireland you can apply online. You will need to upload some documents to
      support your application including:
    </p>
    <ul>
      <li>An acceptance letter from the school/college</li>
      <li>Evidence of private medical insurance and financial resources</li>
    </ul>
    <h4>Stamp 3</h4>
    <p>
      If you wish to change your current permission to that of a dependent of an
      Irish resident you must visit your local immigration office with that
      person to apply for a Stamp 3. A dependent means a spouse, civil partner,
      or dependent child (between the age of 16 and 18).
    </p>
    <p>
      If you have been in a relationship similar to marriage (De Facto) with an
      Irish resident, and cohabiting with that person for at least two years,
      you may apply to ISD’s Domestic Residence Division for a change of Status
      to a Stamp 3.
    </p>
    <h4>Stamp 4</h4>
    <p>
      If you have employment permits and residence permissions and stamps for
      the previous five (5) years, you may apply for a Stamp 4 for one year.
    </p>
    <p>
      If you become a spouse or civil partner of an Irish national who is
      resident in the State, you may attend at ISD Burgh Quay or your local
      immigration office with your Irish national spouse or civil partner to
      apply for a change of status to Stamp 4.
    </p>
    <p>
      If you have been in a relationship akin to marriage (De Facto) with an
      Irish national, and cohabiting with that person for at least two years,
      you may apply to ISD’s Domestic Residence Division for a change of status
      to a Stamp 4.
    </p>
    <p>
      If you become the parent of a child who is an Irish citizen, you may apply
      for a change of status.
    </p>
    <h4>Stamp 5</h4>
    <p>
      If you have 96 months reckonable residence (that means you have had a
      series of permissions that added up to 96 months in the State and qualify
      as counting towards the time required to apply for citizenship) you may
      apply to Domestic Residence Division for a Stamp 5.
    </p>
    <h4>Stamp 6</h4>
    <p>
      If you are granted citizenship, you may apply to Domestic Residence
      Division for Stamp 6.
    </p>
  </div>
);

const ChangeOfImmigrationFromStamp2 = () => (
  <div className="criticalskillsbodyelement">
    <h3>Change of Immigration from Stamp 2</h3>
    <h4>Stamp 1</h4>
    <p>
      If you are issued with an Employment Permit by Department of Enterprise
      Trade and Employment, you may apply for a Stamp 1.
    </p>
    <h4>Stamp 3</h4>
    <p>
      If you wish to become registered as a dependent – either as a spouse,
      civil partner, or dependent child (between the age of 16 and 18) – of an
      Irish resident please attend at GNIB, along with the Irish Resident, to
      apply for a change of status to Stamp 3.
    </p>
    <p>
      If you have been in a relationship akin to marriage (De Facto) with an
      Irish Resident and cohabiting with that Irish Resident for at least two
      years you may apply to Residence Division for a change of Status to a
      Stamp 3.
    </p>
    <h4>Stamp 4</h4>
    <p>
      If you become a Spouse or Civil Partner of an Irish National, who is
      resident in the State, you may attend at ISD Burgh Quay or your local
      immigration office with the Irish National to apply for your change of
      status to Stamp 4.
    </p>
    <p>
      If you have been in a relationship akin to marriage (De Facto) with an
      Irish National and cohabiting with that Irish National for at least two
      years you may apply to Residence Division for a change of Status to a
      Stamp 4.
    </p>
    <p>
      If you become the parent of an Irish Citizen Child you may apply for a
      change of status.
    </p>
  </div>
);

const ChangeOfImmigrationFromStamp3 = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Change of Immigration from Stamp 3</h2>
      <div>
        <h4>Stamp 1</h4>
        <p>
          If you are issued with an Employment Permit by the Department of
          Enterprise Trade and Employment, you can attend ISD Burgh Quay or your
          local immigration office to apply for a Stamp 1.
        </p>
      </div>
      <div>
        <h4>Stamp 2</h4>
        <p>
          If you wish to become registered as a Student, you must attend ISD
          Burgh Quay or your local immigration office with student documents –
          4n acceptance letter from the school/college, evidence of private
          medical insurance, and evidence of finances.
        </p>
      </div>
      <div>
        <h4>Stamp 4</h4>
        <p>
          If you become a Spouse or Civil Partner of an Irish National, who is
          resident in the State, you may attend ISD Burgh Quay or your local
          immigration office with the Irish National to apply for your change of
          status to Stamp 4.
        </p>
        <p>
          If you have been in a relationship akin to marriage (De Facto) with an
          Irish National and cohabiting with that Irish National for at least
          two years, you may apply to Residence Division for a change of Status
          to a Stamp 4.
        </p>
        <p>
          If you become the parent of an Irish Citizen Child, you may attend the
          GNIB office to apply for a change of status. You may apply to
          Residence Division for permission to remain in the State on the basis
          of Parentage of an Irish Citizen Child – For Non-EEA.
        </p>
        <p>
          If your parent becomes an Irish citizen, and you originally entered
          the State as a dependent of your parent and are currently registered
          with ISD Burgh Quay or your local immigration office, you may apply to
          Residence Division INIS for Stamp 4.
        </p>
      </div>
      <div>
        <h3>Stamp 5</h3>
        <p>
          If you have 96 months reckonable residence, you may apply to Residence
          Division for a Stamp 5.
        </p>
      </div>
      <div>
        <h4>Stamp 6</h4>
        <p>
          If you are granted citizenship, you may apply to Residence Division
          for Stamp 6.
        </p>
      </div>
    </div>
  );
};

const ChangeOfImmigrationFromStamp4 = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Change of Immigration from Stamp 4</h2>
      <div>
        <h4>Stamp 1</h4>
        <p>Not applicable</p>
      </div>
      <div>
        <h4>Stamp 2</h4>
        <p>Not applicable</p>
      </div>
      <div>
        <h4>Stamp 3</h4>
        <p>Not applicable</p>
      </div>
      <div>
        <h4>Stamp 5</h4>
        <p>
          If you have 96 months reckonable residence, you may apply to Residence
          Division for a Stamp 5.
        </p>
      </div>
      <div>
        <h4>Stamp 6</h4>
        <p>
          If you are granted citizenship, you may apply to Residence Division
          for Stamp 6.
        </p>
      </div>
    </div>
  );
};

export default function ImmigrationPermission() {
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
          <h1>Change of Immigration Permission</h1>

          <p>
            If you are married to, in a civil partnership with, or a dependent
            relative of an Irish, UK, EEA, or Swiss national, or a non-EEA
            national work permit holder in Ireland, you may be eligible to live
            in Ireland with your family member. Here’s what you need to know
            about the application process and requirements for various family
            visas.
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
              Change in Circumstances
            </li>
            <li
              onClick={() => setSelectedMode(2)}
              className={selectedMode === 2 ? "selectedelement" : ""}
            >
              Change of Immigration from Stamp 1
            </li>
            <li
              onClick={() => setSelectedMode(3)}
              className={selectedMode === 3 ? "selectedelement" : ""}
            >
              Change of Immigration from Stamp 2
            </li>
            <li
              onClick={() => setSelectedMode(4)}
              className={selectedMode === 4 ? "selectedelement" : ""}
            >
              Change of Immigration from Stamp 3
            </li>
            <li
              onClick={() => setSelectedMode(5)}
              className={selectedMode === 5 ? "selectedelement" : ""}
            >
              Change of Immigration from Stamp 4
            </li>
          </ul>
        </div>
        {selectedMode === 1 && <ChangeInCircumstances />}
        {selectedMode === 2 && <ChangeOfImmigrationFromStamp1 />}
        {selectedMode === 3 && <ChangeOfImmigrationFromStamp2 />}
        {selectedMode === 4 && <ChangeOfImmigrationFromStamp3 />}
        {selectedMode === 5 && <ChangeOfImmigrationFromStamp4 />}
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
