import React from "react";

export default function IndustryCard({ image, name, content }) {
  return (
    <div className="industrycard">
      <div className="industrycardheader">
        <img src={image} alt="Industry" />
      </div>
      <div className="industrycardcontent">
        <h4>{name}</h4>
        {/* <p>{content}</p> */}
      </div>
    </div>
  );
}
