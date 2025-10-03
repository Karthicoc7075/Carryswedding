import React, { useRef,useState,useEffect,useCallback } from 'react';
import './styles/global.css';
import Header from './components/header';
import Hero from './sections/hero';
import About from './sections/about';
import Whychoose from './sections/whychoose';
import Service from './sections/service';
import Highlight from './sections/highlight';
import Package from './sections/package';
import Contact from './sections/contact';
import Footer  from './sections/footer'
import Location from './sections/location';
import { ToastContainer} from 'react-toastify';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const packageRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState('hero');

   const scrollToSection = useCallback((ref, sectionName) => {
    ref.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
    setActiveSection(sectionName);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.dataset.section);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = [
      heroRef.current,
      aboutRef.current,
      serviceRef.current,
      packageRef.current,
      contactRef.current,
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []); // Good - no dependencies


  return (
    <div className="App">
      <Header
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        refs={{
          heroRef,
          aboutRef,
          serviceRef,
          packageRef,
          contactRef,
        }} 
      />
      <ToastContainer />
      
      <section ref={heroRef} data-section="hero">
        <Hero />
      </section>
      
      <section ref={aboutRef} data-section="about">
        <About />
      </section>
      
      <section ref={serviceRef} data-section="service">
        <Service />
      </section>
      
      <Highlight />
      
      <section ref={packageRef} data-section="package">
        <Package />
      </section>
      
      <section ref={contactRef} data-section="contact">
        <Contact />
      </section>
      
      <Location />
      <Footer />
    </div>
  );
}

export default App;