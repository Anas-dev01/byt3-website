import { Target, Eye, Gem, ArrowRight } from 'lucide-react';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import './Pages.css';

const About = () => {
  return (
    <div className="about-page anchor-section" id="about">
      <section className="hero section-padding">
        <div className="container hero-container">
          <div className="hero-content">
            <p className="subtitle">ABOUT BYT3</p>
            <h1>Building Technology<br/>for a Better Future</h1>
            <p className="desc">BYT3 is a remote-first technology company developing software and digital solutions that help businesses, organizations and students solve problems, streamline operations, and turn ideas into practical technology.</p>
          </div>
          <div className="hero-image">
            <ImageWithSkeleton src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Architecture" />
          </div>
        </div>
      </section>

      <section className="values-section section-padding">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <div className="icon-box"><Target size={24} /></div>
              <h3>Our Mission</h3>
              <p>To deliver high-quality technology solutions that empower businesses and create lasting value.</p>
            </div>
            <div className="value-card">
              <div className="icon-box"><Eye size={24} /></div>
              <h3>Our Vision</h3>
              <p>To be a trusted technology partner for businesses looking to innovate, grow and stay ahead.</p>
            </div>
            <div className="value-card">
              <div className="icon-box"><Gem size={24} /></div>
              <h3>Our Values</h3>
              <p>Quality, integrity, collaboration and a commitment to excellence in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="remote-section">
        <div className="container remote-container">
          <div className="remote-content">
            <h2>Remote-first</h2>
            <p>We work with clients from anywhere, using modern tools and a flexible collaboration model.</p>
            <a className="btn btn-outline btn-on-dark" href="#contact">Let's Work Together <ArrowRight size={16}/></a>
          </div>
          <div className="remote-image">
            {/* Placeholder for laptop image */}
             <ImageWithSkeleton src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" alt="Remote Work" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
