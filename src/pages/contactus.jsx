import React from "react";
import "../styles/contactus.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
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
                <h5>+353 1 123 4567</h5>
              </div>
            </div>
            <div className="contactelements">
              <div className="contacticonleft">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contactright">
                <h5>help@poolberg.com</h5>
              </div>
            </div>
          </div>
          <div className="contactformright">
            <h4>Fill In Your Details</h4>
            <form>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                required
              />
              <div className="inputdivhalf">
                <input type="email" placeholder="Enter Your Email" required />

                <input
                  type="number"
                  placeholder="Enter Your Phone Number"
                  required
                />
              </div>
              <textarea placeholder="Enter Your Message" required></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
