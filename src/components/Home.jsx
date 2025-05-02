import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play prevented:", error);
      });
    }
  }, []);

  return (
    <div className="home-container">
      <video
        ref={videoRef}
        className="background-video"
        src="/videos/bmw-promo.mp4"
        muted
        playsInline
        loop
        autoPlay
      />
      <div className="content-overlay">
        <h1>Experience the Ultimate Driving Machine</h1>
        <p>Discover the perfect blend of performance and luxury</p>
        <Link to="/gallery" className="explore-btn">Explore Models</Link>
      </div>
    </div>
  );
};

export default Home; 