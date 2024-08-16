import React from "react";
import "../styles/talktous.css";
import { useNavigate } from "react-router-dom";
export default function TalkToUs() {
  const navigate = useNavigate();
  const navigatetoContact = () => {
    navigate("/contact-us");
  };

  return (
    <div className="talktousmain">
      <h3>Need help with your situation?</h3>
      <p>
        Contact our expert immigration consultants for advice on your
        immigration stamp permissions and how you can reunite with your loved
        ones in Ireland as quickly as possible.
      </p>
      <button className="learnmorebutton" onClick={navigatetoContact}>
        Talk to Us
      </button>
    </div>
  );
}
