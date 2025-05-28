
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="section-title pixel-text">About Me</h2>
              <p className="section-description">
                I'm a passionate Full Stack Developer with practical experience in designing 
                and deploying scalable web applications. Currently pursuing B.Tech in Electronics 
                and Telecommunication while expanding my expertise in DevOps practices.
              </p>
              
              <div className="about-stats row">
                <div className="col-6 col-md-3">
                  <div className="stat-item pixel-card">
                    <h3 className="stat-number text-gradient">2+</h3>
                    <p className="stat-label">Years Experience</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-item pixel-card">
                    <h3 className="stat-number text-gradient">15+</h3>
                    <p className="stat-label">Technologies</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-item pixel-card">
                    <h3 className="stat-number text-gradient">5+</h3>
                    <p className="stat-label">Projects</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-item pixel-card">
                    <h3 className="stat-number text-gradient">95%</h3>
                    <p className="stat-label">Test Coverage</p>
                  </div>
                </div>
              </div>

              <div className="education-section">
                <h3 className="subsection-title">Education</h3>
                <div className="education-item pixel-card">
                  <h4>Bachelor of Technology - 2026</h4>
                  <p>Pimpri Chinchwad College Of Engineering</p>
                  <p>Electronics And Telecommunication Engineering</p>
                </div>
                <div className="education-item pixel-card">
                  <h4>Higher Secondary Certificate - 2022</h4>
                  <p>Pratibha International School, Pune, CBSE</p>
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
                    <span className="code-function"> createAwesome</span>() {
                  </div>
                  <div className="code-line" style={{animationDelay: '1s'}}>
                    &nbsp;&nbsp;<span className="code-keyword">return</span> 
                    <span className="code-string"> 'Amazing Projects'</span>;
                  </div>
                  <div className="code-line" style={{animationDelay: '1.5s'}}>};</div>
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
