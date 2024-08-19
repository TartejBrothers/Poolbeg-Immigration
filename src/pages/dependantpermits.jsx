import React from "react";
import "../styles/critical-skills.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import workpermit from "../images/workpermit1.jpeg";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";

export const DependantPermitsContent = () => {
  return (
    <div className="criticalskillsbodyelement">
      <h2>Dependants / Spouses / Partners of Permit Holders</h2>
      <p>
        If you hold a Critical Skills Employment Permit, General Employment
        Permit, or another eligible permit in Ireland, you may be able to bring
        your partner (De Facto), spouse, and dependent children (under 18) to
        live with you. Here’s how it works for different types of permits:
      </p>

      <h3>
        Critical Skills Employment Permit (CSEP) Holders and Researchers on a
        Hosting Agreement
      </h3>

      <h4>For Critical Skills Employment Permit Holders:</h4>
      <ul>
        <li>
          <strong>Spouse:</strong>
          <ul>
            <li>
              Granted <strong>Stamp 1G</strong> immigration permission.
            </li>
            <li>No employment permit required to work in Ireland.</li>
            <li>
              If from a visa-required country, an entry visa might be needed.
            </li>
          </ul>
        </li>
        <li>
          <strong>De Facto Partner:</strong>
          <ul>
            <li>
              Granted <strong>Stamp 1G</strong> immigration permission.
            </li>
            <li>No employment permit required to work in Ireland.</li>
            <li>
              If from a visa-required country, an entry visa might be needed.
            </li>
          </ul>
        </li>
        <li>
          <strong>Dependants:</strong>
          <ul>
            <li>
              Granted <strong>Stamp 3</strong> immigration permission based on
              the relationship with the permit holder.
            </li>
            <li>
              Must apply for a “Dependent Employment Permit” with a job offer to
              work in Ireland.
            </li>
            <li>
              If from a visa-required country, an entry visa might be needed.
            </li>
          </ul>
        </li>
      </ul>

      <h4>For Researchers on a Hosting Agreement:</h4>
      <p>
        The same rules apply as for Critical Skills Employment Permit holders
        regarding spouses, de facto partners, and dependants.
      </p>

      <h3>General Employment Permits (GEP) and Other Eligible Permits</h3>

      <h4>For General Employment Permits Holders:</h4>
      <ul>
        <li>
          <strong>Spouse or De Facto Partner:</strong>
          <ul>
            <li>
              Can apply to join you after one year of holding a valid permit.
            </li>
            <li>
              Must demonstrate a minimum annual salary of €30,000 for the past
              two years before applying.
            </li>
            <li>
              If you have dependent children, income levels are assessed based
              on weekly working family payment limits relative to family size.
            </li>
            <li>
              Granted <strong>Stamp 1G</strong> immigration permission.
            </li>
            <li>No employment permit required to work in Ireland.</li>
            <li>
              If from a visa-required country, an entry visa might be needed.
            </li>
          </ul>
        </li>
        <li>
          <strong>Dependants:</strong>
          <ul>
            <li>
              Granted <strong>Stamp 3</strong> immigration permission based on
              their relationship with the permit holder.
            </li>
            <li>
              Must apply for a “Dependent Employment Permit” with a job offer to
              work in Ireland.
            </li>
            <li>
              If from a visa-required country, an entry visa might be needed.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Key Points:</h3>
      <ul>
        <li>
          <strong>Stamp 1G:</strong> Allows spouses and de facto partners of
          Critical Skills Employment Permit holders to work without a separate
          employment permit.
        </li>
        <li>
          <strong>Stamp 3:</strong> Allows dependants of Critical Skills
          Employment Permit holders to live in Ireland but requires a separate
          employment permit for work.
        </li>
        <li>
          <strong>Entry Visas:</strong> For dependants, spouses, or partners
          from visa-required countries, entry visas might be necessary before
          they can enter Ireland.
        </li>
      </ul>
    </div>
  );
};

export default function DependantPermits() {
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
          <h1>Dependants/ Spouses/ Partners of Permit Holders</h1>
          <p>
            If you hold a Critical Skills Employment Permit, General Employment
            Permit, or another eligible permit in Ireland, you may be able to
            bring your partner (De Facto), spouse, and dependent children (under
            18) to live with you. Here’s how it works for different types of
            permits:
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
          <DependantPermitsContent />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
