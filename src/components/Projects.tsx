
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Decentralized EV Charging Network",
      description: "Built using Ethereum smart contracts for secure, transparent EV charging payments. Integrated Web3.js and MetaMask for blockchain interaction, and used IPFS for tamper-proof charging station data storage.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React.js", "Node.js", "IPFS"],
      github: "https://github.com/SohamDev404",
      demo: "#",
      image: "🔋"
    },
    {
      title: "AI Therapist Chatbot",
      description: "Created a chatbot for detecting anxiety/depression with 82% accuracy using sentiment analysis. Deployed via CI/CD pipeline for seamless updates and scalability.",
      technologies: ["React.js", "Node.js", "Sentiment-BERT", "Logistic Regression"],
      github: "https://github.com/SohamDev404",
      demo: "#",
      image: "🤖"
    },
    {
      title: "Fresh-Harvest Vegetable Ordering System",
      description: "Created a bulk vegetable ordering and tracking platform with an admin dashboard to manage orders and live inventory using PostgreSQL.",
      technologies: ["Web3.js", "PostgreSQL", "Node.js", "Prisma"],
      github: "https://github.com/SohamDev404/FreshHarvest",
      demo: "#",
      image: "🥬"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title pixel-text">Featured Projects</h2>
            <p className="section-description">
              Some of my recent work and side projects
            </p>
          </div>
        </div>
        
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="project-card pixel-card">
                <div className="project-image">
                  <div className="project-emoji">{project.image}</div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge pixel-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a href={project.github} className="btn btn-outline-primary btn-sm pixel-btn me-2">
                      <i className="fab fa-github"></i> Code
                    </a>
                    <a href={project.demo} className="btn btn-primary btn-sm pixel-btn">
                      <i className="fas fa-external-link-alt"></i> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
