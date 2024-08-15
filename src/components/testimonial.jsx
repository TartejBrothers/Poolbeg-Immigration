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
            name="Damien Abraham"
            content="I am very grateful for the exceptional service provided by CareerIreland. Their team managed my work permit application with such professionalism and efficiency that the process felt remarkably stress-free.
            
Being an aspiring immigrant contibuting to the economy it is very important for us to manage our legalities in the country in order to work and function stress free. Team handled all the intricacies of the application, provided clear guidance, and were always available for support. I would also like to extend my thanks to Raghav Dixit - MBA,PMP® for guiding and mentoring. Their efforts have made my transition to working in Ireland seamless. If you're in need of reliable immigration assistance, I strongly recommend Career Ireland for their outstanding service and expertise."
          />
          <TestimonialCard
            name="Yashvee Choubey"
            content="I want to extend my heartfelt gratitude to the CareerIreland
team for
their exceptional assistance with my work permit application. Initially, I was overwhelmed and disheartened by the criticality of my application. However, the Careerreland team stepped in and provided invaluable support.
They meticulously reviewed my application, identified its weaknesses, and pinpointed the errors that led to the initial criticality.
Through their expert guidance, we were able to address the issues effectively and submit a robust appeal. Thanks to their dedication and expertise, my application was ultimately approved.
The team's professionalism, thoroughness, and unwavering support made a significant difference in my journey. I cannot thank CareerIreland enough for their help and highly recommend their services to anyone facing similar challenges."
          />
          <TestimonialCard
            name="Snehal Kathare"
            content="I'm thrilled to share that l've recently obtained my work permit with the invaluable assistance of the Career Ireland team. Their unwavering support and expertise guided me through every step of the application process.
My special thanks to Raghav Dixit - MBA,PMP® for the guidance and motivation he gave me through out my job search journey. More then a mentor you are a wonderful friends with whom I can resolve anything. Without you this journey could be impossible for many of ous C. Thank you again for everything.
Career Ireland's dedicated professionals not only provided me with crucial advice and assistance but also ensured that my application was completed accurately and efficiently. Their commitment to helping individuals navigate the complexities of work permits is truly commendable.
I wholeheartedly recommend CareerIreland to anyone in need of assistance with their work permit application."
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
