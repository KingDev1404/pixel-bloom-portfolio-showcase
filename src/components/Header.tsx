
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-lg border-b-2 border-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 pixel-text text-lg">
            <div className="text-2xl animate-bounce filter drop-shadow-[0_0_10px_var(--primary-color)]">🎮</div>
            <span className="text-gradient">SOHAM.DEV</span>
          </a>
          
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
          
          <ul className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-dark-bg lg:bg-transparent border-t lg:border-t-0 border-primary lg:border-0 p-4 lg:p-0 gap-8`}>
            <li><a href="#home" className="pixel-link block py-2 lg:py-0">Home</a></li>
            <li><a href="#about" className="pixel-link block py-2 lg:py-0">About</a></li>
            <li><a href="#skills" className="pixel-link block py-2 lg:py-0">Skills</a></li>
            <li><a href="#experience" className="pixel-link block py-2 lg:py-0">Experience</a></li>
            <li><a href="#projects" className="pixel-link block py-2 lg:py-0">Projects</a></li>
            <li><a href="#contact" className="pixel-link block py-2 lg:py-0">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
