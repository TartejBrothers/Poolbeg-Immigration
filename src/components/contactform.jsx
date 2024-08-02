import React from "react";
import "../styles/contactform.css";
export default function ContactForm() {
  return (
    <div className="contactform">
      <div className="contactformleft">
        <h2>Get in Touch</h2>
        <p>
          Call us at{" "}
          <font className="contacttextorange">+353 (01) 234 5678</font> or send
          us your request by filling in this form.
          <br />
          One of our consultants will reach out to you shortly.
        </p>
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
  );
}
