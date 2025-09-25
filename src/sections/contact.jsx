import React from 'react'
import '../styles/contact.css'
import contactImage from '../assets/images/contact-image.png'

function Contact() {
  return (
   <section className="contact-section">
        <div className="contact-wrapper">
            <div className="contact-heading">
                <h2>Connect with Us Now</h2>
                <p>We’re just a message away from bringing your dream event to life. Reach out today — let’s start planning something unforgettable together.</p>
            </div>
            <div className="contact-group"> 
                <div className='contact-image' >
                    <img src={contactImage} alt="Contact Us" />
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required placeholder='Enter your name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required placeholder='Enter your email' />
                    </div>
                     <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" required placeholder='Enter your phone number' />
                    </div>
                     <div className="form-group">
                        <label htmlFor="district">District:</label>
                        <input type="text" id="district" name="district" required placeholder='Enter your district'     />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required placeholder='Write your message'></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
        
            </section>
  )
}

export default Contact