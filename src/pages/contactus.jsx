import React from "react";
import "../styles/contactus.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactFormRight from "../components/contactformright";
export default function ContactUs() {
  return (
    <div className="contactusmain">
      <Navbar />
      <div className="contactusbody">
        <h1>Contact Us</h1>
        <h4>
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us.
        </h4>
        <div className="contactusmainbody">
          <div className="contactleft">
            <h6>For assistance on all things, contact us at:</h6>
            <div className="contactelements">
              <div className="contacticonleft">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <div className="contactright">
                <h5>+353 89 947 1396 </h5>
              </div>
            </div>
            <div className="contactelements">
              <div className="contacticonleft">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contactright">
                <h5>info@poolbegimmigration.com</h5>
              </div>
            </div>
          </div>
          <div className="contactformright">
            <ContactFormRight />
          </div>
        </div>
      </div>
      <div className="contactlocationmain">
        <div className="contactlocation">
          <div className="contactlocationleft">
            <div className="contactlocationelements">
              <h6>Visit Us At</h6>
              <p>
                109 Windmill Park , Crumlin , Dublin, 12
                <br />
                Ireland
                <br />
                D12Y0YX
              </p>
            </div>

            <div className="contactlocationelements">
              <h6>Opening Hours</h6>
              <p>
                <b>Monday - Friday</b>
                <br />
                9am - 5pm
                <br />
                <b>Saturday</b>
                <br />
                10am - 4pm
              </p>
            </div>
          </div>
          <div className="contactlocationright">
            <iframe
              width="100%"
              height="400"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.2741963755534!2d-6.317220184162527!3d53.32044367997366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670c7cd6fd00bb%3A0xc212f915b538b81d!2s109%20Windmill%20Park%2C%20Crumlin%2C%20Dublin%2012%2C%20D12%20Y0YX!5e0!3m2!1sen!2sie!4v1690029060626!5m2!1sen!2sie"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Map"
            ></iframe>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
