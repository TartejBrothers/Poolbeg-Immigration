import React from "react";
import "../styles/critical-skills.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import workpermit from "../images/workpermit1.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";

export const TrustedContent = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>What is a Trusted Partnership?</h2>
      <p>
        A Trusted Partnership with DETE provides organizations with a more
        efficient way to manage employment permit applications. Here’s how it
        works:
      </p>

      <ul>
        <li>
          <strong>Eligibility:</strong> Employers, connected persons, and EEA
          (European Economic Area) contractors who wish to apply for Trusted
          Partner status can do so. Once granted, they receive a unique Trusted
          Partner Registration Number.
        </li>
        <li>
          <strong>Benefits:</strong> With Trusted Partner status, organizations
          can use this number instead of providing detailed employer information
          for each permit application.
        </li>
        <li>
          <strong>Objective:</strong> The initiative aims to reduce the
          administrative load on employers and streamline the application
          process by avoiding the need to replicate employer details for every
          permit application.
        </li>
      </ul>

      <p>
        <strong>
          To qualify for Trusted Partnership, the applicant must be registered
          with the Office of the Revenue Commissioners as an employer and, where
          applicable, with the Companies Registration Office or Registry of
          Friendly Societies.
        </strong>
      </p>

      <h3>Applications by Trusted Partners for Employment Permits</h3>
      <p>
        The Trusted Partner Initiative simplifies the employment permit
        application process significantly:
      </p>

      <ul>
        <li>
          <strong>Streamlined Process:</strong> Trusted Partners only need to
          provide information related to the employment and the foreign national
          when applying for a permit.
        </li>
        <li>
          <strong>Application Forms:</strong> Trusted Partners have access to a
          set of dedicated employment permit application forms, which only
          require quoting the Trusted Partner Registration Number.
        </li>
        <li>
          <strong>Validity:</strong> The Trusted Partner Registration is valid
          for two years, during which all applications can benefit from the
          streamlined process.
        </li>
      </ul>

      <p>
        <strong>
          For a Trusted Partner application, simply include your Trusted Partner
          Registration Number on all employment permit applications during your
          registration period.
        </strong>
      </p>

      <h3>Benefits of the Trusted Partner Initiative</h3>
      <p>The Trusted Partner Initiative offers several advantages:</p>

      <ul>
        <li>
          <strong>Fast Turnaround:</strong> Quick processing of Trusted Partner
          registration applications.
        </li>
        <li>
          <strong>No Fee:</strong> There is no cost to apply for Trusted Partner
          status.
        </li>
        <li>
          <strong>Reduced Paperwork:</strong> Less paperwork is required for
          each permit application under the scheme.
        </li>
        <li>
          <strong>Valid for Two Years:</strong> The Trusted Partner status is
          valid for a period of two years.
        </li>
        <li>
          <strong>Simplified Forms:</strong> Employment permit application forms
          are shorter and more straightforward.
        </li>
        <li>
          <strong>Faster Processing:</strong> Faster processing times for
          Trusted Partner employment permit applications.
        </li>
      </ul>
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
          <h1>Trusted Partnership</h1>
          <p>
            The Trusted Partner Initiative aims to simplify and streamline the
            process for organizations applying for employment permits. By
            becoming a Trusted Partner with the Department of Enterprise, Trade,
            and Employment (DETE), organizations can enjoy several benefits that
            reduce administrative burdens and expedite the application process.
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
          <TrustedContent />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
