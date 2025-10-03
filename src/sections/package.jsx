import React from 'react'
import '../styles/package.css'
import ellipse from '../assets/images/Ellipse.svg'
import PackageItem from '../components/packageItem'



 const packages = [
        {
            id: 1,
            name: 'Standard Package',
            desc: 'We offer essential wedding services for up to 500 guests, including delicious catering, elegant décor, professional photography, and lively entertainment — all tailored to your needs. Our team is here to guide you through every detail, so feel free to discuss your vision with us and let’s create a celebration to remember.',
            price: '2 Lakh"s',
            services: [
                {
                    title: 'High Class Food',
                    descPoints:[
                        'Food for 500 people',
                    ],
                    image: 'categ-1.webp',
                },
                {
                    title: 'DJ Setup',
                    descPoints:[
                       'Honey comb Theme  ',
                        'Smoke Machine'
                    ],
                    image: 'categ-2.webp',
                },
                {
                    title: 'Stage Decor',
                    descPoints:[
                        'Design your dream decor here',
                    ],
                    image: 'categ-3.webp',
                },
                {
                    title: 'Photo & Video',
                    descPoints:[
                      'Traditional Photo & Video - 1',
                      'Wedding Album ( upto 300 Photos )'
                    ],
                    image: 'categ-4.webp',
                },
                {
                    title: 'Snacks Counter',
                    descPoints:[
                        'Popcorn & Cotton Candy ( 2 hours )',
                        'Ice Cream ( 300 Members )'
                    ],
                    image: 'categ-5.webp',
                }
            ],
        },
         {
            id: 2,
            name: 'Premium Package',
            desc: 'We offer essential wedding services for up to 700 guests, including delicious catering, elegant décor, professional photography, and lively entertainment — all tailored to your needs. Our team is here to guide you through every detail, so feel free to discuss your vision with us and let’s create a celebration to remember.',
            price: '4 Lakh"s',
            services: [
                {
                    title: 'High Class Food',
                    descPoints:[
                        'Food for 700 people',
                    ],
                    image: 'categ-1.webp',
                },
                {
                    title: 'DJ Setup',
                    descPoints:[
                       'Honey comb Theme  ',
                        'Smoke Machine',
                        'Dance Floor'
                    ],
                    image: 'categ-2.webp',
                },
                {
                    title: 'Stage Decor',
                    descPoints:[
                        'Design your dream decor here',
                    ],
                    image: 'categ-3.webp',
                },
                {
                    title: 'Photo & Video',
                    descPoints:[
                      'Traditional Photo & Video - 1',
                      'Wedding Album ( upto 300 Photos )',
                      'OutDoor shoot'
                    ],
                    image: 'categ-4.webp',
                },
                {
                    title: 'Snacks Counter',
                    descPoints:[
                        'Popcorn & Cotton Candy ( 2 hours )',
                        'Ice Cream & Welcome Drink ( 700 Members )'
                    ],
                    image: 'categ-5.webp',
                },
                {
                    title: 'Welcome Girls',
                    descPoints:[
                        'Warm welcome to the wedding'
                    ],
                    image: 'categ-6.webp',
                }
            ],
        },
         {
            id: 3,
            name: 'Elite Package',
            desc: 'We offer essential wedding services for up to 1000 guests, including delicious catering, elegant décor, professional photography, and lively entertainment — all tailored to your needs. Our team is here to guide you through every detail, so feel free to discuss your vision with us and let’s create a celebration to remember.',
            price: '6 Lakh"s',
            services: [
                {
                    title: 'High Class Food',
                    descPoints:[
                        'Food for 1000 people',
                    ],
                    image: 'categ-1.webp',
                },
                {
                    title: 'DJ Setup',
                    descPoints:[
                       'Honey comb Theme  ',
                        'Smoke Machine',
                        'Dance Floor'
                    ],
                    image: 'categ-2.webp',
                },
                {
                    title: 'Stage Decor',
                    descPoints:[
                        'Design your dream decor here',
                    ],
                    image: 'categ-3.webp',
                },
                {
                    title: 'Photo & Video',
                    descPoints:[
                      'Traditional Photo & Video - 1',
                      'Wedding Album - 2 ( upto 300 Photos )'
                    ],
                    image: 'categ-4.webp',
                },
                {
                    title: 'Snacks Counter',
                    descPoints:[
                        'Popcorn & Cotton Candy ( 2 hours )',
                        'Ice Cream & Welcome Drink ( 1000 Members )'
                    ],
                    image: 'categ-5.webp',
                },
                {
                    title: 'Welcome Girls',
                    descPoints:[
                        'Warm welcome to the wedding'
                    ],
                    image: 'categ-6.webp',
                },
                {
                    title: 'Wedding Dance',
                    descPoints:[
                        'Special Dance Performance'
                    ],
                    image: 'categ-7.webp',
                },
                {
                    title: 'Chenda Melam',
                    descPoints:[
                        'Grand welcome with Chenda Melam'
                    ],
                    image: 'categ-8.webp',
                }
            ],
        },

                         
            ]


const Package = React.memo(() => {
    console.log("Package Rendered"  );
    
   




          
  return (
    
    <section id="package" className="package-section">
            <div className="package-heading">
                <h2>Our Packages</h2>
            </div>

        <div className="package-wrapper">
            {
                packages.map((singlePackage, index) => (
                   <PackageItem key={index} singlePackage={singlePackage} />
                ))
            }
        </div>
    </section>
  )
})

export default Package
                          

                            