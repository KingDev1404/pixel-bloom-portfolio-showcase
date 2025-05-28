
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top pixel-nav">
      <div className="container">
        <a className="navbar-brand pixel-text d-flex align-items-center" href="#home">
          <div className="pixel-character me-2">🎮</div>
          <span className="text-gradient">SOHAM.DEV</span>
        </a>
        
        <button 
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link pixel-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pixel-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pixel-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pixel-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pixel-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pixel-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
