import React from "react";
import { contactInfo } from "./contact-info";
import InfoPair from "./InfoPair";

function ContactInfo(props) {
  const { name, title, residence, address, email } = contactInfo;
  return (
    <div className="contact-info">
      <h2>{name}</h2>
      <p>{title}</p>
      <div className="detail-info">
        <InfoPair name="Residence" value={residence} />
        <InfoPair name="Address" value={address} />
        <InfoPair name="Email" value={email} />
      </div>
      <div className="fancy-font">{name}</div>
    </div>
  );
}

export default ContactInfo;
