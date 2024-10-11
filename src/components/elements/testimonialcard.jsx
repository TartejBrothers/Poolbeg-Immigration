import React, { useState } from "react";
import star from "../../images/icons/star.svg";
import TestimonialPopup from "../testimonialpopup";
export default function TestiominalCard({ name, content }) {
  const [isTestimonialExpaned, setIsTestimonialExpaned] = useState(false);
  const toggleTestimonial = () => {
    setIsTestimonialExpaned(!isTestimonialExpaned);
  };
  return (
    <div className="card-item testimonial-card">
      <div className="testimonial">
        <div className="testimonialstars">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>

        <p>
          {content.split(" ").slice(0, 40).join(" ")}
          {content.split(" ").length > 40 && (
            <>
              ...
              <a className="readmore" onClick={toggleTestimonial}>
                Read More
              </a>
            </>
          )}
        </p>

        <h4>{name}</h4>

        <TestimonialPopup
          isVisible={isTestimonialExpaned}
          onClose={toggleTestimonial}
          name={name}
          content={content}
        />
      </div>
    </div>
  );
}
