import React from "react";
import "./page-header.css";

function PageHeader({ title, subtitle}) {
  return (
    <section 
      className="page-header"
    >
      <div className="overlay"></div>

      <div className="page-header-content">
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHeader;