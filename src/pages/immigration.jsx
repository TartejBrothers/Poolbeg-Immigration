import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/immigration.css";
// import { useNavigate } from "react-router-dom";
import immigrationimage from "../images/icons/immigration.jpeg";
import Immigrationcard from "../components/elements/immigrationcard";
import TalkToUs from "../components/talktous";

export default function Immigration() {
  // const navigate = useNavigate();
  return (
    <div className="immigrationmain">
      <Navbar />
      <div className="immigrationheader">
        <div className="workheaderleft">
          <h1>Irish Immigration Support and Services</h1>

          <p>
            If you are looking to apply for an entry visa to enter Ireland for
            holidays, to study in Ireland, to move in with your partner who is
            an Irish national, or to apply for Irish citizenship, our
            experienced immigration consultants can assist you with any
            immigration matter.
          </p>
        </div>
        <div className="workheaderright">
          <img src={immigrationimage} alt="Immigration" />
        </div>
      </div>
      <div className="immigrationbody">
        <div className="immigrationbodyelement">
          <h3>Entering Ireland</h3>
          <p>
            Coming to work, study, short-term visit, and family visas in
            Ireland.
          </p>
        </div>

        <div className="immigrationbodyelementcolumnshalf">
          <Immigrationcard
            header="Work Visa"
            content="If you wish to work in Ireland you need to have an Employment Permit, which is issued by the Department of Enterprise, Trade and Employment (DETE). Here you will find information about how to apply for the visa you need to travel to Ireland to work."
            link="/immigration/work-visa"
          />
          <Immigrationcard
            header="Study Visas"
            content="If you wish to study in Ireland, you must be enrolled in a full-time course on the Interim List of Eligible Programmes(ILEP).  Here you will find information about how to apply for the visa you need to travel to Ireland to study."
            link="/immigration/study-visa"
          />
          <Immigrationcard
            header="Short-Term Visas"
            content="If you want to take a holiday or a short break in Ireland, you can visit for less than 90 days. If you are from a visa-required country, you must apply for a Short Stay ‘C’ Tourist Visa."
            link="/immigration/short-term-visa"
          />
          <Immigrationcard
            header="Family Visas"
            content="Discover Spouse/ Civil Partner Visa, De Factor Partner, Elderly Parent, and Dependent Children."
            link="/immigration/family-visa"
          />
        </div>
        <div className="immigrationbodyelement">
          <h3>Status Change Within Ireland</h3>
          <p>
            Spouse/Civil Partner, Parent of an Irish Child, De Facto Partner,
            and Change of Immigration Permission.
          </p>
        </div>
        <div className="immigrationbodyelementcolumnshalf">
          <Immigrationcard
            header="Spouse/Civil Partner"
            content="Allows non-Irish nationals to join their spouse/civil partner who is an Irish citizen or employment permit holder in Ireland."
            link="/immigration/spouse-visa"
          />
          <Immigrationcard
            header="De Facto Partner Visa"
            content="Allows a De Facto partner who is in a relationship with an Irish citizen or employment permit holder to stay in Ireland. "
            link="/immigration/de-facto-partner-visa"
          />
          <Immigrationcard
            header="Parent of an Irish Child"
            content="If you are the parent of an Irish citizen child, you may be eligible for permission to remain in Ireland on this basis. All applications for permission to remain as the parent of an Irish citizen child are examined on a case-by-case basis."
            link="/immigration/parent-of-an-irish-child-visa"
          />
          <Immigrationcard
            header="Change of Immigration Permission"
            content="Allows people who holds a valid permission, represented by a current Irish Residence Permit (IRP card) to change the type of immigration permission or stamp they have if their circumstances change."
            link="/immigration/change-of-immigration-permission"
          />
        </div>
        <div className="immigrationbodyelement">
          <h3>Citizenship & Residency</h3>
          <p>
            Stamp 4, Stamp 5 (Without Condition As To Time), Stamp 6 (Irish
            Citizenship), and Other Irish Immigration Stamps.
          </p>
        </div>

        <div className="immigrationbodyelementcolumnshalf">
          <Immigrationcard
            header="Stamp 4"
            content="Stamp 4 permission enable non-EEA nationals to live, work, invest, do business, and study in Ireland. "
            link="/immigration/stamp-4"
          />
          <Immigrationcard
            header="Stamp 5"
            content="Stamp 5, also known as ‘Without condition as to time’ permission, allows minimum 8 years of legal residency to live and work in Ireland."
            link="/immigration/stamp-5"
          />
          <Immigrationcard
            header="Stamp 6 (Irish Citizenship)"
            content="Stamp 6 is the permission to remain in Ireland without condition if the holder has dual nationality or citizenship."
            link="/immigration/stamp-6"
          />
          <Immigrationcard
            header="Other Irish Immigration Stamps"
            content="Discover Stamp 0, Stamp 1, Stamp 1H, Stamp 1A, Stamp 2, Stamp 2A, Stamp 3, and Stamp 4D."
            link="/immigration/other-irish-immigration-stamps"
          />
        </div>
      </div>
      <TalkToUs />
      <Footer />
    </div>
  );
}
