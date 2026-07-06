import React, { useEffect, useState } from 'react';
import { Layout, Server, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger progress bar animations after component mount
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    {
      category: 'Frontend Dev',
      icon: <Layout size={22} style={{ color: 'var(--primary)' }} />,
      skills: [
        { name: 'HTML5 / CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 75 },
        { name: 'React.js ', level: 80 },
        { name: 'JAVA ', level: 80 },
        { name: 'Responsive Web Design', level: 90 },
      ]
    },
    {
      category: 'Backend & Database',
      icon: <Server size={22} style={{ color: 'var(--primary)' }} />,
      skills: [
        { name: 'PHP', level: 80 },
        { name: 'Node.js / Express', level: 75 },
        { name: 'RESTful API Design', level: 70 },
        { name: 'MongoDB ', level: 75 },
        { name: 'MySQL', level: 80 },
        // { name: 'JWT & Web Security', level: 65 }
      ]
    },
    {
      category: 'Tools & Workflows',
      icon: <Wrench size={22} style={{ color: 'var(--primary)' }} />,
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'VsCode', level: 90},
        { name: 'Netbeans', level: 90},
        { name: 'Postman', level: 90},
        { name: 'Wordpress ', level: 60 },
        // { name: 'Webpack / Vite Bundling', level: 85 },
        // { name: 'Unit Testing (Jest/RTL)', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" style={{ backgroundColor: 'var(--bg-dark-accent)' }}>
      <div className="container">
        <div className="section-header">
          <h2>My Technical Skills</h2>
          <p>A breakdown of my technical proficiencies and workspace design tools.</p>
          <div className="section-accent-line"></div>
        </div>

        <div className="skills-grid">
          {skillsData.map((categoryGroup, index) => (
            <div key={index} className="skills-card glass-panel">
              <div className="skills-category-header">
                {categoryGroup.icon}
                <h3>{categoryGroup.category}</h3>
              </div>
              
              <div className="skills-list">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress-track">
                      <div
                        className="skill-progress-bar"
                        style={{ width: animate ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
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
