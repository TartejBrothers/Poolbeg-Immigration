import React from "react";
import logo from "../images/icons/logo.png";
import IndustryCard from "../components/elements/industrycard";
import healthcare from "../images/icons/industries/healthcare.png";
import it from "../images/icons/industries/it.png";
import recruitment from "../images/icons/industries/recruitment.png";
import finance from "../images/icons/industries/finance.png";
import academic from "../images/icons/industries/academic.png";
import Pharmaceuticals from "../images/icons/industries/pharmaceutical.png";
import banking from "../images/icons/industries/banking.png";
import hospitality from "../images/icons/industries/hospitality.png";
export default function IndustriesServed() {
  return (
    <div className="homeindustries">
      <h2>Industries We Serve</h2>
      <div className="industriesrow">
        <IndustryCard
          image={healthcare}
          name={"Health Care"}
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        />
        <IndustryCard
          image={it}
          name={"Technology"}
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        />
        <IndustryCard
          image={academic}
          name={"Academics"}
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        />
        <IndustryCard
          image={finance}
          name={"Finance"}
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        />
        <IndustryCard
          image={recruitment}
          name={"Recruitment"}
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        />
        <IndustryCard
          image={Pharmaceuticals}
          name={"Pharmaceuticals"}
          content={""}
        />
        <IndustryCard
          image={banking}
          name={"Banking"}
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        />
        <IndustryCard
          image={hospitality}
          name={"Hospitality"}
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        />
      </div>
    </div>
  );
}
