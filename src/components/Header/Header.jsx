import React, { useState } from "react";
import "./Header.css";
import logo from "../../asset/logo/beshu-logo.png";
import {Menu,X} from "lucide-react"
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Room", path: "/room" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header>

      {/* LOGO */}
      <img src={logo} alt="Beshu Logo" className="nav-brand" />

      {/* NAVBAR */}
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link, index) => (
          <a
            key={index}
            Link={link.path}
            className="nav-link"
            onClick={() => setMenuOpen(false)} // close on click
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* BUTTON */}
      <a href="/book" className="nav-btn">Book now</a>
      {/* HAMBURGER */}
      <div
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
          {menuOpen ? <X /> : <Menu />}
      </div>

      {/* OVERLAY (blur background) */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

    </header>
  );
}

export default Header;