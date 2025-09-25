import React,{useState} from 'react'
import '../styles/header.css'
import logo from '../assets/images/logo.png'
import sendIcon from '../assets/icons/send-icon.png'
import menuIcon from '../assets/icons/Menu Icon.png'
import closeIcon from '../assets/icons/Close Icon.png'

function Header() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  console.log(isMenuOpen)



  return (
    <header className="header">
       <div className='header-wrapper' >
        <div className="header-logo">
            <img src={logo} alt="Carys Wedding Logo" className="logo-image" />
        </div>


        <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <img src={closeIcon} alt="Close Menu" /> : <img src={menuIcon} alt="Open Menu"  />}
      </button>
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
                <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#whatwedo" className="nav-link">What we do</a></li>
                <li className="nav-item"><a href="#package" className="nav-link">Package</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link contact-link"><img src={sendIcon} alt="Send Icon" className="send-icon" /> <span>Get in Touch</span></a></li>
            </ul>
        </nav>

       </div>
    </header>

  )
}

export default Header