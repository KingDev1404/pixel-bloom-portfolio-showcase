
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold pixel-text text-gradient mb-8">About Me</h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-xl font-medium text-white leading-relaxed">
                I'm a passionate Full Stack Developer with practical experience in designing 
                and deploying scalable web applications.
              </p>
              <p className="leading-relaxed text-gray-300">
                Currently pursuing B.Tech in Electronics and Telecommunication while 
                expanding my expertise in DevOps practices. I love creating innovative 
                solutions and bringing ideas to life through code.
              </p>
              <p className="leading-relaxed text-gray-300">
                My journey in technology is driven by curiosity and a desire to build 
                applications that make a difference. I'm always learning new technologies 
                and best practices to deliver high-quality software solutions.
              </p>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start mt-8">
              <div className="text-center p-6 border-2 border-primary bg-black/30 backdrop-blur-sm flex-1 max-w-xs">
                <h3 className="text-3xl font-bold text-gradient mb-2">15+</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Technologies</p>
              </div>
              <div className="text-center p-6 border-2 border-primary bg-black/30 backdrop-blur-sm flex-1 max-w-xs">
                <h3 className="text-3xl font-bold text-gradient mb-2">5+</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Projects</p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold pixel-text mb-6 text-gradient">Education</h3>
              <div className="space-y-4">
                <div className="p-6 border-2 border-primary bg-black/30 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold text-gradient mb-2">Bachelor of Technology - 2026</h4>
                  <p className="font-medium mb-1 text-white">Pimpri Chinchwad College Of Engineering</p>
                  <p className="text-gray-400">Electronics And Telecommunication Engineering</p>
                </div>
                <div className="p-6 border-2 border-primary bg-black/30 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold text-gradient mb-2">Higher Secondary Certificate - 2022</h4>
                  <p className="font-medium mb-1 text-white">Pratibha International School, Pune</p>
                  <p className="text-gray-400">CBSE Board</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center h-96">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 border-2 border-primary bg-black/30 backdrop-blur-sm flex items-center justify-center">
                <div className="font-mono text-sm space-y-2 text-white">
                  <div className="opacity-0 animate-[typewriter_1s_ease-out_forwards]" style={{animationDelay: '0s'}}>
                    <span className="text-red-400">const</span>{' '}
                    <span className="text-cyan-400">developer</span>{' '}
                    <span className="text-yellow-400">=</span>{' '}
                    <span className="text-green-400">'Soham'</span>;
                  </div>
                  <div className="opacity-0 animate-[typewriter_1s_ease-out_forwards]" style={{animationDelay: '0.5s'}}>
                    <span className="text-red-400">function</span>{' '}
                    <span className="text-blue-400">createAwesome</span>() {'{'}
                  </div>
                  <div className="opacity-0 animate-[typewriter_1s_ease-out_forwards]" style={{animationDelay: '1s'}}>
                    &nbsp;&nbsp;<span className="text-red-400">return</span>{' '}
                    <span className="text-green-400">'Amazing Projects'</span>;
                  </div>
                  <div className="opacity-0 animate-[typewriter_1s_ease-out_forwards]" style={{animationDelay: '1.5s'}}>{'}'}</div>
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
