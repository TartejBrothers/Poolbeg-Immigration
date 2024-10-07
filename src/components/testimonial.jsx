import React, { useRef, useState, useEffect } from "react";
import arrowright from "../images/icons/arrowright.png";
import arrowleft from "../images/icons/arrowleft.png";
import "../styles/testimonial.css";
import TestimonialCard from "./elements/testimonialcard";

export default function Testimonial() {
  const cardWrapperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerView, setTestimonialsPerView] = useState(3);
  const totalTestimonials = 18;

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
            name="Suarabh Kapoor"
            content="I recently had the opportunity to consult Sanhita Deb from Poolbeg Immigration, and I can't recommend their services enough! Navigating the immigration process can be overwhelming, especially with the new guidelines and the ever-evolving landscape here in Ireland.

What stood out to me was the personalized approach they took in handling my case. From securing the right documents to offering clear guidance, they made the entire process feel much more manageable and stress-free. If you're dealing with work permits, naturalization, or any other immigration matters, I'd highly recommend reaching out to them for expert advice.

It's great to have a team like Poolbeg Immigration by your side when you're navigating such important life decisions!"
          />{" "}
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
            name="Prachi Navghare"
            content="I am absolutely thrilled to announce that my work permit has been approved! I would like to thank the entire team of CareerIreland for making this possible.
It's been quite the journey, and I couldn't have done it without the incredible team at CareerIreland. Their unwavering support and guidance have meant the world to me. From answering my countless questions to providing expert advice every step of the way, they've been there through it all. Their team is like a rock and will help you with any challenges in the process of securing your work permit. I'm beyond grateful for their help and highly recommend the team CareerIreland to anyone navigating the immigration process. Here's to new beginnings and endless possibilities!"
          />
          <TestimonialCard
            name="Debarna Banerjee"
            content="Thrilled to announce that I've successfully obtained my work permit with the unwavering support of CareerIreland Ireland! Navigating the process was challenging, but their expertise and encouragement made it manageable. I wholeheartedly recommend CareerIreland
Ireland to anyone embarking on this journey."
          />
          <TestimonialCard
            name="Gis Emmanuel"
            content="I'm thrilled to share some fantastic news - I've just received my work permit, and it's all thanks to the incredible support from Career Ireland! Their expert guidance and personalized assistance made the entire immigration process a breeze. From navigating paperwork to addressing all my questions, they were with me every step of the way. I can't recommend them enough for anyone seeking immigration assistance. Cheers to Career Ireland for making my dreams a reality!"
          />
          <TestimonialCard
            name="Rohit Taraporewala"
            content="I would highly recommended CareerIreland to anyone who is looking for solutions with their visa issuses.
The are very relaible, honest, and operate with integrity. Raghav Dixit - MBA,PMP® and the entire team of CareerIreland always takes the time to answer any question i may have, and provides me with all the option available. The best thing about this team is that they respond to queries very quickly.
As per my experince with them, if anyone is looking to resolve their visa issue just go with CareerIreland"
          />
          <TestimonialCard
            name="Vijendra Singh Rathore"
            content="I am delighted to announce that I have successfully obtained my
CSEP with the help of CareerIreland.
Their guidance and support were crucial in navigating the intricate application process. I am genuinely thankful for their responsible management of my case and consistent assistance. The professionalism and expertise demonstrated by the CareerIreland team played a significant role in reaching this milestone. I extend my sincere gratitude for their invaluable contribution to the approval of my CSEP."
          />
          <TestimonialCard
            name="Archana Bharda"
            content="I express my sincere gratitude to CareerIreland for their invaluable expertise, which turned a challenging process into an empowering and enriching journey.
The meticulous planning and strategic guidance provided by CareerIreland played a crucial role in navigating me through every stage of immigration process. Their unwavering support, clear communication, and prompt solutions made the entire experience smooth and manageable."
          />
          <TestimonialCard
            name="Phanindra Edara"
            content="I'm happy to share that I recently got my CSEP approved!
