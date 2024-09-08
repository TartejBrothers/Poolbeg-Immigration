import React, { useState } from "react";
import "../styles/immigrationpage.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import immigrationImage from "../images/immigrationpages.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";
const DeFactoPartner = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Introduction</h3>
      <p>
        A de facto partner is someone with whom you have a committed
        relationship similar to marriage or civil partnership, but without legal
        status. To qualify, your relationship must:
      </p>
      <ul>
        <li>Be genuine and ongoing.</li>
        <li>Have lasted at least two years of cohabitation.</li>
        <li>Not be a familial relationship.</li>
      </ul>
      <p>
        If you are a de facto partner of an Irish, UK, EEA, or Swiss national,
        or a non-EEA national with a work permit in Ireland, you may be allowed
        to live in Ireland with your partner. Visa requirements are similar to
        those for spouses and civil partners.
      </p>
      <h3>How to Apply</h3>
      <p>Ensure that:</p>
      <ul>
        <li>Your partner qualifies as a sponsor.</li>
        <li>The sponsor meets the minimum earnings requirement.</li>
        <li>You are ordinarily resident outside Ireland.</li>
        <li>You are of good character.</li>
        <li>You have lived together for at least two years.</li>
      </ul>
      <p>
        Submit your application online, print, sign, and date the form, and
        provide all required documentation. Biometrics may be necessary.
      </p>
      <p>
        <strong>Important:</strong> Providing false information can lead to visa
        refusal and a potential five-year ban from obtaining an Irish visa.
      </p>
      <h3>Eligibility & Work Permission</h3>
      <p>
        Sponsored by an Irish National: Apply immediately and, if approved,
        receive a Stamp 4 to live and work in Ireland.
      </p>
      <p>
        Sponsored by a Non-EEA national on a Critical Skills Employment Permit:
        Apply immediately and receive a Stamp 1G, permitting you to live and
        work in Ireland.
      </p>
      <p>
        Sponsored by a Non-EEA national on a General Skills Employment Permit:
        Apply only after the sponsor has held the permit for one year. If
        approved, you will get a Stamp 3, requiring a separate work permit.
      </p>
      <p>
        Sponsored by a UK National: Apply immediately and receive a Stamp 4 if
        approved, allowing you to live and work in Ireland.
      </p>
      <p>
        Sponsored by an EEA or Swiss National: Apply immediately and receive a
        Stamp 4, allowing you to live and work in Ireland.
      </p>
    </div>
  );
};
export default function PartnerVisa() {
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
          <h1>De Factor Partner Visa</h1>

          <p>
            If you are the de facto partner of an Irish national or an Irish
            resident with an employment permit, you may be eligible to apply for
            this programme. Please read below for further information.
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

      <div className="criticalpagecontent">
        <DeFactoPartner />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
