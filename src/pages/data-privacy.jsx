import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/dataprivacy.css";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";
export default function DataPrivacy() {
  const navigateTo = useNavigate();
  return (
    <div className="home">
      <Navbar />
      <div className="dataprivacy">
        <h1>Our Data Privacy Policy</h1>
        <p>
          This document outlines how Poolbeg Immigration collect, use, store,
          and protect your personal information when you engage with our
          services. By using our services, you consent to the practices
          described in this Privacy Policy.
        </p>
      </div>
      <div className="dataprivacybody">
        <h2>1. Definitions</h2>
        <ul>
          <li>
            <strong>Company:</strong> Future Direct Professional Services
            Limited, located at 6 Future Direct, Fern Road, Sandyford Business
            Park, Sandyford, Dublin 18, D18FP98.
          </li>
          <li>
            <strong>Service:</strong> The services we provide through our
            website, which can be accessed at{" "}
            <a href="http://www.poolbegimmigration.com" target="_blank">
              www.poolbegimmigration.com
            </a>
            .
          </li>
          <li>
            <strong>Personal Data:</strong> Any information that identifies you
            or can be used to identify you, including but not limited to your
            name, contact details, and any unique identifiers.
          </li>
          <li>
            <strong>Data Controller:</strong> The Company, as defined under the
            General Data Protection Regulation (GDPR), responsible for deciding
            how your personal data is used and processed.
          </li>
        </ul>

        <h2>2. Data Collection and Use</h2>
        <h3>2.1 Types of Data Collected</h3>
        <ul>
          <li>
            <strong>Identification Details:</strong> Such as your name and
            identification number.
          </li>
          <li>
            <strong>Contact Information:</strong> Including email addresses and
            phone numbers.
          </li>
          <li>
            <strong>Payment Information:</strong> If applicable, for processing
            transactions.
          </li>
          <li>
            <strong>Usage Data:</strong> Information automatically collected
            about how you use our services, such as IP address, browser type,
            pages visited, and the time spent on those pages.
          </li>
        </ul>
        <p>
          We use cookies and similar tracking technologies to enhance your
          experience and analyze usage trends. For more information, please
          refer to our Cookies Policy.
        </p>

        <h3>2.2 Use of Personal Data</h3>
        <p>Your personal data may be used for various purposes, including:</p>
        <ul>
          <li>
            <strong>Service Provision:</strong> To provide, maintain, and
            improve our services.
          </li>
          <li>
            <strong>Account Management:</strong> To manage your account,
            including registration and profile management.
          </li>
          <li>
            <strong>Contract Fulfilment:</strong> To execute contracts and
            agreements with you.
          </li>
          <li>
            <strong>Communication:</strong> To send you updates, newsletters,
            marketing materials, and other information that may be of interest
            to you.
          </li>
          <li>
            <strong>Targeted Advertising:</strong> To deliver advertisements
            tailored to your interests.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with any mergers,
            acquisitions, or sale of assets.
          </li>
          <li>
            <strong>Internal Analysis:</strong> For research and analysis to
            improve our services.
          </li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li>
            <strong>With Service Providers:</strong> We may engage third-party
            companies and individuals to facilitate our service, perform
            service-related tasks, or assist us in analyzing how our service is
            used.
          </li>
          <li>
            <strong>For Business Transfers:</strong> If we are involved in a
            merger, acquisition, or asset sale, your personal data may be
            transferred.
          </li>
          <li>
            <strong>With Affiliates:</strong> We may share your information with
            our affiliates, in which case they will be required to honour this
            Privacy Policy.
          </li>
          <li>
            <strong>With Your Consent:</strong> For any other purposes with your
            explicit consent.
          </li>
        </ul>

        <h2>4. Data Retention and Transfer</h2>
        <p>
          We retain your personal data only for as long as necessary to fulfill
          the purposes outlined in this Privacy Policy. When your data is no
          longer required, we will securely delete it. Data may be transferred
          internationally; by using our services, you consent to this transfer
          and processing.
        </p>

        <h2>5. Rights Under GDPR</h2>
        <p>
          If you are located in the European Union, you have specific rights
          regarding your personal data, including:
        </p>
        <ul>
          <li>
            <strong>Right to Access:</strong> You can request copies of your
            personal data.
          </li>
          <li>
            <strong>Right to Rectification:</strong> You can request corrections
            to any inaccurate or incomplete data.
          </li>
          <li>
            <strong>Right to Erasure:</strong> You can request deletion of your
            personal data under certain circumstances.
          </li>
          <li>
            <strong>Right to Restrict Processing:</strong> You can request that
            we limit the processing of your personal data.
          </li>
          <li>
            <strong>Right to Data Portability:</strong> You can request a copy
            of your personal data in a structured, commonly used, and
            machine-readable format.
          </li>
          <li>
            <strong>Right to Object:</strong> You can object to the processing
            of your personal data.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information
          provided below.
        </p>

        <h2>6. Children’s Privacy</h2>
        <p>
          Our services are not intended for individuals under the age of 13. We
          do not knowingly collect personal data from children under 13. If we
          become aware that we have collected such data, we will take steps to
          delete it.
        </p>

        <h2>7. Links to Other Websites</h2>
        <p>
          Our service may contain links to third-party websites that are not
          operated by us. We have no control over and assume no responsibility
          for the content, privacy policies, or practices of these websites. We
          strongly advise you to review the privacy policy of any site you
          visit.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Any changes will be
          posted on this page, with an updated effective date. We may also
          notify you via email or through a notice on our service. We encourage
          you to review this Privacy Policy periodically for any changes.
        </p>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
