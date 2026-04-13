import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/footer";
import PageHeader from "../components/page-header/page-header";
import ContactForm from "../components/contact-form/contact-form";
import SectionTitle from "../components/section-title/section-title";

function Contact() {
  return (
    <>
      <Header />

      <PageHeader 
        title="Get In Touch" 
        subtitle="We’re here to help you anytime"
      />

      {/* CONTACT SECTION */}
      <section className="contact-section" style={{padding: 12}}>
        <SectionTitle 
          title="Contact Us" 
          subtitle="We’d love to hear from you"
        />

        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default Contact;