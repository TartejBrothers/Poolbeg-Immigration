import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/dataprivacy.css";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contactform";
export default function CookiePolicy() {
  const navigateTo = useNavigate();
  return (
    <div className="home">
      <Navbar />
      <div className="dataprivacy">
        <h1>Our Cookie Policy</h1>
        <p>
          Welcome to Poolbeg Immigration. This Cookies Policy is designed to
          inform you about the types of cookies and similar tracking
          technologies we use on our website, how we use them, and your choices
          regarding their use.
        </p>
      </div>
      <div className="dataprivacybody">
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your device when you
          visit a website. They are widely used to make websites work more
          efficiently and to provide information to website owners.
        </p>

        <h2>Types of Cookies We Use</h2>

        <h4>1 - Necessary Cookies</h4>
        <p>
          These cookies are essential for the operation of our website. They
          enable basic functions like page navigation and access to secure areas
          of the website. Our website cannot function properly without these
          cookies.
        </p>

        <h4>2 - Performance Cookies</h4>
        <p>
          These cookies allow us to analyze how visitors use our website, so we
          can measure and improve its performance. For example, they help us
          understand which pages are the most and least popular and see how
          visitors move around the site.
        </p>

        <h4>3 - Functionality Cookies</h4>
        <p>
          These cookies enable our website to provide enhanced functionality and
          personalization. They may be set by us or by third-party providers
          whose services we have added to our pages.
        </p>

        <h4>4 - Targeting Cookies</h4>
        <p>
          These cookies may be set through our website by our advertising
          partners. They may be used by those companies to build a profile of
          your interests and show you relevant advertisements on other sites.
        </p>

        <h2>Your Choices Regarding Cookies</h2>
        <p>
          You have the right to choose whether or not to accept cookies. Most
          web browsers automatically accept cookies, but you can usually modify
          your browser setting to decline cookies if you prefer. However, please
          note that disabling cookies may affect your experience on our website.
        </p>

        <h2>Consent</h2>
        <p>
          By using our website, you consent to the use of cookies as described
          in this Cookies Policy. If you do not agree to the use of cookies,
          please disable them through your browser settings or refrain from
          using our website.
        </p>

        <h2>Changes to this Cookies Policy</h2>
        <p>
          We reserve the right to update this Cookies Policy at any time. We
          will notify you of any changes by posting the updated policy on our
          website with the effective date.
        </p>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
