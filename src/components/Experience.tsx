
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
    <section id="experience" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold pixel-text text-gradient mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey in software development and key achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="pixel-card p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gradient mb-2">{exp.title}</h3>
                <h4 className="text-xl text-gray-300 mb-2">{exp.company}</h4>
                <span className="inline-block bg-primary/10 border border-primary px-4 py-2 text-sm pixel-text text-primary">{exp.period}</span>
              </div>
              
              <div>
                <h5 className="text-xl font-semibold text-primary mb-6">Key Achievements:</h5>
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-4">
                      <i className="fas fa-check-circle text-accent mt-1 flex-shrink-0"></i>
                      <span className="text-gray-300 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
