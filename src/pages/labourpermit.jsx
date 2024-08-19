import React from "react";
import "../styles/critical-skills.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import workpermit from "../images/workpermit1.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";

export const LabourContent = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>What is the Labour Market Needs Test?</h2>
      <p>
        The Labour Market Needs Test is a requirement that employers must
        fulfill to prove that no suitable candidates from Ireland or the EEA are
        available for the job position before hiring a non-EEA national. Here’s
        how it works:
      </p>

      <ol>
        <li>
          <strong>Advertising the Vacancy:</strong>{" "}
          <ul>
            <li>
              <strong>
                Department of Employment Affairs and Social Protection (DEASP):
              </strong>{" "}
              Advertise the position with DEASP Employment Services/EURES
              employment network for at least 28 days.
            </li>
            <li>
              <strong>National Newspaper:</strong> Advertise the position in a
              national newspaper for a minimum of three days.
            </li>
            <li>
              <strong>Local Newspaper or Job Website:</strong> Advertise the
              position in either a local newspaper or a jobs website (excluding
              DEASP/EURES websites) for at least three days.
            </li>
          </ul>
        </li>
        <li>
          Ensuring that these steps are followed is crucial, as failing to meet
          these requirements is a common reason for the refusal of General
          Employment Permit applications.
        </li>
      </ol>

      <p>
        <strong>
          Need assistance with the Labour Market Needs Test? Contact us now!
        </strong>{" "}
      </p>

      <h3>Who Needs the Labour Market Needs Test?</h3>
      <p>
        The Labour Market Needs Test is <strong>REQUIRED</strong> for:
      </p>
      <ul>
        <li>General Employment Permits</li>
        <li>Contract for Services Employment Permits</li>
      </ul>

      <p>
        The Labour Market Needs Test is <strong>NOT REQUIRED</strong> in the
        following cases:
      </p>
      <ul>
        <li>
          <strong>Critical Skills Occupations List:</strong> Jobs that are
          listed on the Critical Skills Occupations List do not require a Labour
          Market Needs Test.
        </li>
        <li>
          <strong>Redundant Permit Holders:</strong> Non-EEA nationals holding a
          General Employment Permit who have been made redundant within the
          previous six months do not need to undergo the Labour Market Needs
          Test.
        </li>
        <li>
          <strong>Enterprise Ireland/IDA Ireland Recommendation:</strong> Jobs
          that have a recommendation from Enterprise Ireland or IDA Ireland (for
          client companies of these organizations) are exempt from this test.
        </li>
        <li>
          <strong>Carers for Exceptional Medical Needs:</strong> Jobs offered to
          non-EEA nationals who have been providing care to a person with
          exceptional medical needs and who has developed a high level of
          dependence on the carer.
        </li>
      </ul>

      <p>
        <strong>Note:</strong> Employment permits cannot be issued for
        occupations listed on the Ineligible List of Occupations, regardless of
        the salary offered.
      </p>
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
          <h1>Labour Market Needs Test</h1>
          <p>
            The Labour Market Needs Test ensures that job opportunities in
            Ireland are first offered to suitably skilled Irish and EEA
            (European Economic Area) nationals before being made available to
            non-EEA nationals. This test is designed to ensure that local talent
            is considered first and to prevent job vacancies from being filled
            by non-EEA nationals when suitable candidates from within the EEA
            are available.
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
          <LabourContent />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
