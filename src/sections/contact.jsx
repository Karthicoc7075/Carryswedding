import React, { useState } from 'react'
import '../styles/contact.css'
import contactImage from '../assets/images/contact-image.png'
import { collection, addDoc } from 'firebase/firestore'
import db  from '../firebase' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        district: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        if(!formData.name || !formData.email || !formData.phone || !formData.district || !formData.message) {
            toast.error('Please fill in all fields.');
            setIsSubmitting(false);
            return;
        }

        try {
            const docRef = await addDoc(collection(db, 'Clients'), {
                ...formData,
                timestamp: new Date(),
                status: 'new'
            });

           
           const result = await emailjs.send(
        'service_r5r55xt',
        'template_ruwxm9d',
        {
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            user_district: formData.district,
            message: formData.message
        },
        'ox2qC5-yE6cga8IxT'
      )
     
      console.log(result.text);

            console.log('Document written with ID: ', docRef.id);

            setFormData({
                name: '',
                email: '',
                phone: '',
                district: '',
                message: ''
            });

            


            toast.success('Thank you! Your message has been sent successfully.');
        } catch (error) {
            console.error('Error adding document: ', error);
            toast.error('Sorry, there was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id='contact' className="contact-section">
            <div className="contact-wrapper">
                <div className="contact-heading">
                    <h2>Connect with Us Now</h2>
                    <p>We're just a message away from bringing your dream event to life. Reach out today — let's start planning something unforgettable together.</p>
                </div>
                <div className="contact-group"> 
                    <div className='contact-image'>
                        <img src={contactImage} alt="Contact Us" />
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                                placeholder='Enter your name' 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                                placeholder='Enter your email' 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleChange}
                                required 
                                placeholder='Enter your phone number' 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="district">District:</label>
                            <input 
                                type="text" 
                                id="district" 
                                name="district" 
                                value={formData.district}
                                onChange={handleChange}
                                required 
                                placeholder='Enter your district' 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                value={formData.message}
                                onChange={handleChange}
                                required 
                                placeholder='Write your message'
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                     
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact