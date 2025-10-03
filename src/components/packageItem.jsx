import React,{useMemo} from 'react'
import '../styles/package.css'
import ellipse from '../assets/images/Ellipse.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const images = require.context("../assets/images", false, /\.(png|jpe?g|svg|webp)$/);



const  PackageItem = React.memo(({ singlePackage}) => {
  const isEven = singlePackage.id % 2 === 0;


  return (
     <div className="package" key={singlePackage.id}>
                 
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
                             {singlePackage.services.map((service, idx) => (
            <div className='package-service' key={idx}>
              <div className="package-service-image"> 
                              
                  <LazyLoadImage
                    effect="blur"
                    height={120}
                    width={160} 
                    src={images(`./${service.image}`)} 
                    alt={service.title} 
                  />
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
})

export default PackageItem;