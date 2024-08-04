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
        <h2>What is Stamp 1G</h2>
        <p>
          Stamp 1G allows international students who hold level 8 or 9 awards
          from a recognised Irish awarding body to stay in Ireland after their
          studies for some time. Those who get Stamp 1G have the right to remain
          in Ireland and work full-time in accordance with employment law
          requirements without further authorisation. However, you cannot
          operate a business or be self-employed under your Stamp 1G status. ​
          <br />
          <br />
          If you wish to continue working after Stamp 1G expires, you will
          require an employment permit from the Department of Enterprise, Trade
          and Employment to continue to stay in Ireland.
        </p>
        <hr />
        <h2>How long is a Stamp 1G valid for?</h2>
        <b>
          Persons qualifying for Stamp 1G permission of up to 12 Months of
          Permission
        </b>
        <p>
          Graduates with an award at Level 8 on the National Framework of
          Qualifications will be granted a 12-month permission. This applies
          primarily to undergraduate students.
        </p>
        ​<br />
        <b>
          Persons qualifying for Stamp 1G permission of up to 24 Months of
          Permission
        </b>
        <p>
          Graduates with an award at Level 9 or above on the National Framework
          of Qualifications qualify for the Programme and will be granted
          permission for 24 months permission. This applies mainly to master's
          and PhD students. ​
          <br />
          <br />
          Graduates will be granted permission for twelve months initially. This
          will be renewed for a further period of twelve months where the
          graduate satisfies the immigration authorities that they have taken
          appropriate steps to access suitable graduate-level employment (e.g.
          attendance at job interviews, signing up with graduate employment
          agencies, etc.).
        </p>
        <hr />
        <h2>Who is Eligible For Stamp 1G?</h2>
        <p>
          To be eligible for Stamp 1G permission, Applicants need to meet the
          following requirements:
        </p>
        <ul>
          <li>Hold a current Stamp 2</li>
          <li>Have an up-to-date immigration registration card</li>
          <li>
            Submit their application within six months of obtaining their degree
          </li>
          <li>
            Not have exceeded the seven-year limit to remain in Ireland as a
            non-EEA student
          </li>
        </ul>
        <p>Additional rules surrounding Stamp 1G are:</p>
        <ul>
          <li>
            Graduates are not allowed to access the Third Level Graduate
            Programme on more than two separate occasions
          </li>
          <li>
            Graduates who achieve level 8 or level 9 awards and have previously
            obtained Stamp 1G can apply for the Third Level Graduate Programme
            again if they have not exceeded the 7-year limit to remain in
            Ireland.
          </li>
          <li>
            Those whose permission to remain in Ireland has lapsed cannot apply
            for the Third Level Graduate Programme.
          </li>
          <li>
            Graduates who obtained Stamp 1G can be hired to work for up to 40
            hours per week.
          </li>
        </ul>
        <p>
          If you are an international student in Ireland on Stamp 2 and are
          wondering whether you qualify for Stamp 1G, contact us now for
          immediate help and advice.
        </p>
        <hr />
        <h2>How to apply for Stamp 1G?</h2>
        <p>
          Students from outside the EU/EEA who have previously registered with
          the Irish Immigration Service for Stamp 2 permission must apply for
          their Stamp 1G through the Irish Immigration website for visa renewal
          and set up an account.
          <br />
          <br />
          You will be requested to pay a €300 registration fee and will need
          copies of the following documents when submitting your first-time
          Stamp 1G application:
        </p>
        <ul>
          <li>Valid Passport</li>
          <li>IRP card indicating the Stamp 2 permission</li>
          <li>A Statement of Final Results</li>
        </ul>
        <p>
          If the application is successful, a new IRP card will be posted to the
          address provided. The applicant is not required to attend the Burgh
          Quay office in person. Processing times are usually 3-5 weeks.
        </p>
        <br />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
