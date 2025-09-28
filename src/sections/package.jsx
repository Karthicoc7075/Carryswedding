import React from 'react'
import '../styles/package.css'
import serviceImage1 from '../assets/images/categ-1.webp'
import serviceImage2 from '../assets/images/categ-2.webp'
import serviceImage3 from '../assets/images/categ-3.webp'
import serviceImage4 from '../assets/images/categ-4.webp'
import serviceImage5 from '../assets/images/categ-5.webp'
import serviceImage6 from '../assets/images/categ-6.webp'
import serviceImage7 from '../assets/images/categ-7.webp'
import serviceImage8 from '../assets/images/categ-8.webp'   
import ellipse from '../assets/images/Ellipse.svg'
import PackageItem from '../components/packageItem'

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
                    image: serviceImage1,
                },
                {
                    title: 'DJ Setup',
                    descPoints:[
                       'Honey comb Theme  ',
                        'Smoke Machine'
                    ],
                    image: serviceImage2,
                },
                {
                    title: 'Stage Decor',
                    descPoints:[
                        'Design your dream decor here',
                    ],
                    image: serviceImage3,
                },
                {
                    title: 'Photo & Vidoe',
                    descPoints:[
                      'Traditional Photo & Video - 1',
                      'Wedding Album ( upto 300 Photos )'
                    ],
                    image: serviceImage4,
                },
                {
                    title: 'Snacks Counter',
                    descPoints:[
                        'Popcorn & Cotton Candy ( 2 hours )',
                        'Ice Cream ( 300 Members )'
                    ],
                    image: serviceImage5,
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
                    image: serviceImage1,
                },
                {
                    title: 'DJ Setup',
                    descPoints:[
                       'Honey comb Theme  ',
                        'Smoke Machine',
                        'Dance Floor'
                    ],
                    image: serviceImage2,
                },
                {
                    title: 'Stage Decor',
                    descPoints:[
                        'Design your dream decor here',
                    ],
                    image: serviceImage3,
                },
                {
                    title: 'Photo & Vidoe',
                    descPoints:[
                      'Traditional Photo & Video - 1',
                      'Wedding Album ( upto 300 Photos )',
                      'OutDoor shoot'
                    ],
                    image: serviceImage4,
                },
                {
                    title: 'Snacks Counter',
                    descPoints:[
                        'Popcorn & Cotton Candy ( 2 hours )',
                        'Ice Cream & Welcome Drink ( 700 Members )'
                    ],
                    image: serviceImage5,
                },
                {
                    title: 'Wedding Girl',
                    descPoints:[
                        'Warm welcome to the wedding'
                    ],
                    image: serviceImage6 ,
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
                    image: serviceImage1,
                },
                {
                    title: 'DJ Setup',
                    descPoints:[
                       'Honey comb Theme  ',
                        'Smoke Machine',
                        'Dance Floor'
                    ],
                    image: serviceImage2,
                },
                {
                    title: 'Stage Decor',
                    descPoints:[
                        'Design your dream decor here',
                    ],
                    image: serviceImage3,
                },
                {
                    title: 'Photo & Vidoe',
                    descPoints:[
                      'Traditional Photo & Video - 1',
                      'Wedding Album - 2 ( upto 300 Photos )'
                    ],
                    image: serviceImage4,
                },
                {
                    title: 'Snacks Counter',
                    descPoints:[
                        'Popcorn & Cotton Candy ( 2 hours )',
                        'Ice Cream & Welcome Drink ( 1000 Members )'
                    ],
                    image: serviceImage5,
                },
                {
                    title: 'Wedding Girl',
                    descPoints:[
                        'Warm welcome to the wedding'
                    ],
                    image: serviceImage6 ,
                },
                {
                    title: 'Wedding Dance',
                    descPoints:[
                        'Special Dance Performance'
                    ],
                    image: serviceImage7,
                },
                {
                    title: 'Chenda Melam',
                    descPoints:[
                        'Grand welcome with Chenda Melam'
                    ],
                    image: serviceImage8,
                }
            ],
        },

                         
            ]




          
  return (
    
    <section id="package" className="package-section">
            <div className="package-heading">
                <h2>Our Packages</h2>
            </div>

        <div className="package-wrapper">
            {
                packages.map((singlePackage, index) => (
                   <PackageItem key={index} singlePackage={singlePackage} index={index} />
                ))
            }
        </div>
    </section>
  )
}

export default Package
                          

                            