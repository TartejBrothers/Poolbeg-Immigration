import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/aboutus.css";
import ServicePoints from "../components/elements/servicepoints";
import IndustriesServed from "../components/industriesserved";
export default function AboutUs() {
  return (
    <div className="aboutmain">
      <Navbar />
      <div className="aboutheader">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          aspernatur dignissimos beatae harum ipsam. Harum vitae laboriosam eos
          non accusamus cum nobis possimus iste voluptatibus ducimus provident,
          natus obcaecati vero sint hic deleniti eaque velit molestias
          aspernatur perferendis maiores debitis incidunt consequatur! Accusamus
          officiis sint consectetur facilis dolores excepturi rerum quaerat nemo
          minus? Debitis laboriosam magnam dolore vitae pariatur voluptatibus
          reiciendis, eligendi, modi harum minus dolorum, porro perferendis.
          Ipsam optio nam eum voluptatibus aut modi, laborum cupiditate harum
          quo quibusdam fugit magnam. Excepturi in quis quisquam, dolore
          laudantium, porro voluptate sint dolorum dicta sequi aspernatur
          tempore officiis blanditiis possimus ipsam.
        </p>
      </div>
      <div className="servicemainbody">
        <h1>Our Approach</h1>
        <p>
          Poolbeg Immigration focuses on delivering positive results to our
          clients and is dedicated to offering quality services
        </p>
        <div className="servicepoints">
          <ServicePoints
            header="Fast turnaround time"
            content="Full-time focus to operate efficiently and effectively to deliver
          results on time."
          />
          <ServicePoints
            header="Dedicated account manager"
            content="Access to the consultant on the phone for quick support without the barrier of a receptionist."
          />
          <ServicePoints
            header="Seamless application supports"
            content="Prepare files and manage immigration-related applications from start to finish for you."
          />
          <ServicePoints
            header="Fast-track your application"
            content="Follow up closely with the Irish department to track your application and liaise on your behalf."
          />
          <ServicePoints
            header="Professional advice and guidance"
            content="Stay abreast with the latest immigration changes in Ireland, ensuring you and your employees remain compliant with Immigration requirements."
          />
          <ServicePoints
            header="On-going Immigration consultations"
            content="Respond to regular enquires and act on your behalf in the events of immigration audit or difficult immigration matters, reviews, appeals, or cancellations."
          />
        </div>
      </div>
      <IndustriesServed />
      <Footer />
    </div>
  );
}
