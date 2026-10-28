import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'Projects', id: 'projects' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src="/brand%20logos/BYT3_Navbar_Logo_Transparent.png" alt="BYT3" />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={closeMenu}>
            Get Started <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
