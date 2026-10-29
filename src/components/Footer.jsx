import { LinkedInIcon, WhatsAppIcon, XIcon } from './SocialIcons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <a href="#home" className="logo">
            <img src="/brand%20logos/BYT3_Navbar_Logo_Transparent.png" alt="BYT3" />
          </a>
          <p className="copyright">© 2026 BYT3. All rights reserved.</p>
        </div>
        
        <div className="footer-right">
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="social-links">
            <span role="img" aria-label="LinkedIn profile link not configured" title="LinkedIn profile link not configured"><LinkedInIcon size={18} /></span>
            <span role="img" aria-label="X profile link not configured" title="X profile link not configured"><XIcon size={18} /></span>
            <a href="https://wa.me/2347062719552" aria-label="WhatsApp" target="_blank" rel="noreferrer"><WhatsAppIcon size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
