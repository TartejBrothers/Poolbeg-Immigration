import React, { useState } from "react";
import "../styles/immigrationpage.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import immigrationImage from "../images/immigrationpages.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";
const SpouseCivilPartnerVisa = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Spouse/Civil Partner Visa</h3>
      <h4>Introduction</h4>
      <p>
        If you are married to or in a civil partnership with an Irish, UK, EEA,
        or Swiss national, or a non-EEA national holding a work permit in
        Ireland, you might be eligible to live in Ireland with your spouse or
        partner. For those from visa-required countries wanting to stay for more
        than three months, a long-stay visa or preclearance is necessary. If you
        are from a non-visa-required country, no visa or preclearance is needed
        unless your sponsor is a UK national.
      </p>
      <p>
        The processing time for this visa typically ranges from four to six
        months. It is advisable to wait for the visa decision before making any
        travel arrangements.
      </p>
      <h4>How to Apply</h4>
      <p>Ensure that:</p>
      <ul>
        <li>Your spouse or partner qualifies as a sponsor for this visa.</li>
        <li>
          Your sponsor meets the required minimum earnings threshold, which
          varies based on their status.
        </li>
        <li>You are ordinarily resident outside Ireland.</li>
        <li>You are of good character and standing.</li>
        <li>You intend to live together permanently with your sponsor.</li>
      </ul>
      <p>
        The application process is completed online. After filling out the
        online form, print, sign, and date it, then submit it along with your
        supporting documents. Biometrics may also be required.
      </p>
      <p>
        <strong>Important:</strong> Providing false or misleading information
        may result in visa refusal and could bar you from obtaining an Irish
        visa for up to five years.
      </p>
      <h4>Eligibility & Work Permission</h4>
      <p>
        Sponsored by an Irish National: If your sponsor is an Irish national,
        you can apply for this visa immediately and, if approved, receive a
        Stamp 4, allowing you to live and work in Ireland without an employment
        permit.
      </p>
      <p>
        Sponsored by a Non-EEA national on a Critical Skills Employment Permit:
        You can apply immediately and will receive a Stamp 1G, permitting you to
        live and work in Ireland without an employment permit.
      </p>
      <p>
        Sponsored by a Non-EEA national on a General Skills Employment Permit:
        You may apply only after the sponsor has held the permit for one year.
        If approved, you will receive a Stamp 3, which requires you to obtain a
        separate work permit to work in Ireland.
      </p>
      <p>
        Sponsored by a UK National: You can apply immediately and, if approved,
        receive a Stamp 4, allowing you to live and work in Ireland without an
        employment permit.
      </p>
      <p>
        Sponsored by an EEA or Swiss National: Apply immediately and receive a
        Stamp 4 if approved, allowing you to live and work in Ireland without an
        employment permit.
      </p>
    </div>
  );
};

const DeFactoPartner = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>De Facto Partner Visa</h3>
      <h4>Introduction</h4>
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
      <h4>How to Apply</h4>
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
      <h4>Eligibility & Work Permission</h4>
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

const ElderlyParent = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Elderly Parent Visa</h3>
      <h4>Introduction</h4>
      <p>
        If you are an elderly relative of an Irish, UK, EEA, or Swiss national,
        or a non-EEA national with a work permit in Ireland, you may be eligible
        to live with your children in Ireland. If you are from a visa-required
        country and wish to stay for more than three months, you must apply for
        a long-stay visa. Non-visa-required country nationals do not need a visa
        or preclearance unless the sponsor is a UK National.
      </p>
      <h4>How to Apply</h4>
      <p>Ensure that:</p>
      <ul>
        <li>Your children qualify as sponsors.</li>
        <li>The sponsor meets the minimum earnings requirement.</li>
        <li>You are ordinarily resident outside Ireland.</li>
        <li>You are of good character.</li>
        <li>
          The sponsor has been legally resident in Ireland for at least three
          years.
        </li>
      </ul>
      <p>
        Submit your application online, print, sign, and date the form, and
        provide necessary documentation. Biometrics may be required.
      </p>
      <p>
        <strong>Important:</strong> Misleading information can result in visa
        refusal and a potential five-year ban.
      </p>
      <h4>Eligibility & Work Permission</h4>
      <p>
        Sponsored by an Irish National: Apply immediately and, if approved,
        receive a Stamp 0, allowing you to live in Ireland without being
        involved in employment.
      </p>
      <p>
        Sponsored by a Non-EEA national on a Critical Skills Employment Permit:
        Apply immediately and receive a Stamp 0 if approved, permitting you to
        live in Ireland without employment.
      </p>
      <p>
        Sponsored by a Non-EEA national on a General Skills Employment Permit:
        Apply only after the sponsor has held the permit for one year. If
        approved, you will receive a Stamp 0.
      </p>
      <p>
        Sponsored by a UK National: Apply immediately and receive a Stamp 0 if
        approved, allowing you to live in Ireland.
      </p>
      <p>
        Sponsored by an EEA or Swiss National: Apply immediately and receive a
        Stamp 0 if approved, allowing you to live in Ireland.
      </p>
    </div>
  );
};

