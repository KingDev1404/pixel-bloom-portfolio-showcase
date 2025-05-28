
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darker-bg border-t-2 border-primary py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h5 className="text-xl font-bold pixel-text text-gradient mb-2">Soham Chaudhary</h5>
            <p className="text-gray-300 mb-2">Full Stack Developer & DevOps Engineer</p>
            <p className="text-gray-400">Building the future, one line of code at a time.</p>
          </div>
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-4 mb-4">
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
            <p className="text-gray-400 text-sm">
              © 2024 Soham Chaudhary. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
