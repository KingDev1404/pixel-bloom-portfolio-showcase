
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "JavaScript", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Bootstrap", level: "Advanced" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "Express.js", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "MongoDB", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "REST APIs", level: "Expert" }
      ]
    },
    {
      title: "DevOps/Tools",
      skills: [
        { name: "Git/GitHub", level: "Expert" },
        { name: "Docker", level: "Advanced" },
        { name: "CI/CD", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" },
        { name: "Vercel", level: "Expert" },
        { name: "Netlify", level: "Advanced" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "skill-expert";
      case "Advanced": return "skill-advanced";
      case "Intermediate": return "skill-intermediate";
      default: return "skill-beginner";
    }
  };

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
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-badge">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
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
