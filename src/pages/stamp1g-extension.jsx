import React from "react";
import "../styles/stamp1g.css";
import stamp1g from "../images/stampoverview.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactform";
import { useNavigate } from "react-router-dom";
export default function Stamp1GExtension() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate("/" + path);
  };
  return (
    <div className="stampmain">
      <Navbar />
      <div className="stampheader">
        <div className="workheaderleft">
          <h1>Stamp 1G Extension</h1>
          <h5
            onClick={() => {
              navigateTo("stamp1g-overview");
            }}
          >
            Click here for Stamp 1G Overview
          </h5>
          <p>
            If your Stamp 1G permission is nearing expiration, we can assist you
            in applying for a Stamp 1G Extension for a minimum of 6 months. This
            extension will provide you with additional time to secure a job that
            qualifies for a Critical Skills Employment Permit or General
            Employment Permit, allowing you to remain in Ireland. We have
            successfully helped hundreds of individuals extend their Stamp 1G
            permissions. Feel free to call us or send your request.
          </p>
        </div>
        <div className="workheaderright">
          <img src={stamp1g} alt="Stamp 1G" />
        </div>
      </div>
      <div className="stampbody">
        <h2>Who is eligible for a Stamp 1G Extension?</h2>
        <p>
          You may qualify for a Stamp 1G Extension under the following
          circumstances:
        </p>
        <ul>
          <li>
            You have not yet secured a job offer that qualifies for an
            employment permit, and your Stamp 1G is about to expire.
          </li>
          <li>
            You have secured employment in Ireland and are in the process of
            completing your employment permit application, but the permit
            process may take several months, and your Stamp 1G permission is
            expiring soon.
          </li>
          <li>
            You experience serious injury or critical illness during your 1 or 2
            years of Stamp 1G permission.
          </li>
        </ul>
        <hr />
        <h2>How long does it take to get the Stamp 1G Extension?</h2>
        <p>
          With Poolbeg Immigration Services, we aim to prepare your application
          within 3 to 5 working days.
          <br />
          <br />
          After submission, the current waiting time can be up to 4-8 months.
          Once approved, the Department of Justice will send you a letter
          detailing the duration of the Stamp 1G extension.
        </p>
        <hr />
        <h2>When should I start my Stamp 1G Extension Application?</h2>
        <p>
          You should begin your Stamp 1G Extension application at least 6 months
          before your current permission expires.
        </p>
        <hr />
        <h2>Can I apply for another Stamp 1G extension?</h2>
        <p>
          Yes, through Poolbeg Immigration Services, we can assist with
          extending your Stamp 1G permission up to 2 times, for a minimum of six
          months per extension, allowing you to stay in Ireland for an
          additional 12 months.
        </p>
        <br />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
