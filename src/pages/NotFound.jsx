import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Pages.css';

const NotFound = () => (
  <main className="not-found-page">
    <div className="not-found-content">
      <p className="subtitle">404 — PAGE NOT FOUND</p>
      <h1>This page isn’t here.</h1>
      <p className="desc">The link may be outdated, or the address may have been entered incorrectly.</p>
      <Link className="btn btn-primary" to="/">
        <ArrowLeft size={16} aria-hidden="true" /> Back to BYT3
      </Link>
    </div>
  </main>
);

export default NotFound;
