import React from "react";
import "./section-title.css";

function SectionTitle({ title, subtitle, align = "center" }) {
  return (
    <div className={`section-title-wrapper ${align}`}>
      
      <h2 className="section-title">{title}</h2>

      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}

    </div>
  );
}

export default SectionTitle;