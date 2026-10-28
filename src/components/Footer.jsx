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
            <a href="#" aria-label="LinkedIn"><LinkedInIcon size={18} /></a>
            <a href="#" aria-label="X"><XIcon size={18} /></a>
            <a href="https://wa.me/2347062719552" aria-label="WhatsApp" target="_blank" rel="noreferrer"><WhatsAppIcon size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
