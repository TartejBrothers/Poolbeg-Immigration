import React from "react";
import "../styles/critical-skills.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import workpermit from "../images/workpermit1.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";
export const ReactivationEmploymentPermit = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>What is a Reactivation Employment Permit?</h2>
      <p>
        A Reactivation Employment Permit is intended for foreign nationals who
        were initially working in Ireland under a valid employment permit but
        have since lost their status through no fault of their own or due to
        workplace exploitation. This permit allows them to return to legal
        employment in Ireland.
      </p>
      <p>
        The permit is issued to the foreign national, with a certified copy sent
        to their employer, granting them the right to work in Ireland in the
        occupation and locations specified on the permit. Typically, the
        Minister will only issue one new Reactivation Employment Permit per
        individual under this scheme.
      </p>

      <h2>Application Procedure:</h2>
      <p>The process involves two key steps:</p>
      <ol>
        <li>
          <b>Obtain Stamp 1 Permission Letter:</b> Apply to the Department of
          Justice for a Stamp 1 permission letter under the Reactivation Scheme.
          This letter extends your visa status, allowing you to remain in
          Ireland and apply for a new work permit.
        </li>
        <li>
          <b>Apply for the Reactivation Employment Permit:</b> Once you receive
          the Stamp 1 Permission letter, you can apply for a Reactivation
          Employment Permit through the Department of Enterprise, Trade, and
          Employment (DETE) online.
        </li>
      </ol>

      <h2>Eligibility Scenarios:</h2>
      <p>
        You may qualify for a Reactivation Employment Permit if you meet one of
        the following conditions:
      </p>
      <ul>
        <li>
          You previously held an employment permit but lost your status through
          no fault of your own, and you have remained in Ireland, though you are
          not currently legally resident.
        </li>
        <li>
          You are a current holder of a low-skilled and low-paid Work Permit
          Employment Permit and wish to change employers but do not meet the new
          criteria for a General Employment Permit.
        </li>
        <li>
          You have been made redundant and need a new Reactivation Employment
          Permit within six months to seek new employment.
        </li>
        <li>
          You wish to change employers while holding a Reactivation Employment
          Permit. Note that, except in exceptional cases, permit holders are
          generally expected to stay with their initial employer for 12 months
          before changing jobs.
        </li>
      </ul>
      <p>
        Certain scenarios may not be eligible for a Reactivation Employment
        Permit. For more details, please contact us for specific guidance.
      </p>

      <h2>Eligibility Requirements for Employers:</h2>
      <ul>
        <li>
          Employers must be registered with the Revenue Commissioners and, where
          applicable, with the Companies Registration Office/Registry of
          Friendly Societies and be currently trading in Ireland.
        </li>
        <li>Employers must directly employ, pay, and manage the employee.</li>
        <li>
          Employers must have at least 50% of their workforce as EEA nationals
          (the 50:50 rule), unless the company is a start-up with no employees
          on the day of the application, in which case the foreign national will
          be the sole employee.
        </li>
        <li>
          A Labour Market Needs Test is not required for this type of permit.
        </li>
      </ul>

      <h2>Eligibility Requirements for Family Reunion:</h2>
      <p>
        Dependents, partners, or spouses of Reactivation Employment Permit
        holders are not eligible for a Dependant/Partner/Spouse Employment
        Permit under this scheme and must apply for their own employment permit
        separately.
      </p>
    </div>
  );
};

export default function GeneralPermits() {
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
          <h1>Reactivation Employment Permits</h1>
          <p>
            The Reactivation Employment Permit is designed for individuals who
            previously held a valid employment permit in Ireland but fell out of
            the system due to circumstances beyond their control, or who have
            experienced exploitation or mistreatment in the workplace. This
            permit allows them to legally resume employment in Ireland. Learn
            more about the process below.
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
          <ReactivationEmploymentPermit />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
