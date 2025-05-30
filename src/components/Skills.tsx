
import React from 'react';
import { Badge } from '../components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        { name: "React.js", level: "Expert", color: "bg-blue-500" },
        { name: "Next.js", level: "Advanced", color: "bg-gray-800" },
        { name: "JavaScript", level: "Expert", color: "bg-yellow-500" },
        { name: "TypeScript", level: "Advanced", color: "bg-blue-600" },
        { name: "Tailwind CSS", level: "Expert", color: "bg-cyan-500" },
        { name: "Bootstrap", level: "Advanced", color: "bg-purple-600" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: "Expert", color: "bg-green-600" },
        { name: "Express.js", level: "Advanced", color: "bg-gray-700" },
        { name: "Python", level: "Intermediate", color: "bg-blue-500" },
        { name: "MongoDB", level: "Advanced", color: "bg-green-500" },
        { name: "PostgreSQL", level: "Advanced", color: "bg-blue-700" },
        { name: "REST APIs", level: "Expert", color: "bg-orange-500" }
      ]
    },
    {
      title: "DevOps/Tools",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: "Expert", color: "bg-gray-900" },
        { name: "Docker", level: "Advanced", color: "bg-blue-600" },
        { name: "CI/CD", level: "Intermediate", color: "bg-red-500" },
        { name: "AWS", level: "Intermediate", color: "bg-orange-600" },
        { name: "Vercel", level: "Expert", color: "bg-black" },
        { name: "Netlify", level: "Advanced", color: "bg-teal-500" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-500 text-white";
      case "Advanced": return "bg-blue-500 text-white";
      case "Intermediate": return "bg-yellow-500 text-black";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title pixel-text text-gradient">Technical Skills</h2>
            <p className="section-description">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4">
              <div className="modern-skill-card h-100">
                <div className="skill-card-header">
                  <span className="skill-icon">{category.icon}</span>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="modern-skill-item">
                      <div className="skill-info">
                        <div className={`skill-dot ${skill.color}`}></div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <Badge className={`skill-badge ${getLevelColor(skill.level)}`} variant="secondary">
                        {skill.level}
                      </Badge>
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
