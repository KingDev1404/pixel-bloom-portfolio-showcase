
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
      case "Expert": return "bg-gradient-to-r from-green-500 to-green-600 text-white";
      case "Advanced": return "bg-gradient-to-r from-blue-500 to-blue-600 text-white";
      case "Intermediate": return "bg-gradient-to-r from-yellow-500 to-orange-500 text-white";
      default: return "bg-gradient-to-r from-red-500 to-red-600 text-white";
    }
  };

  return (
    <section id="skills" className="py-24 px-4 bg-darker-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold pixel-text text-gradient mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="pixel-card p-8">
              <h3 className="text-2xl font-bold text-gradient mb-8 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between p-4 bg-white/5 border border-primary/30 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:transform hover:translateX-2">
                    <span className="font-semibold text-white">{skill.name}</span>
                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
