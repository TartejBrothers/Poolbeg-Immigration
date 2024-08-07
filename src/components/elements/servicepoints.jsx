import React from "react";

export default function ServicePoints({ header, content }) {
  return (
    <div className="servicebodyelement">
      <div className="servicebodyelementleft">
        <div className="circleelement">
          <div className="innercircleelement"></div>
        </div>
        <div className="lineelement"></div>
      </div>
      <div className="servicebodyelementright">
        <h3>{header}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
