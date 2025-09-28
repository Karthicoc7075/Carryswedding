import React from 'react'
import PhotographyImage from '../assets/images/photograph.webp'
import CaterIngImage from '../assets/images/catering.webp'
import DJImage from '../assets/images/dj.webp'
import DecorationImage from '../assets/images/stageDecor.webp'
import SnackImage from '../assets/images/snack.webp'
import ChendaMelam from '../assets/images/chendaMelam.webp'

import '../styles/service.css'
export default function Service() {
 
    const services = [
        {
            title: 'Photography',
            image: PhotographyImage,
        },
        {
            title: 'Catering Services',
            image: CaterIngImage,
        },
        {
            title: 'DJ & Entertainment', 
            image: DJImage,
        },
        {
            title: 'Stage Decoration',
            image: DecorationImage,
        },
        {
            title: 'Snacks & Sweets',
            image: SnackImage,
        },
        {
            title: 'Chenda Melam',
            image: ChendaMelam,
        },
    ];

   
  return (
    <section id="whatwedo" className="service-section">
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
