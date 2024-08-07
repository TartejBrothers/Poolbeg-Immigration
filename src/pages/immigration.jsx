import React from "react";
import Navbar from "../components/navbar";
import "../styles/immigration.css";
// import { useNavigate } from "react-router-dom";
import immigrationimage from "../images/icons/immigration.jpeg";
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
    </div>
  );
}
