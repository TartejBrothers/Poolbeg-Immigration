import React from "react";
import "../styles/home.css";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home"></div>
    </div>
  );
}
