import React, { useEffect, useRef } from 'react';
import './RotatingGallery.css';

const RotatingGallery = () => {
  const images = [
    { id: 1, src: '/images/gallery1.jpg', title: 'BMW M4', category: 'Sports' },
    { id: 2, src: '/images/gallery2.jpg', title: 'BMW i8', category: 'Electric' },
    { id: 3, src: '/images/gallery3.jpg', title: 'BMW X5', category: 'SUV' },
    { id: 4, src: '/images/gallery4.jpg', title: 'BMW 3 Series', category: 'Sedan' },
    { id: 5, src: '/images/gallery5.jpg', title: 'BMW 7 Series', category: 'Luxury' },
    { id: 6, src: '/images/gallery6.jpg', title: 'BMW Z4', category: 'Convertible' }
  ];

  const carouselRef = useRef(null);
  const angle = 360 / images.length;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let currentRotation = 0;
    const rotateCarousel = () => {
      currentRotation += 0.2;
      carousel.style.transform = `translateZ(-400px) rotateX(-10deg) rotateY(${currentRotation}deg)`;
      requestAnimationFrame(rotateCarousel);
    };

    rotateCarousel();

    return () => {
    };
  }, []);

  return (
    <div className="gallery-container">
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className="carousel-item"
              style={{
                transform: `rotateY(${angle * index}deg) translateZ(400px)`
              }}
            >
              <img src={image.src} alt={image.title} />
              <div className="carousel-info">
                <h3>{image.title}</h3>
                <p>{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RotatingGallery; 