import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin, Facebook } from './SocialIcons';
import './Footer.css';

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Left Side: Brand & Copy */}
        <div className="footer-left">
          <a href="#home" className="footer-brand" onClick={(e) => { e.preventDefault(); handleScrollTop(); }}>
            Sathsara<span> W.</span>
          </a>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Sathsara Wickramasinghe. All rights reserved.
          </p>
        </div>

        {/* Right Side: Social links & Top indicator */}
        <div className="footer-right">
          <div className="footer-social-links">
            <a href="https://github.com/sathsarawickramasinghe" className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sathsara-wickramasinghe/" className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sathsaragavindu2003@gmail.com" className="footer-social-btn" aria-label="Email Address">
              <Mail size={20} />
            </a>
            <a href="https://web.facebook.com/sathsarawickramsinghe/" className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
              <Facebook size={20} />
            </a>
          </div>

          <button
            onClick={handleScrollTop}
            className="back-to-top-btn"
            aria-label="Scroll to top of the page"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
