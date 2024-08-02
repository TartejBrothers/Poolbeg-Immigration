import React, { useRef, useState, useEffect } from "react";
import arrowright from "../images/icons/arrowright.png";
import arrowleft from "../images/icons/arrowleft.png";
import "../styles/testimonial.css";
import TestimonialCard from "./elements/testimonialcard";

export default function Testimonial() {
  const cardWrapperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerView, setTestimonialsPerView] = useState(3);
  const totalTestimonials = 6;

  const updateTestimonialsPerView = () => {
    if (window.innerWidth <= 1000) {
      setTestimonialsPerView(1);
    } else {
      setTestimonialsPerView(3);
    }
  };

  useEffect(() => {
    updateTestimonialsPerView();
    window.addEventListener("resize", updateTestimonialsPerView);
    return () => {
      window.removeEventListener("resize", updateTestimonialsPerView);
    };
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, totalTestimonials - testimonialsPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    } else if (currentIndex < 0) {
      setCurrentIndex(0);
    }
  }, [testimonialsPerView, currentIndex, totalTestimonials]);

  const arrowPrev = () => {
    const cardWrapper = cardWrapperRef.current;
    const widthToScroll =
      cardWrapper.children[0].offsetWidth * testimonialsPerView;
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - testimonialsPerView);
      cardWrapper.scrollLeft -= widthToScroll;
    }
  };

  const arrowNext = () => {
    const cardWrapper = cardWrapperRef.current;
    const widthToScroll =
      cardWrapper.children[0].offsetWidth * testimonialsPerView;
    if (currentIndex < totalTestimonials - testimonialsPerView) {
      setCurrentIndex((prevIndex) => prevIndex + testimonialsPerView);
      cardWrapper.scrollLeft += widthToScroll;
    }
  };

  const totalScrolls = Math.ceil(totalTestimonials / testimonialsPerView);
  const currentScroll = Math.ceil((currentIndex + 1) / testimonialsPerView);

  return (
    <div className="testiominalsmain">
      <div className="testimonialheader">
        <h1>What Our Users Say</h1>
        <div className="bottomarrows">
          <button className="arrow prev" onClick={arrowPrev}>
            <img src={arrowleft} alt="Previous" />
          </button>
          <p>{`${currentScroll}/${totalScrolls}`}</p>
          <button className="arrow next" onClick={arrowNext}>
            <img src={arrowright} alt="Next" />
          </button>
        </div>
      </div>

      <div className="wrapper">
        <div className="card-wrapper" ref={cardWrapperRef}>
          <TestimonialCard
            name="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <TestimonialCard
            name="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <TestimonialCard
            name="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <TestimonialCard
            name="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <TestimonialCard
            name="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <TestimonialCard
            name="Lorem Ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
}
