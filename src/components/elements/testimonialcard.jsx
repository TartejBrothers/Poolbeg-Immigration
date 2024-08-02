import React from "react";
import star from "../../images/icons/star.svg";
export default function testimonialcard({ name, content }) {
  return (
    <div className="card-item">
      <div className="testimonial">
        <div className="testimonialstars">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <p>{content}</p>
        <h4>{name}</h4>
      </div>
    </div>
  );
}
