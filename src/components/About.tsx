
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="section-title pixel-text">About Me</h2>
              <div className="about-description">
                <p className="lead mb-4">
                  I'm a passionate Full Stack Developer with practical experience in designing 
                  and deploying scalable web applications.
                </p>
                <p className="mb-4">
                  Currently pursuing B.Tech in Electronics and Telecommunication while 
                  expanding my expertise in DevOps practices. I love creating innovative 
                  solutions and bringing ideas to life through code.
                </p>
                <p className="mb-4">
                  My journey in technology is driven by curiosity and a desire to build 
                  applications that make a difference. I'm always learning new technologies 
                  and best practices to deliver high-quality software solutions.
                </p>
              </div>
              
              <div className="about-stats row mt-5">
                <div className="col-md-4 mb-3">
                  <div className="stat-item pixel-card">
                    <h3 className="stat-number text-gradient">2+</h3>
                    <p className="stat-label">Years Experience</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="stat-item pixel-card">
                    <h3 className="stat-number text-gradient">15+</h3>
                    <p className="stat-label">Technologies</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="stat-item pixel-card">
                    <h3 className="stat-number text-gradient">5+</h3>
                    <p className="stat-label">Projects</p>
                  </div>
                </div>
              </div>

              <div className="education-section mt-5">
                <h3 className="subsection-title">Education</h3>
                <div className="education-item pixel-card mb-3">
                  <h4 className="text-gradient">Bachelor of Technology - 2026</h4>
                  <p className="mb-1"><strong>Pimpri Chinchwad College Of Engineering</strong></p>
                  <p className="text-muted">Electronics And Telecommunication Engineering</p>
                </div>
                <div className="education-item pixel-card">
                  <h4 className="text-gradient">Higher Secondary Certificate - 2022</h4>
                  <p className="mb-1"><strong>Pratibha International School, Pune</strong></p>
                  <p className="text-muted">CBSE Board</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-visual">
              <div className="pixel-portrait">
                <div className="code-animation">
                  <div className="code-line" style={{animationDelay: '0s'}}>
                    <span className="code-keyword">const</span> 
                    <span className="code-variable"> developer</span> 
                    <span className="code-operator"> = </span>
                    <span className="code-string">'Soham'</span>;
                  </div>
                  <div className="code-line" style={{animationDelay: '0.5s'}}>
                    <span className="code-keyword">function</span> 
                    <span className="code-function"> createAwesome</span>() {'{'}
                  </div>
                  <div className="code-line" style={{animationDelay: '1s'}}>
                    &nbsp;&nbsp;<span className="code-keyword">return</span> 
                    <span className="code-string"> 'Amazing Projects'</span>;
                  </div>
                  <div className="code-line" style={{animationDelay: '1.5s'}}>{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
