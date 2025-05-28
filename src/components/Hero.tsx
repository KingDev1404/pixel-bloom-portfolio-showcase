
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-24 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-primary/10 border-2 border-primary px-4 py-2 text-sm pixel-text animate-pulse">
              <span>👋 Hello World!</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              I'm <span className="text-gradient">Soham Chaudhary</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl pixel-text text-gray-300">
              Full Stack Developer & DevOps Engineer
            </h2>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Dynamic and results-oriented developer with expertise in designing and deploying 
              scalable web applications using modern technologies. Currently expanding skills 
              in DevOps practices and B.Tech in Electronics and Telecommunication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="pixel-btn bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 font-semibold">
                Get In Touch
              </a>
              <a href="#projects" className="pixel-btn border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-dark-bg transition-colors">
                View Projects
              </a>
            </div>
            <div className="flex gap-4 pt-4">
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
          
          <div className="flex items-center justify-center h-96">
            <div className="relative w-96 h-96">
              <div className="floating-element absolute top-1/4 left-1/4" style={{animationDelay: '0s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary clip-path-cube animate-spin-slow"></div>
              </div>
              <div className="floating-element absolute top-1/2 right-1/4" style={{animationDelay: '0.5s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent clip-path-pyramid animate-bounce"></div>
              </div>
              <div className="floating-element absolute bottom-1/4 left-1/2" style={{animationDelay: '1s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
