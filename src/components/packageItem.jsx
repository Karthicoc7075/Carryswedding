import React from 'react'
import '../styles/package.css'
import ellipse from '../assets/images/Ellipse.svg'

function PackageItem({ singlePackage, index }) {
  const isEven = index % 2 === 0;

  return (
     <div className="package" key={index}>
                 
     <div className={`package-header ${!isEven ? 'even-layout' : 'odd-layout'}`}>
      <div className="package-price">
        <div
          className="price-wrapper"
          style={{
            background: `url(${ellipse}) no-repeat center/cover`,
          }}
        >
          <div className="price-overlay">
            <h3 className="price-text">₹ {singlePackage.price}</h3>
            <span className="price-label">Starting from</span>
          </div>
        </div>
      </div>
      <div className="package-name">
        <h3>{singlePackage.name}</h3>
      </div>
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
    
  );
}

export default PackageItem