import React from 'react'
import '../styles/package.css'
import serviceImage from '../assets/images/service .webp'
import serviceImage1 from '../assets/images/service 1.webp'
import serviceImage2 from '../assets/images/service 2.webp'
import serviceImage3 from '../assets/images/service 3.webp'
import serviceImage4 from '../assets/images/service 4.webp'
import serviceImage5 from '../assets/images/service 5.webp'
import serviceImage6 from '../assets/images/service 6.webp'
import serviceImage7 from '../assets/images/service 7.webp'
import serviceImage8 from '../assets/images/service 8.webp'
import ellipse from '../assets/images/Ellipse.svg'

function Package() {
    const packages = [
        {
            name: 'Standard Package',
            desc: 'We offer essential wedding services for up to 500 guests, including delicious catering, elegant décor, professional photography, and lively entertainment — all tailored to your needs. Our team is here to guide you through every detail, so feel free to discuss your vision with us and let’s create a celebration to remember.',
            price: '2 Lakh"s',
            services: [
                {
                    title: 'High Class Food',
                    descPoints:[
                        'Food for 500 people',
                    ],
                    image: serviceImage2,
                },
                {
                    title: 'DJ Setup',
                    descPoints:[
                       'Honey comb Theme  ',
                        'Smoke Machine'
                    ],
                    image: serviceImage3,
                },
                {
                    title: 'Stage Decor',
                    descPoints:[
                        'Design your dream decor here',
                    ],
                    image: serviceImage4,
                },
                {
                    title: 'Photo & Vidoe',
                    descPoints:[
                      'Traditional Photo & Video - 1',
                      'Wedding Album ( upto 300 Photos )'
                    ],
                    image: serviceImage,
                },
                {
                    title: 'Snacks Counter',
                    descPoints:[
                        'Popcorn & Cotton Candy ( 2 hours )',
                        'Ice Cream ( 300 Members )'
                    ],
                    image: serviceImage7,
                }
            ],
        },
         {
            name: 'Premium Package',
            desc: 'We offer essential wedding services for up to 700 guests, including delicious catering, elegant décor, professional photography, and lively entertainment — all tailored to your needs. Our team is here to guide you through every detail, so feel free to discuss your vision with us and let’s create a celebration to remember.',
            price: '4 Lakh"s',
            services: [
                {
                    title: 'High Class Food',
                    descPoints:[
                        'Food for 500 people',
                    ],
                    image: serviceImage2,
                },
                {
                    title: 'DJ Setup',
                    descPoints:[
                       'Honey comb Theme  ',
                        'Smoke Machine',
                        'Dance Floor'
                    ],
                    image: serviceImage3,
                },
                {
                    title: 'Stage Decor',
                    descPoints:[
                        'Design your dream decor here',
                    ],
                    image: serviceImage4,
                },
                {
                    title: 'Photo & Vidoe',
                    descPoints:[
                      'Traditional Photo & Video - 1',
                      'Wedding Album ( upto 300 Photos )',
                      'OutDoor shoot'
                    ],
                    image: serviceImage,
                },
                {
                    title: 'Snacks Counter',
                    descPoints:[
                        'Popcorn & Cotton Candy ( 2 hours )',
                        'Ice Cream & Welcome Drink ( 700 Members )'
                    ],
                    image: serviceImage7,
                },
                {
                    title: 'Wedding Girl',
                    descPoints:[
                        'Warm welcome to the wedding'
                    ],
                    image: serviceImage8,
                }
            ],
        },
         {
            name: 'Elite Package',
            desc: 'We offer essential wedding services for up to 1000 guests, including delicious catering, elegant décor, professional photography, and lively entertainment — all tailored to your needs. Our team is here to guide you through every detail, so feel free to discuss your vision with us and let’s create a celebration to remember.',
            price: '6 Lakh"s',
            services: [
                {
                    title: 'High Class Food',
                    descPoints:[
                        'Food for 500 people',
                    ],
                    image: serviceImage2,
                },
                {
                    title: 'DJ Setup',
                    descPoints:[
                       'Honey comb Theme  ',
                        'Smoke Machine',
                        'Dance Floor'
                    ],
                    image: serviceImage3,
                },
                {
                    title: 'Stage Decor',
                    descPoints:[
                        'Design your dream decor here',
                    ],
                    image: serviceImage4,
                },
                {
                    title: 'Photo & Vidoe',
                    descPoints:[
                      'Traditional Photo & Video - 1',
                      'Wedding Album - 2 ( upto 300 Photos )'
                    ],
                    image: serviceImage,
                },
                {
                    title: 'Snacks Counter',
                    descPoints:[
                        'Popcorn & Cotton Candy ( 2 hours )',
                        'Ice Cream & Welcome Drink ( 1000 Members )'
                    ],
                    image: serviceImage7,
                },
                {
                    title: 'Wedding Girl',
                    descPoints:[
                        'Warm welcome to the wedding'
                    ],
                    image: serviceImage8,
                },
                {
                    title: 'Chenda Melam',
                    descPoints:[
                        'Grand welcome with Chenda Melam'
                    ],
                    image: serviceImage6,
                }
            ],
        },

                         
            ]
  return (
    <section className="package-section" id="package">
            <div className="package-heading">
                <h2>Our Packages</h2>
            </div>

        <div className="package-wrapper">
            {
                packages.map((singlePackage, index) => (
                    <div className="package" key={index}>
                        <div className='package-header'>
                            <div className="package-name"> 
                                <h3>{singlePackage.name}</h3>
                            </div>
                            {/* <div className="package-price">
                                <img src={ellipse} alt="Ellipse" />
                                <h3>{singlePackage.price}</h3>
                            </div> */}
                        </div>
                        <div className="package-services">
                          <div className="package-services-wrapper">
                             {
                            singlePackage.services.map((service, idx) => (
                                 <div className='package-service' >
                                <div className="package-service-image"> 
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="package-service-text">
                                    <h4>{service.title}</h4>
                                    <ul>
                                        {service.descPoints.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))} 
                                    </ul>
                                </div>

                            </div>))
                           }
                            </div>
                        </div>
                           <div className="package-desc">
                             <div className="package-desc-wrapper">
                                <p>{singlePackage.desc}</p>
                            </div>
                            </div>
                            </div>
                ))
            }
        </div>
    </section>
  )
}

export default Package
                          

                            