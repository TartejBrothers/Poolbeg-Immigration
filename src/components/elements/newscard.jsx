import React from "react";

export default function Newscard({ image, header, date }) {
  return (
    <div className="newscard">
      <img src={image} alt="News" />
      <div className="newscardbody">
        <p>{date}</p>
        <hr />
        <h3>{header}</h3>
      </div>
    </div>
  );
}
