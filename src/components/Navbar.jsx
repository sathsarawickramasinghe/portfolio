import React, { useState, useEffect } from 'react';
import { Menu, X, } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  // Scroll listener for sticky styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active link spy
      const scrollPos = window.scrollY + 150;
      for (let i = 0; i < navItems.length; i++) {
        const element = document.getElementById(navItems[i].id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(navItems[i].id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // navbar height offset
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner container">
          <a href="#home" className="nav-brand" onClick={(e) => handleLinkClick(e, 'home')}>
            
            Sathsara<span> W.</span>
          </a>

          {/* Desktop Nav */}
          <nav>
            <ul className="nav-desktop-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary" onClick={(e) => handleLinkClick(e, 'contact')}>
              Hire Me
            </a>
            
            <button
              className="nav-toggle-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`nav-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <ul className="nav-mobile-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`nav-mobile-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div style={{ marginTop: 'auto' }}>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
