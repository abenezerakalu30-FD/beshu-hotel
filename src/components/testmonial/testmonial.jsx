import React from "react";
import "./testimonial.css";
import { Quote } from "lucide-react";

/* Card */
function TestimonialCard({ text, name }) {
  return (
    <div className="testimonial-card">
      <Quote className="testimonial-icon" />
      <p className="testimonial-text">{text}</p>
      <h3 className="client-name">{name}</h3>
    </div>
  );
}

function Testimonial() {
  const testimonials = [
    {
      text: "I found Beshu Hotel very comfortable during my travels.",
      name: "Asefa Hailu",
    },
    {
      text: "I really appreciate the commitment and cleanliness of the hotel.",
      name: "Abenzer Akalu",
    },
    {
      text: "Thank you for your great service and dedication.",
      name: "Bekelu Tadele",
    },
  ];

  return (
    <section className="testimonial-section">
      {testimonials.map((item, index) => (
        <TestimonialCard
          key={index}
          text={item.text}
          name={item.name}
        />
      ))}
    </section>
  );
}

export default Testimonial;