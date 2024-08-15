import React, { useState } from "react";
import emailjs from "@emailjs/browser";
export default function ContactFormRight() {
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
    <>
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
    </>
  );
}
