import React from "react";
import logo from "../images/icons/logo.png";
import IndustryCard from "../components/elements/industrycard";
export default function IndustriesServed() {
  return (
    <div className="homeindustries">
      <h2>Industries We Serve</h2>
      <div className="industriesrow">
        <IndustryCard
          image={logo}
          name={"Lorem Ipsum"}
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        />
        <IndustryCard
          image={logo}
          name={"Lorem Ipsum"}
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        />
        <IndustryCard
          image={logo}
          name={"Lorem Ipsum"}
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        />
        <IndustryCard
          image={logo}
          name={"Lorem Ipsum"}
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        />
        <IndustryCard
          image={logo}
          name={"Lorem Ipsum"}
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        />
      </div>
    </div>
  );
}
