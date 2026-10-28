import { useEffect, useRef, useState } from 'react';
import { Monitor, Smartphone, Server, Settings, Briefcase, Shield, Headphones, Zap, FileText, ArrowRight, X } from 'lucide-react';
import './Pages.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const coreServices = [
    {
      icon: <Monitor />,
      title: 'Website Development',
      desc: 'Business websites, landing pages, e-commerce and more.',
      fullDesc: 'We design and build responsive websites that help businesses establish their online presence, showcase their offerings, and reach more customers.',
      offers: ['Business websites', 'Landing pages', 'Portfolio websites', 'Website redesigns'],
    },
    {
      icon: <Server />,
      title: 'Web Application Development',
      desc: 'Custom web apps, dashboards, inventory systems and more.',
      fullDesc: 'We develop interactive web applications that help businesses manage operations, organize information, and deliver better digital experiences.',
      offers: ['E-commerce web applications', 'Business management systems', 'Inventory and stock management systems', 'Administrative dashboards', 'Customer portals and booking systems'],
    },
    {
      icon: <Briefcase />,
      title: 'Desktop Application Development',
      desc: 'POS systems, business tools, admin/database software and more.',
      fullDesc: 'We build desktop software that helps businesses perform everyday tasks efficiently, including solutions that can operate without a constant internet connection.',
      offers: ['Point-of-sale (POS) systems', 'Offline business applications', 'Database management software', 'Custom desktop utilities'],
    },
    {
      icon: <Smartphone />,
      title: 'Mobile Application Development',
      desc: 'Android & iOS apps, business apps and mobile solutions.',
      fullDesc: 'We create mobile applications that help businesses connect with customers, simplify tasks, and make their services accessible on mobile devices.',
      offers: ['Android applications', 'iOS applications', 'Cross-platform mobile apps', 'Business and productivity apps'],
    },
    {
      icon: <Settings />,
      title: 'Custom Software Solutions',
      desc: 'Tailored software for your unique business needs.',
      fullDesc: 'We develop software tailored to specific business needs, helping organizations solve operational challenges and improve the way they work.',
      offers: ['Hospital management systems', 'Clinical records management systems', 'Workflow automation tools', 'System integration solutions', 'Specialized software applications'],
    },
  ];

  const addServices = [
    { icon: <Shield />, title: "Cybersecurity", desc: "Assessments, consulting, security training and more." },
    { icon: <Headphones />, title: "IT Support", desc: "Troubleshooting, setup, maintenance and more." },
    { icon: <Zap />, title: "Business Automation", desc: "Workflow automation, reporting and integration." },
    { icon: <FileText />, title: "Technical Consulting", desc: "Documentation, analysis, planning and more." },
  ];

  useEffect(() => {
    if (!selectedService) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        setSelectedService(null);
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;
      const focusableElements = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [selectedService]);

  const requestSelectedService = (serviceTitle) => {
    window.dispatchEvent(new CustomEvent('byt3:request-service', { detail: serviceTitle }));
    setSelectedService(null);
  };

  return (
    <div className="services-page section-padding anchor-section" id="services">
      <div className="container">
        <div className="page-header">
          <div>
            <p className="subtitle">OUR SERVICES</p>
            <h1>Technology Solutions<br/>for a Smarter Tomorrow</h1>
            <p className="desc">We offer a range of services to help you build, secure, and scale your digital presence. Our primary focus is in software development, with additional technology services to support your business needs.</p>
          </div>
          <div className="header-graphic">
             <div className="square-black"></div>
             <div className="square-grey"></div>
          </div>
        </div>

        <h3 className="section-title">Core Services (Software Development)</h3>
        <div className="core-services-grid">
          {coreServices.map((svc) => (
              <div key={svc.title} className="service-item-card">
                <div className="icon-box">{svc.icon}</div>
                <h4>{svc.title}</h4>
                <p>{svc.desc}</p>
                <button
                  type="button"
                  className="link-arrow"
                  aria-label={`View details for ${svc.title}`}
                  aria-haspopup="dialog"
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget;
                    setSelectedService(svc);
                  }}
                >
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
          ))}
        </div>

        {selectedService && (
          <div
            className="service-modal-backdrop"
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelectedService(null);
            }}
          >
            <section
              ref={modalRef}
              className="service-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
            >
              <div className="service-modal-header">
                <h2 id="service-modal-title">{selectedService.title}</h2>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="service-modal-close"
                  aria-label="Close service details"
                  onClick={() => setSelectedService(null)}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
              <p className="service-modal-description">{selectedService.fullDesc}</p>
              <h3>What we offer</h3>
              <ol className="service-modal-offers">
                {selectedService.offers.map((offer) => <li key={offer}>{offer}</li>)}
              </ol>
              <a
                href="#contact"
                className="btn btn-primary service-request-btn"
                onClick={() => requestSelectedService(selectedService.title)}
              >
                Request This Service <ArrowRight size={16} />
              </a>
            </section>
          </div>
        )}

        <h3 className="section-title">Additional Technology Services</h3>
        <div className="additional-services-grid">
          {addServices.map((svc, i) => (
            <div key={i} className="add-service-card">
              <div className="icon-box">{svc.icon}</div>
              <h4>{svc.title}</h4>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
