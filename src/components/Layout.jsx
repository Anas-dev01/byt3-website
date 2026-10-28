import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Home />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
