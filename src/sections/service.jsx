import React from 'react'
import PhotographyImage from '../assets/images/photograph.webp'
import CaterIngImage from '../assets/images/catering.webp'
import DJImage from '../assets/images/dj.webp'
import DecorationImage from '../assets/images/stageDecor.webp'
import SnackImage from '../assets/images/snack.webp'
import ChendaMelam from '../assets/images/chendaMelam.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import '../styles/service.css'

  const services = [
        {
            id: 1,
            title: 'Photography',
            image: PhotographyImage,

        },
        {
            id: 2,
            title: 'Catering Services',
            image: CaterIngImage,
        },
        {
            id: 3,
            title: 'DJ & Entertainment',
            image: DJImage,
        },
        {
            id: 4,
            title: 'Stage Decoration',
            image: DecorationImage,
        },
        {
            id: 5,
            title: 'Snacks Counter',
            image: SnackImage,
        },
        {
            id: 6,
            title: 'Traditional Chenda Melam',
            image: ChendaMelam,
        }
    ];


const Service = React.memo(() => {
    console.log("Service Rendered");
    
 
  
   
  return (
    <section id="whatwedo" className="service-section">
            <div className='service-wrapper' >
                <div className='service-heading'>
                    <h2>Our Services</h2>
                </div>


                <div className='service-content' >
                    <ul className='service-list' >
                      {
                        services.map((service) => (
                            <li key={service.id} className='service-item' >
                                <div className='service-image' >
                                    <LazyLoadImage
                                        src={service.image}
                                        alt={service.title}
                                        effect="blur"
                                    />
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
})

export default Service
