import React, { useState } from "react";
import "./contact-form.css";
import { MapIcon, PhoneCallIcon, SendIcon } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

/* Reusable Item */
function ContactItem({ icon: Icon, children }) {
  return (
    <div className="text-group">
      <Icon className="contact-icon" />
      <span>{children}</span>
    </div>
  );
}

function ContactForm() {
  const [value,setValue] = useState();
  return (
    <section className="contact-form">
      
      {/* RIGHT SIDE */}
      <div className="contact-right">

        {/* CONTACT INFO */}
        <div className="contact-card">
          <ContactItem icon={MapIcon}>
            Atote, Hawassa, Ethiopia
          </ContactItem>

          <ContactItem icon={PhoneCallIcon}>
            +251 93 010 5437
          </ContactItem>
        </div>

        {/* SOCIAL LINKS */}
        <div className="contact-card">
          <ContactItem icon={FaFacebook}>
            <a href="#" className="contact-link">
              Beshu Tulu Hotel
            </a>
          </ContactItem>

          <ContactItem icon={FaInstagram}>
            <a href="#" className="contact-link">
              Beshu Tulu Hotel
            </a>
          </ContactItem>
        </div>

      </div>

      {/* LEFT SIDE (FORM) */}
      <form className="contact-left">

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
              <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                  defaultCountry="ET"
    />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type something..." />
        </div>

        <button type="submit" className="contact-btn">
          Send <SendIcon />
        </button>

      </form>
    </section>
  );
}

export default ContactForm;