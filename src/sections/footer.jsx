import React from 'react';
import '../styles/footer.css';
import Logo from '../assets/images/logo.png';
import CallIcon from '../assets/icons/call-icon.png';
import MailIcon from '../assets/icons/mail-icon.png';
import LocationIcon from '../assets/icons/location-icon.png';
import InstaIcon from '../assets/icons/insta-icon.png';
import WhatsappIcon from '../assets/icons/Whatsapp Icon (1).png';

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-heading">
        <h4>Let's Start Planning</h4>
      </div>

      <div className="footer-metadata">
        {/* Contact Info */}
        <div className="footer-contact">
          <div className="footer-item">
            <img src={LocationIcon} alt="Location icon" />
            <p>No 64 Chidhambaranar Street,<br/> Lakshmi Nagar, <br/>Villupuram, 605602</p>
          </div>

          <div className="footer-item">
            <img src={CallIcon} alt="Call icon" />
            <div className="footer-contact-numbers">
              <p>81226 97732</p>
              <p>95144 41965</p>
              <p>95144 19941</p>
            </div>
          </div>

          <div className="footer-item">
            <img src={MailIcon} alt="Mail icon" />
            <p>caryswedding@gmail.com</p>
          </div>
        </div>

        {/* Logo + Tagline */}
        <div className="footer-logo">
          <img src={Logo} alt="Carys Wedding" />
          <h4>LUXURY WEDDING<br/> PLANNERS & CONSULTANTS</h4>
        </div>

        {/* Service Info + Social Media */}
        <div className="footer-info">
          <h4>SERVICE'S<br/> AVAILABLE IN ALL <br/>OVER TAMILNADU</h4>
          <div className="footer-socials">
            <a href="#"><img src={WhatsappIcon} alt="WhatsApp icon" /></a>
            <a href="#"><img src={InstaIcon} alt="Instagram icon" /></a>
          </div>
          <p>© 2025 Caryswedding. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
