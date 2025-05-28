
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Python", level: 75 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "REST APIs", level: 92 }
      ]
    },
    {
      title: "DevOps/Tools",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 90 },
        { name: "Netlify", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title pixel-text">Technical Skills</h2>
            <p className="section-description">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </div>
        
        <div className="row">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="skill-category pixel-card">
                <h3 className="category-title text-gradient">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
