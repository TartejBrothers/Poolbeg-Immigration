import React, { useState } from "react";
import "../styles/contactform.css";
import twitter from "../images/icons/twittercontact.svg";
import linkedin from "../images/icons/linkedincontact.svg";
import phonecontact from "../images/icons/phonecontact.png";
import emailcontact from "../images/icons/emailcontact.png";
import emailjs from "@emailjs/browser";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_tnhmq86";
    const templateId = "template_rbvaso9";
    const publicKey = "SbvegaP1b1gXHPkSL";
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

        alert("Message Sent Successfully");
      },
      (error) => {
        alert("Error Sending Message");
      }
    );
  };
  return (
    <div className="contactmain">
      <div className="contactform">
        <div className="contactformleft">
          <h2>Get In Touch With Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <div className="contactsocials">
            <ul>
              <li>
                <img src={twitter} alt="Twitter" />
              </li>
              <li>
                <img src={linkedin} alt="LinkedIn" />
              </li>
            </ul>
          </div>
          <div className="contactinfo">
            <div className="contactelement">
              <div className="leftcontactelement">
                <img src={phonecontact} alt="phone" />
              </div>
              <div className="rightcontactelement">
                <h3>Contact Us</h3>
                <p>+353 01 234 567</p>
              </div>
            </div>

            <div className="contactelement">
              <div className="leftcontactelement">
                <img src={emailcontact} alt="email" />
              </div>
              <div className="rightcontactelement">
                <h3>Email Us</h3>
                <p>info@careerireland</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contactformright">
          <h4>Fill In Your Details</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="inputdivhalf">
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="number"
                placeholder="Enter Your Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <textarea
              placeholder="Enter Your Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
