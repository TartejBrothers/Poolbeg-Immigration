import React from "react";
import "../styles/contactformpopup.css";
import star from "../images/icons/star.svg";
import ContactFormRight from "./contactformright";
import CrossIcon from "../images/icons/crossicon.png";
export default function TestimonialPopup({
  isVisible,
  onClose,
  name,
  content,
}) {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="card-item testimonial-popup">
        <div className="closeiconcontainer"></div>

        <div className="testimonial" onClick={(e) => e.stopPropagation()}>
          <div className="splitstars">
            <div className="testimonialstars">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <img
              src={CrossIcon}
              alt="Cross"
              onClick={onClose}
              className="splitstarscross"
            />
          </div>
          <p>{content}</p>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
}
