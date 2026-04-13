import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/footer";
import PageHeader from "../components/page-header/page-header";
import SectionTitle from "../components/section-title/section-title";
import Select from "react-select"
import "./book.css";

function Book() {
    const option = [
        {value :"1", label:"Standard Room"},
        {value :"2", label:"Delux Room"},
        {value :"3", label:"Family Room"},
        {value :"4", label:"Premium Room"}

    ]
  return (
    <>
      <Header />

      <PageHeader 
        title="Book Your Stay" 
        subtitle="Reserve your perfect room بسهولة"
      />

      <section className="book-section">

        <SectionTitle 
          title="Reservation Form"
          subtitle="Fill in your details"
        />

        <form className="book-form">

          {/* ROW 1 */}
          <div className="form-row">
            <div className="form-group">
              <label>Check In</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Check Out</label>
              <input type="date" />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="form-row">
            <div className="form-group">
              <label>Guests</label>
              <input type="number" placeholder="Number of guests" />
            </div>

            <div className="form-group">
              <label>Rooms</label>
              <input type="number" placeholder="Number of rooms" />
            </div>
          </div>

          {/* ROOM TYPE */}
          <div className="form-group">
            <label>Room Type</label>
          <Select options={option} placeholder={"Room type"}/>
          </div>

          {/* CONTACT */}
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="+251..." />
            </div>
          </div>

          {/* BUTTON */}
          <button type="submit" className="book-btn">
            Confirm Booking
          </button>

        </form>

      </section>

      <Footer />
    </>
  );
}

export default Book;