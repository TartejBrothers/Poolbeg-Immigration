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
            <div className="contactformright">
              <ContactFormRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
