import React from "react";
import "../styles/stamp1g.css";
import stamp1g from "../images/stampoverview.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactform";
import { useNavigate } from "react-router-dom";
export default function Stamp1GOverview() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate("/" + path);
  };
  return (
    <div className="stampmain">
      <Navbar />
      <div className="stampheader">
        <div className="workheaderleft">
          <h1>Stamp 1G Overview</h1>
          <h5
            onClick={() => {
              navigateTo("stamp1g-extension");
            }}
          >
            Click here for Stamp 1G Extension
          </h5>
          <p>
            An international student finishing studies in Ireland is eligible to
            apply for Stamp 1G permission to seek employment without an
            employment permit under the Third Level Graduate Programme. Learn
            more about who is eligible for Stamp 1G, Stamp 1G validity, and who
            is eligible for Stamp 1G.
          </p>
        </div>
        <div className="workheaderright">
          <img src={stamp1g} alt="Stamp 1G" />
        </div>
      </div>
      <div className="stampbody">
        <h2>What is Stamp 1G?</h2>
        <p>
          Stamp 1G permits international students who have earned a Level 8 or 9
          qualification from a recognized Irish institution to remain in Ireland
          after their studies. This permission allows them to work full-time but
          does not authorize self-employment or business operations. To continue
          working beyond the validity of Stamp 1G, an employment permit is
          needed.
        </p>
        <hr />
        <h2>How long is a Stamp 1G valid for?</h2>
        <p>
          12 Months: For graduates with a Level 8 qualification, generally
          covering undergraduate studies.
          <br />
          24 Months: For graduates with a Level 9 or higher qualification,
          typically for master's and PhD studies.
        </p>
        <hr />
        <h2>Who is eligible for Stamp 1G?</h2>
        <p>To qualify for Stamp 1G, applicants must:</p>
        <ul>
          <li>Have a current Stamp 2.</li>
          <li>Possess an up-to-date immigration registration card.</li>
          <li>Apply within six months of receiving their degree.</li>
          <li>
            Not have exceeded the seven-year limit for remaining in Ireland as a
            non-EEA student.
          </li>
        </ul>
        <p>Additional Rules:</p>
        <ul>
          <li>
            The Third Level Graduate Programme can be accessed up to two times.
          </li>
          <li>
            Graduates with Level 8 or Level 9 awards who have previously held
            Stamp 1G can reapply if they have not surpassed the seven-year
            limit.
          </li>
          <li>Those whose permission to stay has lapsed are ineligible.</li>
          <li>Graduates with Stamp 1G can work up to 40 hours per week.</li>
        </ul>
        <hr />
        <h2>How to Apply for Stamp 1G?</h2>
        <p>
          International students with Stamp 2 must apply for Stamp 1G through
          the Irish Immigration website. An account must be created, and a €300
          registration fee paid. Required documents include:
        </p>
        <ul>
          <li>A valid passport.</li>
          <li>An IRP card showing Stamp 2.</li>
          <li>A Statement of Final Results.</li>
        </ul>
        <p>
          If approved, a new IRP card will be sent by post, and applicants are
          not required to visit the Burgh Quay office. Processing typically
          takes 3-5 weeks.
        </p>

        <br />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
