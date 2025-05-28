
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
    <section id="projects" className="py-24 px-4 bg-darker-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold pixel-text text-gradient mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Some of my recent work and side projects
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="pixel-card flex flex-col h-full">
              <div className="text-center p-8 border-b border-primary">
                <div className="text-6xl mb-4 animate-bounce">{project.image}</div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-primary mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-1 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-primary/10 border border-primary/30 px-3 py-1 text-sm pixel-text text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a href={project.github} className="flex-1 text-center py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-semibold">
                    <i className="fab fa-github mr-2"></i> Code
                  </a>
                  <a href={project.demo} className="flex-1 text-center py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity">
                    <i className="fas fa-external-link-alt mr-2"></i> Demo
                  </a>
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
