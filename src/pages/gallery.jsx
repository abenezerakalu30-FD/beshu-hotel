import React from 'react';
import Header from '../components/Header/Header';
import PageHeader from '../components/page-header/page-header';
import Footer from '../components/footer/footer';
import ImageGaller from '../components/image-gallery/image-gallery';
import SectionTitle from '../components/section-title/section-title';

function Gallery() {
  return (
    <>
      <Header />

      <PageHeader 
        title="Gallery" 
        subtitle="Explore our rooms, spaces, and experiences"
      />

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        
        <SectionTitle 
          title="Our Moments" 
          subtitle="A glimpse of luxury and comfort"
        />

        <ImageGaller />

      </section>

      <Footer />
    </>
  );
}

export default Gallery;