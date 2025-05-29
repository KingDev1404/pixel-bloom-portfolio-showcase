
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="pixel-badge">
                <span>👋 Hello World!</span>
              </div>
              <h1 className="hero-title">
                I'm <span className="text-gradient">Soham Chaudhary</span>
              </h1>
              <h2 className="hero-subtitle pixel-text">
                Full Stack Developer & DevOps Engineer
              </h2>
              <p className="hero-description">
                Dynamic and results-oriented developer with expertise in designing and deploying 
                scalable web applications using modern technologies. Currently expanding skills 
                in DevOps practices and B.Tech in Electronics and Telecommunication.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary pixel-btn me-3">
                  Get In Touch
                </a>
                <a href="#projects" className="btn btn-outline-light pixel-btn">
                  View Projects
                </a>
              </div>
              <div className="hero-social">
                <a href="https://github.com/SohamDev404" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/soham-chaudhary14" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:soham.chaudhary404@gmail.com" className="social-link">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual">
              <div className="pixel-art-container">
                <div className="floating-element" style={{animationDelay: '0s'}}>
                  <div className="pixel-cube"></div>
                </div>
                <div className="floating-element" style={{animationDelay: '0.5s'}}>
                  <div className="pixel-pyramid"></div>
                </div>
                <div className="floating-element" style={{animationDelay: '1s'}}>
                  <div className="pixel-sphere"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
