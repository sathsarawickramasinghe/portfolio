import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const roles = [
    'Full Stack Engineer',
    'HNDIT Undergarduate',
    'React Developer',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentFullText = roles[roleIndex];
    
    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);
        
        if (displayText === currentFullText) {
          // Pause at the end
          setTypingSpeed(2500);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
        
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setTypingSpeed(200);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        {/* Left Side: Text and Intro */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} /> Available for Full-time
          </div>
          
          <h1 className="hero-title">
           Hi, I'm Sathsara 👋
            <span>
              I'm a <span className="hero-typewriter">{displayText}</span>
            </span>
          </h1>
          
          <p className="hero-description text-muted">
           Final-year HNDIT student with practical experience in Full-Stack Web
Development using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
Skilled in developing responsive web applications and database-driven
systems. Experienced in React, JavaScript, MySQL, WordPress, PHP, and Java.
A fast learner with strong passion for software engineering and
continuously improving technical and problem-solving skills
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'projects')}>
              View My Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => scrollToSection(e, 'contact')}>
              Let's Connect
            </a>
          </div>
        </div>

        {/* Right Side: Glass Code Terminal */}
        <div className="hero-visual">
          <div className="terminal-accent-glow"></div>
          <div className="glass-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-title">developer.js</div>
            </div>
            
            <div className="terminal-body">
              <div className="code-line">
                <span className="line-number">1</span>
                <span className="code-content">
                  <span className="code-keyword">const</span> developer = &#123;
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">2</span>
                <span className="code-content" style={{ paddingLeft: '1.5rem' }}>
                  name: <span className="code-string">'Sathsara Wickramasinghe'</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">3</span>
                <span className="code-content" style={{ paddingLeft: '1.5rem' }}>
                  skills: [<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'CSS'</span>],
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">4</span>
                <span className="code-content" style={{ paddingLeft: '1.5rem' }}>
                  uiPreference: <span className="code-string">'Glass & Glow etc..'</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">5</span>
                <span className="code-content" style={{ paddingLeft: '1.5rem' }}>
                  lovesCoffee: <span className="code-keyword">true</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">6</span>
                <span className="code-content" style={{ paddingLeft: '1.5rem' }}>
                  currentFocus: <span className="code-string">'Software Engineering'</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">7</span>
                <span className="code-content">&#125;;</span>
              </div>
              <div className="code-line" style={{ marginTop: '0.8rem' }}>
                <span className="line-number">8</span>
                <span className="code-content">
                  <span className="code-comment">// Hover over the glass terminal to activate glow</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
