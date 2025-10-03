import React,{useState,useEffect} from 'react'
import '../styles/header.css'
import logo from '../assets/images/logo.png'
import sendIcon from '../assets/icons/send-icon.png'
import menuIcon from '../assets/icons/Menu Icon.png'
import closeIcon from '../assets/icons/Close Icon.png'

const Header = React.memo(({ scrollToSection, activeSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

// console.log("Header Rendered", scrolled);
// console.log("Active Section:", activeSection);


  return (
    <header className="header">
       <div className={`header-wrapper ${scrolled ? 'scrolled' : ''}`} >
        <span className='box' ></span>
        <a href="/" className="header-logo">
            <img src={logo} alt="Carys Wedding Logo" className="logo-image" />
        </a>


        <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg> : <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <line x1="3" y1="6" x2="21" y2="6"></line>
  <line x1="3" y1="12" x2="16" y2="12"></line>
  <line x1="3" y1="18" x2="12" y2="18"></line>
</svg> }
      </button>
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
                <li className="nav-item"><button onClick={() => { setIsMenuOpen(false); scrollToSection(refs.heroRef); }} className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}>Home</button></li>
                <li className="nav-item"><button onClick={() => { setIsMenuOpen(false); scrollToSection(refs.aboutRef); }} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</button></li>
                <li className="nav-item"><button onClick={() => { setIsMenuOpen(false); scrollToSection(refs.serviceRef); }} className={`nav-link ${activeSection === 'service' ? 'active' : ''}`}>What we do</button></li>
                <li className="nav-item"><button onClick={() => { setIsMenuOpen(false); scrollToSection(refs.packageRef); }} className={`nav-link ${activeSection === 'package' ? 'active' : ''}`}>Package</button></li>
                <li className="nav-item"><button onClick={() => { setIsMenuOpen(false); scrollToSection(refs.contactRef); }} className={`contact-link ${activeSection === 'contact' ? 'active' : ''}`}><img src={sendIcon} alt="Send Icon" className="send-icon" /> <span>Get in Touch</span></button></li>
            </ul>
        </nav>

       </div>
       
    </header>

  )
})

export default Header