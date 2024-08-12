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
      <div className="contactlocationmain">
        <div className="contactlocation">
          <div className="contactlocationleft">
            <div className="contactlocationelements">
              <h6>Visit Us At</h6>
              <p>
                6 Fern Road, Sandyford Business Park
                <br />
                Sandyford, Dublin 18, D18 FP98
                <br />
                Ireland
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
            <h3>Visits are by Appointment Only</h3>
          </div>
          <div className="contactlocationright">
            <iframe
              width="100%"
              height="400"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
