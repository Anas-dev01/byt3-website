import { useEffect, useState } from 'react';
import { Mail, MessageCircle, Share2 } from 'lucide-react';
import { LinkedInIcon, WhatsAppIcon, XIcon } from '../components/SocialIcons';
import './Pages.css';

const contactEmail = 'usmansheikanas2006@gmail.com';
const whatsappNumber = '2347062719552';

const Contact = () => {
  const [selectedService, setSelectedService] = useState('');
  const [sendNotice, setSendNotice] = useState('');

  useEffect(() => {
    const selectRequestedService = (event) => setSelectedService(event.detail);
    window.addEventListener('byt3:request-service', selectRequestedService);
    return () => window.removeEventListener('byt3:request-service', selectRequestedService);
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service') || 'Not specified';
    const message = formData.get('message');
    const subject = `Website inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`;
    const method = event.nativeEvent.submitter?.value;

    if (method === 'whatsapp') {
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`;
      setSendNotice('WhatsApp is opening. Please send your message there to complete your inquiry.');
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    setSendNotice('Your email app is opening. Please send your message there to complete your inquiry.');
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact-page section-padding anchor-section" id="contact">
      <div className="container">
        <div className="page-header">
          <div>
            <p className="subtitle">GET IN TOUCH</p>
            <h1>Let's Build Something<br/>Great Together</h1>
            <p className="desc">Have a project in mind or need a technology solution? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p>
          </div>
          <div className="header-graphic contact-graphic">
             <div className="square-black"></div>
             <div className="square-grey"></div>
          </div>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="info-item">
              <div className="icon-box"><Mail size={20}/></div>
              <div>
                <h4>Email</h4>
                <p><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
                <p className="small-text">We respond within 12 hours.</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-box"><MessageCircle size={20}/></div>
              <div>
                <h4>WhatsApp</h4>
                <p><a href="https://wa.me/2347062719552" target="_blank" rel="noreferrer">+234 706 271 9552</a></p>
                <p className="small-text">Chat with us on WhatsApp.</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-box"><Share2 size={20} /></div>
              <div>
                <h4>Follow Us</h4>
                <div className="social-icons">
                   <LinkedInIcon size={20} />
                   <XIcon size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form
              onSubmit={sendMessage}
              onReset={() => {
                setSelectedService('');
                setSendNotice('');
              }}
            >
              <div className="form-group">
                <label>Name *</label>
                <input type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label>Service Interested In</label>
                <select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
                  <option value="">Select a service</option>
                  <option>Website Development</option>
                  <option>Web Application Development</option>
                  <option>Desktop Application Development</option>
                  <option>Mobile Application Development</option>
                  <option>Custom Software Solutions</option>
                  <option>Cybersecurity</option>
                  <option>IT Support</option>
                  <option>Business Automation</option>
                  <option>Technical Consulting</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea rows="4" name="message" placeholder="Tell us about your project..." required></textarea>
              </div>
              <h3 className="send-method-heading">How would you like to send?</h3>
              <div className="send-method-buttons">
                <button type="submit" name="sendMethod" value="email" className="btn send-via-email">
                  <Mail size={18} /> Send via Email
                </button>
                <button type="submit" name="sendMethod" value="whatsapp" className="btn send-via-whatsapp">
                  <WhatsAppIcon size={18} /> Send via WhatsApp
                </button>
              </div>
              {sendNotice && <p className="send-method-notice" role="status" aria-live="polite">{sendNotice}</p>}
              {sendNotice && <button type="reset" className="clear-form-btn">Clear Form</button>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
