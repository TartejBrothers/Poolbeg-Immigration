import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/dataprivacy.css";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";
export default function TandC() {
  const navigateTo = useNavigate();
  return (
    <div className="home">
      <Navbar />
      <div className="dataprivacy">
        <h1>Terms of Business with Poolbeg Immigration</h1>
        <p>
          Welcome to Poolbeg Immigrations. These Terms & Conditions outline the
          framework for the services we provide and your rights and
          responsibilities as our client. By engaging our services, you agree to
          comply with and be bound by these Terms. If you do not agree with
          these Terms, please refrain from using our services.
        </p>
      </div>
      <div className="dataprivacybody">
        <h2>1. Introduction</h2>
        <p>
          Poolbeg Immigrations specializes in delivering comprehensive
          immigration solutions tailored for both corporations and individuals.
          With over four years of industry experience, our consultancy is
          committed to providing personalized support and expertise in
          navigating the complex landscape of immigration law, particularly for
          the non-EU population in Ireland.
        </p>

        <h2>2. Services Provided</h2>
        <ul>
          <li>
            <strong>Naturalization Applications:</strong> Guidance and support
            throughout the process of applying for Irish citizenship.
          </li>
          <li>
            <strong>Join Family Visas:</strong> Assistance with family
            reunification applications for eligible relatives.
          </li>
          <li>
            <strong>Dependent Spouse and De Facto Partner Visas:</strong> Help
            in securing visas for spouses and partners.
          </li>
          <li>
            <strong>Stamp 0 (Elderly Dependent Parent) Visas:</strong> Support
            for bringing elderly dependent parents to Ireland.
          </li>
          <li>
            <strong>Stamp 4 and Stamp 5 Applications:</strong> Guidance on
            securing permission to remain in Ireland on various grounds.
          </li>
          <li>
            <strong>Work Permits:</strong> Application assistance for Critical
            Skills Employment Permits and General Work Permits, including the
            labour market means test.
          </li>
          <li>
            <strong>Visa Applications:</strong> Comprehensive services for
            Short-Stay (Type C) – Visit & Tourist Visas.
          </li>
          <li>
            <strong>Student Visa Applications:</strong> Help with the
            application process for international students wishing to study in
            Ireland.
          </li>
          <li>
            <strong>EU Treaty Rights:</strong> Help with freedom of movement
            within other member states.
          </li>
        </ul>

        <h2>3. Client Responsibilities</h2>
        <ul>
          <li>
            <strong>Provide Accurate Information:</strong> Furnish complete and
            accurate details regarding their immigration history, status, and
            any relevant personal information.
          </li>
          <li>
            <strong>Documentation:</strong> Supply all requested documentation
            promptly and maintain open communication regarding any developments
            in their circumstances.
          </li>
          <li>
            <strong>Cooperation:</strong> Respond to our inquiries in a timely
            manner and notify us of any changes that could affect their
            immigration applications.
          </li>
        </ul>

        <h2>4. Fees and Payment Terms</h2>
        <ul>
          <li>
            <strong>Service Fees:</strong> The fees for our services will be
            communicated clearly at the outset. We may offer a detailed
            breakdown of costs based on the specific services required.
          </li>
          <li>
            <strong>Payment Schedule:</strong> Payment is due upon acceptance of
            our proposal, unless otherwise agreed in writing. In certain cases,
            a deposit may be required before commencement of services.
          </li>
          <li>
            <strong>Refund Policy:</strong> All fees are non-refundable unless
            explicitly stated otherwise in writing. In cases where services
            cannot be rendered due to circumstances beyond our control, we may
            provide a partial refund at our discretion.
          </li>
        </ul>

        <h2>5. Confidentiality</h2>
        <p>
          We prioritize the privacy of our clients. All personal information and
          documentation provided to Poolbeg Immigrations will be treated as
          confidential. We will not disclose any client information to third
          parties without explicit consent, unless required by law or relevant
          authorities.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          While we aim for a 100% success rate in immigration applications, we
          cannot guarantee the outcome of any application. Poolbeg Immigrations
          shall not be liable for any direct, indirect, incidental, or
          consequential damages arising from the use of our services or from any
          delay or failure in the provision of services.
        </p>

        <h2>7. Termination of Services</h2>
        <p>
          Either party may terminate the service agreement with written notice
          if there is a breach of these Terms. In the event of termination, the
          client is responsible for payment of any outstanding fees for services
          rendered prior to the termination date.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These Terms & Conditions shall be governed by and construed in
          accordance with the laws of Ireland. Any disputes arising under or in
          connection with these Terms shall be subject to the exclusive
          jurisdiction of the courts of Ireland.
        </p>

        <h2>9. Amendments</h2>
        <p>
          Poolbeg Immigrations reserves the right to modify these Terms at any
          time. Clients will be notified of any significant changes. Continued
          use of our services following any modifications constitutes acceptance
          of the updated Terms.
        </p>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}
