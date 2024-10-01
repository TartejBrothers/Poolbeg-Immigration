import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/aboutus.css";
import ServicePoints from "../components/elements/servicepoints";
import IndustriesServed from "../components/industriesserved";
import ServicesCard from "../components/elements/servicescard";
import employeehome from "../images/employershome.jpg";
import userhome from "../images/individualshome.png";
export default function AboutUs() {
  return (
    <div className="aboutmain">
      <Navbar />
      <div className="aboutusmainheader">
        <h1>About Poolbeg Immigrations</h1>
        <p>
          At Poolbeg Immigrations, we are proud to be a trusted leader in
          providing end-to-end immigration solutions for both corporations and
          individuals. With over four years of industry expertise, we have built
          a solid reputation for delivering tailored and efficient immigration
          services. Our deep knowledge of non-EU immigration laws ensures that
          every client receives the most accurate and up-to-date guidance.
        </p>
      </div>
      <div className="aboutheader">
        <h2>Comprehensive Services</h2>
        <p>
          Our expertise spans a broad range of immigration services, including:
        </p>
        <br />
        <ul>
          <li>Naturalization Applications</li>
          <li>Join Family Visas</li>
          <li>Dependent Spouse and De Facto Partner Visas</li>
          <li>Stamp 0 (Elderly Dependent Parent) Visas</li>
          <li>Stamp 4 and Stamp 5 Applications</li>
          <li>
            Work Permits (Critical Skills Employment Permits and General Work
            Permits)
          </li>
          <li>Short Stay - Tourist & Visit Visas</li>
          <li>Student Visa Applications</li>
          <li>EU Treaty Rights</li>
          <li>Labour Market Means Test</li>
          <li>Entrepreneur Visa</li>
          <li>De Facto Partner Visa</li>
        </ul>

        <h2>Our Journey and Purpose</h2>
        <p>
          Poolbeg Immigrations was born out of a desire to provide a more
          personal, empathetic approach to immigration services. As a subsidiary
          of a well-established parent company, we have successfully guided
          numerous clients through complex immigration processes. However, what
          makes us truly unique is that many of our consultants have personally
          experienced the immigration journey themselves. This first-hand
          understanding drives our passion to offer practical solutions and
          genuine support to those navigating the often overwhelming immigration
          landscape.
        </p>

        <h2>What Sets Us Apart</h2>
        <p>
          At Poolbeg, we focus on more than just legal expertise—we build
          relationships. We know that every immigration case is unique, and we
          treat it as such. With a 100% success rate, we only take on cases
          where we are confident of achieving a positive outcome, ensuring that
          you can trust us with one of the most important steps in your life.
        </p>
        <p>
          What differentiates us from the competition is our personalized
          approach and commitment to excellence. We manage the entire process,
          handling documentation, legal requirements, and any potential
          obstacles, allowing our clients to move forward with confidence and
          clarity.
        </p>

        <h2>Your Partner in Immigration</h2>
        <p>
          Whether you’re a corporation seeking to bring international talent to
          Ireland or an individual navigating the intricacies of visa
          applications, Poolbeg Immigration is your reliable partner. Our unique
          blend of legal expertise and personal experience empowers us to offer
          tailored solutions that meet your specific needs. At Poolbeg
          Immigrations, we understand that your immigration journey is about
          building a future—and we’re here to make that journey smoother, more
          certain, and fully supported.
        </p>
      </div>
      <div className="homeservices missionsection">
        <h1 className="colorred">Mission Statement</h1>

        <p>
          At Poolbeg Immigrations, our mission is to provide personalized,
          empathetic, and expert immigration solutions that empower non-EU
          individuals and businesses to seamlessly navigate Ireland's
          immigration process. With firsthand experience and in-depth knowledge,
          we are dedicated to making the journey smoother, ensuring every client
          feels supported, informed, and confident in building their future in
          Ireland."
        </p>
      </div>
      <div className="homeservices aboutusvisionelement">
        <h1 className="colorred">Vision Statement</h1>
        <div className="aboutusvision">
          <ul>
            <li>
              At Poolbeg Immigrations, we envision a world where immigration is
              not a barrier but a bridge—one that connects people with
              opportunities and new beginnings, guided by expertise and
              compassion.
            </li>

            <li>
              At Poolbeg Immigrations, we strive to lead with expertise,
              empathy, and a relentless commitment to delivering successful
              outcomes, making immigration a positive and empowering experience
              for all.
            </li>
            <li>
              Our vision is to build a world where immigration is not a
              challenge but a stepping stone to a brighter future, offering
              clarity, support, and expert solutions every step of the way.
            </li>

            <li>
              We aspire to be the go-to partner for individuals and businesses
              navigating immigration, ensuring every journey is met with
              precision, care, and confidence in achieving a successful outcome.
            </li>
          </ul>
        </div>
      </div>
      <div className="homeservices corevalues">
        <div className="aboutusvision">
          <h1 className="colorred centertext">Core Values</h1>
          <ul>
            <li>
              <strong>Empathy:</strong> We understand the emotional and personal
              challenges of immigration because many of us have been through the
              journey ourselves. We approach every client with compassion,
              ensuring they feel supported and heard throughout the process.
            </li>
            <li>
              <strong>Integrity:</strong> At Poolbeg Immigrations, we hold
              ourselves to the highest ethical standards. We provide honest,
              transparent advice, only taking on cases where we are confident in
              delivering positive outcomes.
            </li>
            <li>
              <strong>Excellence:</strong> We strive for excellence in
              everything we do, from our legal expertise to our client
              relationships. Our attention to detail and commitment to quality
              ensures that every case is handled with precision and care.
            </li>
            <li>
              <strong>Trust:</strong> With a 100% success rate, trust is the
              foundation of our business. Our clients know they can rely on us
              to provide accurate guidance, manage their documentation, and
              navigate the complexities of immigration with confidence.
            </li>
            <li>
              <strong>Personalization:</strong> We believe every immigration
              journey is unique, and we take the time to understand each
              client's needs, tailoring our services to provide customized
              solutions that best fit their specific situation.
            </li>
            <li>
              <strong>Client-Centered Approach:</strong> Our clients are at the
              heart of everything we do. We prioritize their needs, offering
              personalized support and ensuring a seamless, stress-free
              immigration process.
            </li>
            <li>
              <strong>Innovation:</strong> We continuously seek to improve and
              stay ahead of immigration trends and regulations, ensuring our
              clients benefit from the most up-to-date, innovative solutions in
              the immigration space.
            </li>
            <li>
              <strong>Accountability:</strong> We take full responsibility for
              guiding our clients through the complexities of immigration. From
              start to finish, we manage the process, ensuring transparency and
              clear communication every step of the way.
            </li>
          </ul>
        </div>
      </div>

      <div className="homeservices servicemainbody graybgsection">
        <h1>Our Services</h1>

        <div className="servicesrow">
          <ServicesCard
            image={employeehome}
            heading={"For Employers"}
            content={
              "We enable businesses to hire non-EU nationals by processing your work visa applications."
            }
            headingservice={"Top Services"}
            services={[
              "Trusted Partnership Registration",
              "Critical Skills Employment Permits",
              "General Employment Permits",
              "Visa Applications",
            ]}
            link={"home"}
          />
          <ServicesCard
            image={userhome}
            heading={"For Individuals"}
            content={
              "We provide advice and assistance to individuals with immigration support in Ireland."
            }
            headingservice={"Top Services"}
            services={[
              "Naturalisation",
              "Join Family Visa",
              "Dependent Spouse Visa",
              "Stamp 0 Dependent Parents",
            ]}
            link={"home"}
          />
        </div>
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
          {/* <ServicePoints
            header="Dedicated account manager"
            content="Access to the consultant on the phone for quick support without the barrier of a receptionist."
          /> */}
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
