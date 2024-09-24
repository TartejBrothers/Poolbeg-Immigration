import React from "react";
import CrossIcon from "../images/icons/crossicon.png";
import "../styles/acceptcookies.css";
export default function AcceptCookies({ isVisible, onClose }) {
  if (!isVisible) return null;
  return (
    <div className="acceptcookies">
      <img
        src={CrossIcon}
        alt="Close"
        className="closeicon"
        onClick={onClose}
      />
      <div className="checkboxdivaccept">
        <input
          type="checkbox"
          className="checkbox"
          id="accept-cookies"
          name="accept-cookies"
        />
        <label className="label" htmlFor="accept-cookies">
          accept the use of cookies for a better browsing experience and
          personalized content.
        </label>
      </div>
      <button className="acceptbutton" onClick={onClose}>
        Accept
      </button>
    </div>
  );
}
