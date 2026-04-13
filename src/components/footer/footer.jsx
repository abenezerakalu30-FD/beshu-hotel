import React from "react";
import "./footer.css";
import logo from "../../asset/logo/beshu-logo.png";
import { Map, PhoneCall } from "lucide-react";
import { FaEnvelope } from "react-icons/fa6";

function FooterSection({ title, children }) {
  return (
    <div className="footer-content">
      {title && <h2 className="footer-title">{title}</h2>}
      {children}
    </div>
  );
}

function Footer() {
  const quickLinks = ["Home", "Room", "Contact", "Blog"];
  const socialLinks = ["YouTube", "Instagram", "Facebook"];

  return (
    <footer className="footer">

      {/* BRAND */}
      <FooterSection>
        <img src={logo} alt="Beshu Logo" className="footer-brand" />
        <p className="footer-text">
          We are one of Ethiopia’s top hotels, offering secure and tech-powered rooms.
        </p>
        <button className="footer-btn">Book Now</button>
      </FooterSection>

      {/* LINKS */}
      <FooterSection title="Quick Links">
        {quickLinks.map((link, index) => (
          <a href="/" key={index} className="footer-link">{link}</a>
        ))}
      </FooterSection>

      {/* SOCIAL */}
      <FooterSection title="Connect">
        {socialLinks.map((link, index) => (
          <a href="/" key={index} className="footer-link">{link}</a>
        ))}
      </FooterSection>

      {/* CONTACT INFO */}
      <FooterSection title="Contact">
        <p className="footer-text"><Map/> Hawassa, Ethiopia</p>
        <p className="footer-text"><PhoneCall/> +251 93 010 5437</p>
        <p className="footer-text"><FaEnvelope/> info@beshu.com</p>
      </FooterSection>

      {/* NEWSLETTER */}
      <FooterSection title="Newsletter">
        <p className="footer-text">Subscribe for updates</p>
        <div className="newsletter">
          <input type="email" placeholder="Enter your email" />
          <button>Join</button>
        </div>
      </FooterSection>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Beshu Hotel. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;