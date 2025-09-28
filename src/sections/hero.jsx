import React from 'react'
import '../styles/hero.css'
import heroImage from '../assets/images/hero-background.webp'

function Hero() {
  return (
    <section id='/' className="hero-section">
        <div className="hero-image">
            <img src={heroImage} alt="Hero Background" className="background-image" />
        </div>
       
      <div className="hero-content">
        <span className='overlay' ></span>
        <h1 className="hero-heading">You won’t feel like a client. <br /> You’ll feel like family.</h1>
        <p className="hero-desc">We capture beautiful wedding moments that you’ll cherish forever. From smiles to celebrations, we turn your special day into lasting memories.</p>
      </div>
      
    </section>
  )
}

export default Hero