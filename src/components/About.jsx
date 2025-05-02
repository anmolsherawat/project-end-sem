import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">

        <div className="personal-intro">
          <div className="intro-image">
            <img src="/images/anmol.jpg" alt="Anmol Sherawat" />
          </div>
          <div className="intro-content">
            <h3>Created by Anmol Sherawat</h3>
            <p>
              Hello! I'm Anmol Sherawat, a passionate web developer and BMW enthusiast. 
              I created this website to showcase my love for BMW vehicles and to demonstrate 
              my skills in modern web development.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/anmolsherawat/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/anmolsherawat/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              BMW (Bayerische Motoren Werke AG) is a German multinational company that produces luxury vehicles and motorcycles. 
              The company was founded in 1916 as a manufacturer of aircraft engines.
            </p>
            <p>
              Automobiles are marketed under the brands BMW, Mini, and Rolls-Royce, and motorcycles are marketed under the brand BMW Motorrad.
            </p>
          </div>
          <div className="about-image">
            <img src="/images/bmw-factory.jpg" alt="BMW Factory" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
