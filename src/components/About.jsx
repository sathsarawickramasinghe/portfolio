import React, { useState } from 'react';
import { User, Briefcase, GraduationCap, Mail, Award } from 'lucide-react';
import { Github, Linkedin, Facebook } from './SocialIcons';
import './About.css';
import profileImg from '../assets/profile.webp';


const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const experienceData = [
    {
      date: '2024',
      title: 'Web Design for VW Constructions',
      org: 'VW Constructions',
      desc: <pre>{`• Business website.
• Showcases company projects, services, 
  and contact information.
• Fully responsive and deployed on Netlify.`}</pre> 
    },
    {
      date: '2025',
      title: 'Web Design for Ushan Mobile',
      org: 'Ushan Mobile',
      desc: <pre>{`• Business website.
• Showcases company projects, services,
  and contact information.
• Fully responsive and deployed on Netlify.`}</pre>
    },
    {
      date: '2026',
      title: 'Learning Management System (Final Year Project)',
      org: 'Media by Harsha Institute',
      desc: <pre>{`• MERN Stack based LMS for
  "Media By Harsha Institute".
• Student Authentication System.
• Teacher Management Module.
• Course Management System.
• Responsive UI Design.`}</pre>
    }
  ];

  const educationData = [
    {
      date: '2022',
      title: 'GCE AL Exam',
      org: 'R/Eheliyagoda Central Collage',
      desc: <pre>
        {`• ICT - C
• Media Studies - C
• Drama And Theater - B
• General English - B
        `}
      </pre>
    },
    {
      date: '2024-2026',
      title: 'Higher National Diploma in Information technology',
      org: 'SLIATE (Hardy ATI)',
      desc: <pre>{`Currently studing Higher National Diploma 
in Information technology, 
SLIATE (Hardy ATI)`}</pre> ,
    }
  ];

  const trainingData = [
    {
      date: '',
      title: 'Udemy Certifications',
      org: 'Udemy',
      desc: <pre>{`• CSS Basic Guide (2022)
• CSS & JavaScript Crash Course
• HTML & CSS – Certificate Course 
  for Beginners
• Web Development Course
  (CSS, Bootstrap, JavaScript)
• HTML5 – From Basic to 
  Advanced Level`}</pre>
    },
    {
      date: '',
      title: 'University of Moratuwa & DP Education',
      org: 'University of Moratuwa / DP Education',
      desc: <pre>{`• Web Design for Beginners – 
  E-Certificate
• Front-End Web Development – 
  E-Certificate`}</pre>
    },
    {
      date: '',
      title: 'Great Learning Certifications ',
      org: 'Great Learning',
      desc: <pre>{`• React JS Tutorial Completion 
  Certificate`}</pre>
    }
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know my story, educational background, and professional timeline.</p>
          <div className="section-accent-line"></div>
        </div>

        <div className="about-grid">
          {/* Left Side: Photo Frame Mockup */}
          <div className="about-visual">
            <div className="about-avatar-glow"></div>
            <div className="about-avatar-card glass-panel">
              <div className="about-avatar-circle">
  <img src={profileImg} alt="Sathsara Wickramasinghe" className="about-avatar-img" />
</div>
              <h3>Sathsara Wickramasinghe</h3>
              <p style={{ margin: '0.5rem 0 1rem', fontSize: '0.95rem' }}>HNDIT Undergarduate & React Developer</p>
              <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                Based in Rathnapura District, Sri Lanka. Passionate about building responsive User Interfaces Using REACT JS.
              </p>
              
              <div className="about-socials">
                <a href="https://github.com/sathsarawickramasinghe" className="about-social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/sathsara-wickramasinghe/" className="about-social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:sathsaragavindu2003@gmail.com" className="about-social-icon" aria-label="Email Address">
                  <Mail size={18} />
                </a>
                <a href="https://web.facebook.com/sathsarawickramsinghe/" className="about-social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Tabs */}
          <div>
            <div className="tabs-header">
              <button
                className={`tab-btn ${activeTab === 'bio' ? 'active' : ''}`}
                onClick={() => setActiveTab('bio')}
              >
                My Bio
              </button>
              <button
                className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                Projects
              </button>
              <button
                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button
                className={`tab-btn ${activeTab === 'training' ? 'active' : ''}`}
                onClick={() => setActiveTab('training')}
              >
                Certifications
              </button>
            </div>

            {/* Tab Panels */}
            {activeTab === 'bio' && (
              <div className="about-tab-panel">
                <p className="bio-text">
                   Hello! I'm Sathsara Wickramasinghe, a passionate Software Engineering student and MERN Stack Developer with a strong interest in building modern, responsive, and user-friendly web applications. I have experience working with technologies such as React.js, Node.js, Express.js, MongoDB, JavaScript, PHP, MySQL, Java, HTML, and CSS.



                </p>
                <p className="bio-text" style={{ marginBottom: '2.5rem' }}>
                  As a final-year HNDIT student, I am continuously expanding my skills through hands-on projects and exploring new technologies in web development. My goal is to grow as a software engineer and contribute to innovative solutions that make a real impact. 🚀
                </p>
                
                <div className="about-info-grid">
                  <div className="info-item">
                    <span className="info-label">Email</span>
                    <span className="info-value">sathsaragavindu2003@gmail.com</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Location</span>
                    <span className="info-value">Rathnapura  , SriLanka .</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">HNDIT Undergarduate</span>
                    <span className="info-value">Hardy ATI (SLIATE)</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Availability</span>
                    <span className="info-value" style={{ color: 'var(--light)' }}>Open to Work</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="about-tab-panel">
                <div className="timeline">
                  {experienceData.map((item, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-date">{item.date}</div>
                      <h4 className="timeline-title">{item.title}</h4>
                      <div className="timeline-org">{item.org}</div>
                      <p className="timeline-desc text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="about-tab-panel">
                <div className="timeline">
                  {educationData.map((item, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-date">{item.date}</div>
                      <h4 className="timeline-title">{item.title}</h4>
                      <div className="timeline-org">{item.org}</div>
                      <p className="timeline-desc text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'training' && (
              <div className="about-tab-panel">
                <div className="timeline">
                  {trainingData.map((item, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-date">{item.date}</div>
                      <h4 className="timeline-title">{item.title}</h4>
                      <div className="timeline-org">{item.org}</div>
                      <p className="timeline-desc text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
