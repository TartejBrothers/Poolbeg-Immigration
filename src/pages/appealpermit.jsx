import React from "react";
import "../styles/critical-skills.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import workpermit from "../images/workpermit1.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";
export const EmploymentPermitAppeal = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Can I Appeal My Employment Permit Refusals?</h2>
      <p>
        Yes, you can appeal if you believe your employment permit application
        was wrongly refused. To do so, follow these steps:
      </p>
      <h2>Submit an Appeal Request:</h2>
      <ul>
        <li>Use the prescribed form for submitting an appeal.</li>
        <li>
          Clearly outline the reasons for requesting a review of the refusal
          decision.
        </li>
        <li>Include any additional documentation that supports your case.</li>
      </ul>
      <h2>Timeframe for Submission:</h2>
      <p>
        Your appeal request must be submitted within 28 calendar days from the
        date on the refusal letter.
      </p>

      <h2>Is the Appeal Free?</h2>
      <p>
        Yes, submitting an appeal is entirely free of charge. However, note that
        you can only submit one appeal per application.
      </p>

      <h2>Processing Time for an Appeal</h2>
      <p>
        The processing time for an appeal is generally 4 to 6 weeks. During this
        period, the department will review the appeal and make a decision.
      </p>

      <p>
        Need help with your appeal? Contact Future Direct today for expert
        assistance in reviewing and resubmitting your employment permit appeal!
      </p>
    </div>
  );
};

export default function AppealPermits() {
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
          <h1>Appeal Employment Permit Refusals</h1>
          <p>
            If your employment permit application is refused, it’s important to
            understand that there’s an opportunity to appeal the decision.
            Future Direct is here to assist you in reviewing and resubmitting an
            appeal to the Department of Enterprise, Trade, and Employment
            (DETE), provided the appeal is lodged within the 28-day timeframe
            from the date of your refusal letter.
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
          <EmploymentPermitAppeal />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
