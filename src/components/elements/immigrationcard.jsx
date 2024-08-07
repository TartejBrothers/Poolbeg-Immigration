import React from "react";
import { useNavigate } from "react-router-dom";
export default function Immigrationcard({ header, content, link }) {
  const navigate = useNavigate();
  const navigateTo = ({ link }) => {
    navigate(link);
  };
  return (
    <div className="immigrationcard">
      <div className="immigrationcardheader">
        <h3>{header}</h3>
      </div>
      <hr />
      <div className="immigrationcardcontent">
        <p>{content}</p>
      </div>
      <button className="learnmorebutton" onClick={() => navigateTo({ link })}>
        <p>Learn More</p>
      </button>
    </div>
  );
}