This is a huge milestone in my professional journey, and I'm grateful to everyone who has supported me through this.
A special shoutout to @CareerIreland who assisted me with this process.
Their wealth of expertise, professionalism, and deep knowledge played a pivotal role in making this achievement a reality. Throughout this journey, their unwavering support was invaluable, as they guided me at every twist and turn and promptly addressed all my questions.
I highly recommend them!"
          />
          <TestimonialCard
            name="Kisalay Srivastava"
            content="I wanted to take a moment to express my heartfelt appreciation for the services provided by the CareerIreland team! Their unwavering commitment and assistance have been invaluable, guiding me through the complexities of my work permit application process.
Their professionalism, expertise, and genuine care have not only made the journey smoother but also reaffirmed my trust in their exceptional services. The team's dedication and support have made a significant difference, and I am truly appreciative of their exceptional commitment to their clients.
If you are looking for reliable and expert assistance, I highly recommend CareerIreland"
          />
          <TestimonialCard
            name="Ramayya Botcha"
            content="Hi everyone,
I want to extend my sincere gratitude to CareerIreland for all their endeavour in securing my Visa extension.
Thanks to Raghav Dixit - MBA,PMP® and all the team members of CareerIreland on their exceptional professionalism on dealing with my application.
I strongly recommend CareerIreland for everyone who's seeking career advice or trying to find a job in Ireland. Trust me, they are experts.
Special thanks to @Deepthi for her close watch on my application and for the guidance she gave me throughout the process. Clean-cut Five Star rating for her.
Thank you very much once again to CareerIreland."
          />
          <TestimonialCard
            name="Aanya Singh"
            content="Hi All,

I want to share that l've got my Critical Skills Employment Permit!

The process was a bit complicated, but the CareerIreland team

provided me with the much-needed support in obtaining the work

permit. Their team assisted me every step of the way and made the

process much easier. Special thanks to Raghav Dixit - MBA,PMP®

Dixit - MBA,PMP®. I highly recommend them to anyone seeking

visa/work permit or Career-related guidance!"
          />
          <TestimonialCard
            name="Saurabh Singh"
            content="Hello my LinkedIn family,
I am writing this with utmost gratitude in my heart that I have got my Critical Skills Employment Permit (CSEP), Ireland approved. It wasn't an easy milestone to achieve as a lot of Non-EU candidates go through the struggle of getting this Stamp 1- Critical Skills Visa.
Despite challenges and few complications, CareerIreland made this super easy and comfortable for me with their guidance and support.
CareerIreland's expertise in handling work permits and visas deserve a big #shoutout! Their team of professionals made this entire process smooth and I was so impressed with their level of diligence and knowledge, in particular about the #immigration process, #workpermits, #careers and #jobs. I would highly recommend Careerreland to my friends or colleagues who are facing any sort of difficulty in regard to work permits or immigration process. Thank you so much Careerreland team and Raghav Dixit - MBA,PMP® for your time and guidance in the whole process."
          />
          <TestimonialCard
            name="Kenz Siby"
            content="Thanks to Careerreland and team for their assistance provided for my permit i was able get my CSEP (critical skills employement permit).
Lot of international students struggle with their application. I'd suggest if you're unsure definielty do take an expert advise they will provide you the best and most practical solution with their set of qualified consultants, many thanks to the Careerreland team again."
          />
          <TestimonialCard
            name="Siddhesh Kudav"
            content="Securing my Stamp 1G extension felt like an insurmountable task until I partnered with CareerIreland. Their team's professionalism, timely communication, and expert advice transformed what seemed impossible into a reality. Their proactive approach and personalized attention made all the difference. I am now looking forward to a brighter future in Ireland, and this was possible because of CareerIreland exceptional service."
          />
          <TestimonialCard
            name="Vishal Goda"
            content="I would like to give my sincere thanks to the CareerIreland team and Raghav Dixit - MBA,PMP® for helping me with all kinds of immigration and career guidance, especially at the time of helping me to get Stamp 1G extensions. I would recommend them to all my friends and colleagues. I wish the CareerIreland Team all the best and hope you have more such happy customers."
          />
        </div>
      </div>
    </div>
  );
}
