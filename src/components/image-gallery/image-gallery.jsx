import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./image-gallery.css";

import img1 from "../../asset/show-room/norma room.jpg";
import img2 from "../../asset/show-room/king room.jpg";
import img3 from "../../asset/show-room/children room.jpg";

function Slide({ img }) {
  return (
    <div className="embla__slide">
      <img src={img} alt="Room" className="embla__img" />
    </div>
  );
}

function ImageGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [img1, img2, img3];

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // 🔥 Track active slide
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="embla">

      {/* VIEWPORT */}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, index) => (
            <Slide key={index} img={img} />
          ))}
        </div>
      </div>

 

      {/* DOTS */}
      <div className="embla__dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === selectedIndex ? "active" : ""}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>

    </div>
  );
}

export default ImageGallery;