const DependentChildren = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h3>Dependent Children Visa</h3>
      <h4>Introduction</h4>
      <p>
        If you are a dependent child of an Irish, UK, EEA, or Swiss national, or
        a non-EEA national work permit holder in Ireland, you may be eligible to
        live with your parent in Ireland. If you are from a visa-required
        country and wish to stay for more than three months, you need a
        long-stay visa. If you are from a non-visa-required country, no visa or
        preclearance is needed unless your sponsor is a UK National.
      </p>
      <h4>How to Apply</h4>
      <p>Ensure that:</p>
      <ul>
        <li>Your parent qualifies as a sponsor.</li>
        <li>The sponsor meets the minimum earnings requirement.</li>
        <li>You are ordinarily resident outside Ireland.</li>
        <li>You are under 18 or under 23 if in full-time education.</li>
      </ul>
      <p>
        Submit your application online, print, sign, and date the form, and
        provide required documentation. Biometrics may be required.
      </p>
      <p>
        <strong>Important:</strong> Misleading information can result in visa
        refusal and a potential five-year ban.
      </p>
      <h4>Eligibility & Work Permission</h4>
      <p>
        Sponsored by an Irish National: Apply immediately and, if approved,
        receive a Stamp 3, allowing you to live in Ireland, but you will need a
        separate work permit to work.
      </p>
      <p>
        Sponsored by a Non-EEA national on a Critical Skills Employment Permit:
        Apply immediately and receive a Stamp 3 if approved, permitting you to
        live in Ireland, though a separate work permit is needed to work.
      </p>
      <p>
        Sponsored by a Non-EEA national on a General Skills Employment Permit:
        Apply only after the sponsor has held the permit for one year. If
        approved, you will receive a Stamp 3, requiring a separate work permit.
      </p>
      <p>
        Sponsored by a UK National: Apply immediately and receive a Stamp 3 if
        approved, allowing you to live in Ireland, though a separate work permit
        is required.
      </p>
      <p>
        Sponsored by an EEA or Swiss National: Apply immediately and receive a
        Stamp 3 if approved, permitting you to live in Ireland with a separate
        work permit required.
      </p>
    </div>
  );
};
export default function Stamp6() {
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
          <h1>Stamp 6</h1>

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
              Spouse/ Civil Partner Visa
            </li>
            <li
              onClick={() => setSelectedMode(2)}
              className={selectedMode === 2 ? "selectedelement" : ""}
            >
              De Factor Partner
            </li>
            <li
              onClick={() => setSelectedMode(3)}
              className={selectedMode === 3 ? "selectedelement" : ""}
            >
              Elderly Parent
            </li>
            <li
              onClick={() => setSelectedMode(4)}
              className={selectedMode === 4 ? "selectedelement" : ""}
            >
              Dependant Childern
            </li>
          </ul>
        </div>
      </div>
      <div className="criticalpagecontent">
        {selectedMode === 1 && <SpouseCivilPartnerVisa />}
        {selectedMode === 2 && <DeFactoPartner />}
        {selectedMode === 3 && <ElderlyParent />}
        {selectedMode === 4 && <DependentChildren />}
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
