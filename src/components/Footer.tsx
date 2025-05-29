
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-content">
              <h5 className="text-gradient pixel-text">Soham Chaudhary</h5>
              <p>Full Stack Developer & DevOps Engineer</p>
              <p className="mb-0">Building the future, one line of code at a time.</p>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="footer-social">
              <a href="https://github.com/SohamDev404" className="social-link me-3">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/soham-chaudhary14" className="social-link me-3">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:soham.chaudhary404@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <p className="footer-copyright mt-3">
              © 2024 Soham Chaudhary. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
