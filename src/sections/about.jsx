import React from 'react'
import '../styles/about.css'
import aboutImage from '../assets/images/about-image.png'

function About() {
  return (
    <section className="about-section">
       <div className='about-wrapper' >

        <div className='about-heading'>
            <h2>About Us</h2>
        </div>

        <div className='about-content' >
            <div className='about-image' >
            <img src={aboutImage} alt="About Us" />
              </div>
              <div className='about-text' >    
         <p>Weddings are not just events—they are stories of love, traditions, and celebrations that last a lifetime. At Cary’s Wedding Event, we specialize in bringing those stories to life with elegance, creativity, and flawless execution.</p>
            <p>We are a passionate team dedicated to crafting weddings that reflect your unique journey. From vibrant haldi ceremonies to soulful chenda melam processions, and from royal stage décor to unforgettable photography—we transform every moment into a lasting memory.</p>
            <p>With expertise in catering, photography, decoration, entertainment, and complete wedding management, we ensure that every detail is taken care of. Our goal is simple: to make your big day stress-free, beautiful, and truly unforgettable.</p>
          <p>At Cary’s Wedding Event, we don’t just plan weddings—we create experiences that your family and friends will cherish forever.</p>
           </div>
          </div>
           

           
        </div>
    </section>
  )
}

export default About