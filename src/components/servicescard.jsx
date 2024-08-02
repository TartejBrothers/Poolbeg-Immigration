import React from "react";
// import { useNavigate } from "react-router-dom";
export default function ServicesCard({
  image,
  heading,
  content,
  headingservice,
  services,
  link,
}) {
  //   const navigate = useNavigate();
  const navigateToLink = (link) => {
    // navigate(link);
    console.log(link);
  };

  return (
    <div className="servicescard">
      <div className="servicescardtop">
        <img src={image} alt="Header" />
        <h4>{heading}</h4>
      </div>
      <div className="servicescardcontent">
        <p>{content}</p>
      </div>
      <hr />
      <div className="servicescardmain">
        <h5>{headingservice}</h5>
        <ul>
          {services.map((service, index) => {
            return <li key={index}>{service}</li>;
          })}
        </ul>

        <button onClick={navigateToLink(link)}>Learn More</button>
      </div>
    </div>
  );
}
