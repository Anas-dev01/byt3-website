import { ArrowRight, Code, Shield, Monitor, Zap } from 'lucide-react';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import './Pages.css'; // Shared page CSS

const Home = () => {
  return (
    <div className="home-page anchor-section" id="home">
      {/* Hero Section */}
      <section className="hero section-padding">
        <div className="container hero-container">
          <div className="hero-content">
            <p className="subtitle"></p>
            <h1>Build Smarter<br/>with BYT3</h1>
            <p className="desc">We design and develop websites, web applications, desktop and mobile applications, and custom software that help businesses grow and operate efficiently.</p>
            <div className="hero-buttons">
              <a className="btn btn-primary" href="#contact">Get Started <ArrowRight size={16}/></a>
              <a className="btn btn-outline" href="#projects">View Our Work</a>
            </div>
          </div>
          <div className="hero-image">
            {/* Using a placeholder that matches the dark architectural vibe */}
            <ImageWithSkeleton src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Modern Architecture" loading="eager" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container services-grid">
          <div className="service-card">
            <div className="icon-box"><Code size={24} /></div>
            <h3>Software Development</h3>
            <p>Web, desktop, mobile & custom solutions.</p>
          </div>
          <div className="service-card">
            <div className="icon-box"><Shield size={24} /></div>
            <h3>Cybersecurity</h3>
            <p>Protect your systems and data.</p>
          </div>
          <div className="service-card">
            <div className="icon-box"><Monitor size={24} /></div>
            <h3>IT Support</h3>
            <p>Keep your business running smoothly.</p>
          </div>
          <div className="service-card">
            <div className="icon-box"><Zap size={24} /></div>
            <h3>Business Automation</h3>
            <p>Streamline processes and improve efficiency.</p>
          </div>
        </div>
      </section>

      {/* Dark Vision Section */}
      <section className="vision-section">
        <div className="container vision-container">
          <div className="vision-left">
            <h2>Your Vision. Our Code.</h2>
            <p>From idea to deployment, we build technology that solves real problems and creates lasting value.</p>
            <a className="btn btn-outline btn-on-dark" href="#contact">Start Your Project <ArrowRight size={16}/></a>
          </div>
          <div className="vision-right grid-2x2">
            <div>
              <h4>Custom Solutions</h4>
              <p>Tailored to your needs</p>
            </div>
            <div>
              <h4>Modern Tech</h4>
              <p>Built for performance</p>
            </div>
            <div>
              <h4>Reliable Support</h4>
              <p>When you need it</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
