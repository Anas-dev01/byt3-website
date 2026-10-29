import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import './Pages.css';

const image = (project, filename) => `/images/projects/${project.id}/${encodeURIComponent(filename)}`;

const projects = [
  {
    id: 'cyberguard',
    name: 'CyberGuard Fraud Complaint and Tracking System',
    category: 'Security Software',
    description: 'A Django application for reporting cyber fraud, securely submitting evidence, tracking cases, and supporting investigator review.',
    overview: 'CyberGuard provides separate workflows for victims and investigators. Victims can submit complaints, upload evidence, and follow case progress using a unique tracking ID. Investigators can review reports and evidence, verify file integrity with SHA-256 hashes, and update case statuses. Victim phone numbers are encrypted.',
    features: ['Victim registration and fraud complaint submission', 'Evidence uploads with SHA-256 integrity checks', 'Unique case tracking IDs and status updates', 'Investigator case review and management', 'Encrypted victim phone numbers'],
    tags: ['Django', 'Python', 'SQLite', 'SHA-256', 'Cryptography'],
    service: 'Web Application Development',
    primary: 'Figure 4.1 — Public Landing Page.png',
    gallery: [
      'Figure 4.1 — Public Landing Page.png',
      'Figure 4.6 — Fraud Reporting Interface I.png',
      'Figure 4.8 — Case Tracking - Under Investigation.png',
      'Figure 4.11 — Investigator Case Management Dashboard.png',
      'Figure 4.13 — Forensic Evidence Verification & Case Action I.png',
    ],
  },
  {
    id: 'stockflow',
    name: 'Inventory Management System',
    category: 'Business Software',
    description: 'An inventory management solution designed to help businesses manage products, monitor stock levels, and organise everyday inventory operations.',
    overview: 'StockFlow provides an interface for managing inventory and related business operations. Its administrative dashboard presents an overview of the system, while the product registration interface supports the management of inventory records.',
    features: ['Inventory and product management', 'Product registration', 'Administrative dashboard', 'Inventory record management'],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    service: 'Web Application Development',
    primary: 'Figure 4.2 — Main Administrative Dashboard.png',
    gallery: [
      'Figure 4.2 — Main Administrative Dashboard.png',
      'Figure 4.3 — Product Registration Modal.png',
    ],
  },
  {
    id: 'hotel',
    name: 'Hotel Management System',
    category: 'Business Software',
    description: 'A hotel management application designed to simplify booking administration and help staff manage day-to-day hotel operations.',
    overview: 'The application provides an administrative interface for overseeing hotel activities and managing bookings. Its dashboard and booking-management interface demonstrate how software can help organise hospitality operations.',
    features: ['Administrative dashboard', 'Booking management', 'Reservation administration', 'Hotel operations management'],
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase'],
    service: 'Web Application Development',
    primary: 'Figure 4.2 — Administrative Dashboard.png',
    gallery: [
      'Figure 4.2 — Administrative Dashboard.png',
      'Figure 4.3 — Booking Management Page.png',
    ],
  },
  {
    id: 'vias',
    name: 'VIAS — Vehicle Identification and Authentication System',
    category: 'Custom Software',
    description: 'A vehicle identification and authentication system designed to support campus vehicle registration, access monitoring, and administrative oversight.',
    overview: 'VIAS provides an interface for managing vehicle-related information and supporting campus access operations. Its administrative dashboard presents the system’s main functions, while vehicle management and activity logs show supporting access operations.',
    features: ['Vehicle registration and identification', 'Vehicle record management', 'Access activity monitoring', 'Administrative dashboard'],
    tags: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Tailwind CSS'],
    service: 'Custom Software Solutions',
    primary: 'Figure 4.2 — Administrator Dashboard.png',
    gallery: [
      'Figure 4.2 — Administrator Dashboard.png',
      'Figure 4.3 — Vehicle Management Page.png',
      'Figure 4.7 — Gate Activity Logs.png',
    ],
  },
  {
    id: 'aelmas',
    name: 'AELMAS — Employee Leave Management System',
    category: 'Business Software',
    description: 'An employee leave management application designed to organise leave requests and support administrative review and approval workflows.',
    overview: 'AELMAS provides an interface for managing employee leave-related processes. Its leave-application interface demonstrates how digital workflows can help organisations handle requests and reduce reliance on manual administration.',
    features: ['Employee leave applications', 'Leave request management', 'Administrative workflows', 'Digital record management'],
    tags: ['React', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
    service: 'Web Application Development',
    primary: null,
    gallery: [],
  },
];

const captionFor = (filename) => filename.replace(/\.png$/i, '');

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const modalRef = useRef(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);

  const closeModal = () => setActiveProject(null);

  useEffect(() => {
    if (!activeProject) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
      }
      if (event.key !== 'Tab') return;
      const focusable = modalRef.current?.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      requestAnimationFrame(() => openerRef.current?.focus());
    };
  }, [activeProject]);

  const discussProject = () => {
    const service = activeProject.service;
    closeModal();
    window.dispatchEvent(new CustomEvent('byt3:request-service', { detail: service }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="projects-page section-padding anchor-section" id="projects">
      <div className="container">
        <div className="page-header">
          <div>
            <p className="subtitle">OUR PROJECTS</p>
            <h1>Featured Projects</h1>
            <p className="desc">A selection of our recent work. Each project is built with purpose, designed for performance, and tailored to solve real-world problems.</p>
          </div>
          <a href="#" className="view-all-link">View All Projects <ArrowRight size={16}/></a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className={`project-image${project.primary ? '' : ' project-image-missing'}`}>
                {project.primary ? (
                  <img src={image(project, project.primary)} alt={`${project.name} application interface`} />
                ) : (
                  <p>Application screenshot not present in supplied assets</p>
                )}
              </div>
              <div className="project-content">
                <div className="project-card-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="client-badge">Client Project</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <button
                  type="button"
                  className="view-details"
                  onClick={(event) => {
                    openerRef.current = event.currentTarget;
                    setActiveProject(project);
                  }}
                  aria-label={`View details for ${project.name}`}
                >View Details <ArrowRight size={14}/></button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="project-modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}>
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            ref={modalRef}
          >
            <header className="project-modal-sticky-header">
              <div className="project-modal-heading">
                <h2 id="project-modal-title">{activeProject.name}</h2>
                <div className="project-card-meta">
                  <span className="client-badge">Client Project</span>
                  <span className="academic-label">Academic Client Project</span>
                </div>
              </div>
              <button ref={closeRef} type="button" className="project-modal-close" onClick={closeModal} aria-label="Close project details">
                <X size={20}/>
              </button>
            </header>
            <div className="project-modal-content">

            {activeProject.primary ? (
              <figure className="project-detail-primary">
                <a href={image(activeProject, activeProject.primary)} target="_blank" rel="noreferrer" aria-label={`Open full-size screenshot: ${captionFor(activeProject.primary)}`}>
                  <img src={image(activeProject, activeProject.primary)} alt={`${activeProject.name} primary application screenshot`} />
                </a>
                <figcaption>{captionFor(activeProject.primary)}</figcaption>
              </figure>
            ) : (
              <div className="project-detail-missing">No AELMAS application screenshots were included in the supplied project assets.</div>
            )}

            {activeProject.gallery.length > 1 && (
              <div className="project-gallery" aria-label="Supporting application screenshots">
                {activeProject.gallery.slice(1).map((filename) => (
                  <figure key={filename}>
                    <a href={image(activeProject, filename)} target="_blank" rel="noreferrer" aria-label={`Open full-size screenshot: ${captionFor(filename)}`}>
                      <img src={image(activeProject, filename)} alt={`${activeProject.name}: ${captionFor(filename)}`} loading="lazy" />
                    </a>
                    <figcaption>{captionFor(filename)}</figcaption>
                  </figure>
                ))}
              </div>
            )}

            <div className="project-modal-copy">
              <h3>Project overview</h3>
              <p>{activeProject.overview}</p>
              <h3>Key features</h3>
              <ul>{activeProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <h3>Technology stack</h3>
              <div className="project-tags">
                {activeProject.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
            <div className="project-modal-footer">
              <button type="button" className="btn btn-primary" onClick={discussProject}>
                Discuss a Similar Project <ArrowRight size={16}/>
              </button>
            </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Projects;
