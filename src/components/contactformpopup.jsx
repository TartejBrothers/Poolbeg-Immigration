import React from "react";
import "../styles/contactformpopup.css";

import ContactFormRight from "./contactformright";
import CrossIcon from "../images/icons/crossicon.png";
export default function ContactFormPopup({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={CrossIcon}
          alt="Close"
          className="closeicon"
          onClick={onClose}
        />
        {/* <ContactForm />
         */}
        <div className="contactusbody">
          <h1>Contact Us</h1>
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
      </div>
    </div>
  );
}
