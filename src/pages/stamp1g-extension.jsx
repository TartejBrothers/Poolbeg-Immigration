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
            If your Stamp 1G permission is about to expire, we can help you
            apply for a Stamp 1G Extension with a{" "}
            <b>minimum period of 6 months.</b>
            This will give you an extra period of time to find a job eligible
            for a Critical Skill Employment Permit or General Employment Permit
            to remain in Ireland.
          </p>
        </div>
        <div className="workheaderright">
          <img src={stamp1g} alt="Stamp 1G" />
        </div>
      </div>
      <div className="stampbody">
        <h2>Who is eligible for Stamp 1G Extension?</h2>
        <p>
          <b>
            You may be eligible for Stamp 1G Extension in circumstances where:
          </b>
        </p>
        <ul>
          <li>
            You have not yet secured a job offer eligible for an employment
            permit, and your Stamp 1G is about to expire soon.
          </li>
          <li>
            You have successfully secured employment in Ireland and are in the
            process of completing your employment permit application. However,
            an employment permit can be a lengthy process which takes many
            months, and your Stamp 1G immigration permission is due to expire
            shortly.
          </li>
          <li>
            You become seriously injured or critically ill during your 1 or 2
            years of Stamp 1G Immigration permission. Learn more about the
            validation period of a Stamp 1G permission.
          </li>
        </ul>
        <hr />
        <h2>How long does it take to get the Stamp 1G Extension?</h2>
        <p>
          With our Future Direct Immigration Services, we are committed to
          preparing your application within 3 to 5 working days.
          <br />
          <br />
          Once we submit your application, The current waiting time can be up to
          4-8 months. Once your application is submitted and approved, the
          Department of Justice will write a letter to inform you of the
          duration of the 1G extension.
        </p>
        <hr />
        <h2>When should I start my Stamp 1G Extension Application</h2>
        <p>
          You should start your Stamp 1G Extension Application at least 6 months
          before your permission expires.
        </p>

        <hr />
        <h2>Can I apply for another Stamp 1G extension?</h2>
        <p>
          Through our Future Direct Immigration Services, we can help extend
          your Stamp 1G permission up to 2 times for at least six months for
          each extension, giving you an extra time of 12 months' permission to
          stay in Ireland.
        </p>
        <br />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
