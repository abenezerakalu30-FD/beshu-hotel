import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h1 className="hero-title">
          Find Your Perfect Stay
        </h1>

        <p className="hero-text">
          Luxury rooms, modern comfort, and unforgettable experiences — all in one place.
        </p>

        <button className="hero-btn">
          Explore Rooms
        </button>
      </div>

      {/* RIGHT BOOKING CARD */}
      <div className="hero-card">
        <h3>Book Your Stay</h3>

        <div className="card-group">
          <label>Check In</label>
          <input type="date" />
        </div>

        <div className="card-group">
          <label>Check Out</label>
          <input type="date" />
        </div>

        <div className="card-group">
          <label>Guests</label>
          <input type="number" placeholder="2" />
        </div>

        <button className="card-btn">
          Check Availability
        </button>
      </div>

    </section>
  );
}

export default Hero;