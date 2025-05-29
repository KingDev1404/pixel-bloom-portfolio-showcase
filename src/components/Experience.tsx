
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Cervi-Tester",
      period: "May 2024 - July 2024",
      achievements: [
        "Collaborated with a team of 5+ developers to select and implement scalable technologies, enhancing overall system performance.",
        "Conducted thorough code reviews, identifying reusable modules that reduced development time by 15% across product components.",
        "Designed and executed unit and integration tests, accelerating delivery cycles and ensuring 95% test coverage for new features.",
        "Built robust, production-ready applications adhering to modern coding standards and industry best practices.",
        "Developed optimized front-end components, improving page load times by 20% and enhancing UI responsiveness.",
        "Integrated RESTful APIs with the frontend, ensuring error-free data flow and improving overall user interaction by 30%.",
        "Participated in agile sprints and peer reviews, contributing to a 25% improvement in code quality metrics."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title pixel-text">Professional Experience</h2>
            <p className="section-description">
              My journey in software development and key achievements
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item pixel-card">
                <div className="experience-header">
                  <h3 className="experience-title text-gradient">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <span className="experience-period pixel-badge">{exp.period}</span>
                </div>
                
                <div className="experience-content">
                  <h5 className="achievements-title">Key Achievements:</h5>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        <i className="fas fa-check-circle achievement-icon"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
