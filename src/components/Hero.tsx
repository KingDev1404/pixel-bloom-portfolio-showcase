
import React from 'react';
import PixelArt from './PixelArt';

const Hero = () => {
  return (
    <section id="home" className="hero-section relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="hero-content relative z-10">
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
              <a href="#contact" className="btn btn-primary pixel-btn mr-4">
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
          
          <div className="hero-visual relative">
            <PixelArt />
            
            {/* Enhanced floating elements with NFT style */}
            <div className="absolute inset-0">
              <div className="floating-element" style={{animationDelay: '0s', top: '10%', left: '10%'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 pixel-border rotate-12 flex items-center justify-center text-white font-bold">
                  WEB3
                </div>
              </div>
              <div className="floating-element" style={{animationDelay: '0.5s', top: '20%', right: '15%'}}>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 pixel-border -rotate-6 flex items-center justify-center">
                  🚀
                </div>
              </div>
              <div className="floating-element" style={{animationDelay: '1s', bottom: '25%', left: '20%'}}>
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 pixel-border rotate-45 flex items-center justify-center text-white">
                  ⚡
                </div>
              </div>
              <div className="floating-element" style={{animationDelay: '1.5s', top: '60%', right: '10%'}}>
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 pixel-border flex items-center justify-center">
                  💎
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
