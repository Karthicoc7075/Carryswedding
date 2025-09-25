import React from 'react'
import servicesImage1 from '../assets/images/service 1.webp'
import servicesImage2 from '../assets/images/service 2.webp'
import servicesImage3 from '../assets/images/service 3.webp'
import servicesImage4 from '../assets/images/service 4.webp'
import servicesImage5 from '../assets/images/service 5.webp'
import '../styles/service.css'
export default function Service() {


    const services = [
        {
            title: 'Photography',
            image: servicesImage1,
        },
        {
            title: 'Catering Services',
            image: servicesImage2,
        },
        {
            title: 'DJ & Entertainment', 
            image: servicesImage3,
        },
        {
            title: 'Stage Decoration',
            image: servicesImage4,
        },
    ];

  return (
    <section className="service-section">
            <div className='service-wrapper' >
                <div className='service-heading'>
                    <h2>Our Services</h2>
                </div>


                <div className='service-content' >
                    <ul className='service-list' >
                      {
                        services.map((service, index) => (
                            <li key={index} className='service-item' >
                                <div className='service-image' >
                                    <img src={service.image} alt={service.image} />
                                </div>
                                <h3 className='service-title' >{service.title}</h3>
                            </li>
                        ))
                      }
                    </ul>
                </div>
            </div>
    </section>

         )
}
