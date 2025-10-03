
import React from 'react'
import '../styles/location.css'
import locationImage from '../assets/images/location-image.webp'


const Location = React.memo(() => {
  return (
    <section className="location-section">
        <div className="location-wrapper">
        
            <div className="location-content">
                <h2 className="location-heading">Our services are available throughout all regions of Tamil Nadu.</h2>
                </div>
                    <div className="location-image"> 
                <img  src={locationImage} alt="Location" className="image"/>
            </div>
          </div>
    </section>      
  )
})

export default Location