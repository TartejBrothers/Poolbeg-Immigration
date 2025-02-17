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
            <div className="contactleftinner">
              <h6>For assistance on all things, contact us at:</h6>

              <div className="contactelements">
                <div className="contacticonleft">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
                <div className="contactright">
                  <h5>0874836445 </h5>
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
            <div className="contactleftouter">
              <a href="https://wa.me/353874836445" target="_blank">
                <div className="chatwhatsapp">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                  <p>Chat on WhatsApp</p>
                </div>
              </a>
              {/* <a
                href="https://calendly.com/debs-tcd/30min?back=1&month=2024-10"
                target="_blank"
              >
                <button className="consulationbutton">
                  <ion-icon name="calendar-outline"></ion-icon>Book A Free
                  Consultation
                </button>
              </a> */}
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
                3 Crumlin Village, Crumlin,
                <br />
                Dublin, 12
                <br />
                Ireland
                <br />
                D12X8N5
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9533.052402729678!2d-6.316479204003745!3d53.32064236039314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670c7d33c6397d%3A0x46935f99eafcd7b3!2s3%20Crumlin%20Village%2C%20Walkinstown%2C%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sin!4v1726237469685!5m2!1sen!2sin"
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
