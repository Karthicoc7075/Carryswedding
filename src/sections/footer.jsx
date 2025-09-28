import React from 'react';
import '../styles/footer.css';
import Logo from '../assets/images/logo.png';
import CallIcon from '../assets/icons/call-icon.png';
import MailIcon from '../assets/icons/mail-icon.png';
import EmailIcon from '../assets/icons/Email Icon.png';
import LocationIcon from '../assets/icons/location-icon.png';
import InstaIcon from '../assets/icons/insta-icon.png';
import WhatsappIcon1 from '../assets/icons/Whatsapp Icon (1).png';
import WhatsappIcon from '../assets/icons/Whatsapp Icon.png';

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-heading">
        <h4>Let's Start Planning</h4>
      </div>

      <div className="footer-metadata">

        <div className="footer-contact">
          <div className="footer-item">
            <img src={LocationIcon} alt="Location icon" />
            <a href='https://www.google.com/maps?q=11.9341502,79.4892896&z=17&hl=en' target="_blank" rel="noopener noreferrer">No 64 Chidhambaranar Street,<br/> Lakshmi Nagar, <br/>Villupuram, 605602</a>
          </div>

          <div className="footer-item">
            <img src={CallIcon} alt="Call icon" />
            <div className="footer-contact-numbers">
              <a href="tel:8122697732">81226 97732</a>
              <a href="tel:9514441965">95144 41965</a>
              <a href="tel:9514419941">95144 19941</a>
            </div>
          </div>

          <div className="footer-item">
            <img src={MailIcon} alt="Mail icon" />
            <a href="mailto:caryswedding@gmail.com" target="_blank" rel="noopener noreferrer">caryswedding@gmail.com</a>
          </div>
        </div>

        <div className="footer-logo">
          <img src={Logo} alt="Carys Wedding" />
          <h4>LUXURY WEDDING<br/> PLANNERS & CONSULTANTS</h4>
        </div>
        <div className="footer-info">
          {/* <h4>SERVICE'S<br/> AVAILABLE IN ALL <br/>OVER TAMILNADU</h4> */}
          <div className="footer-socials">
            <a href="https://wa.me/9514419941" target="_blank" rel="noopener noreferrer"><img src={WhatsappIcon1} alt="WhatsApp icon" /></a>
            <a href="https://www.instagram.com/caryswedding_event" target="_blank" rel="noopener noreferrer"><img src={InstaIcon} alt="Instagram icon" /></a>
            <a href="mailto:caryswedding@gmail.com" target="_blank" rel="noopener noreferrer"><img src={EmailIcon} alt="Mail icon" /></a>
          </div>
          <p>© 2025 Caryswedding. All rights reserved.</p>
        </div>
      </div>
 <div className="circle blow-ripple" >
       <a href="https://wa.me/9514419941" target="_blank" rel="noopener noreferrer"><img src={WhatsappIcon} alt="WhatsApp icon" /></a>
      </div>
     
    </section>
  );
}

export default Footer;
