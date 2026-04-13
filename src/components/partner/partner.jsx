import React from "react";
import "./partner.css";
import SectionTitle from "../section-title/section-title";

import image1 from "../../asset/partner/Hail resort.png";
import image2 from "../../asset/partner/south start.jpg";
import image3 from "../../asset/partner/gezagh and elifinesh resort.png";
import image4 from "../../asset/partner/central-hotel.jpg";

function Partner() {

  const partners = [
    { img: image1, name: "Haile Resort" },
    { img: image2, name: "South Star Hotel" },
    { img: image3, name: "Gezagh & Elifinesh Resort" },
    { img: image4, name: "Central Hotel" },
  ];

  return (
    <section className="partner-section">

      <SectionTitle 
        title="Our Partners" 
        subtitle="Trusted collaborations with top hotels"
      />

      <div className="partner-img-group">
        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>
            <img src={partner.img} alt={partner.name} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default Partner;