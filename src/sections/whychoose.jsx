import React from 'react'
import '../styles/whychoose.css'

const Whychoose = React.memo(() => {
  return (
    <section className="whychoose-section">
         <div className='whychoose-wrapper' >
            <div className='whychoose-heading'>
                <h2>Why Choose Us</h2>
            </div>
            <div className='whychoose-content' >
            <h4 className='whychoose-title'>Not  just a Planner. A Partner.</h4>
            <p className='whychoose-description'> A wedding isn’t about putting on a show. It’s about what feels right for you. Who’s in the room. What kind of love you’re celebrating. We get that. And we’ll  help you plan something that feels as honest, warm, and personal as it should.</p>
            <div className='whychoose-points' >
                <div className='whychoose-point' >
                    <h3 className='whychoose-point-title'>300+</h3>
                    <p className='whychoose-point-description'>  EVENTS DESIGNED </p>
                </div>
                <div className='whychoose-point' >
                    <h3 className='whychoose-point-title'>99%</h3>
                    <p className='whychoose-point-description'>Client Satisfaction Rate</p>
                </div>
                <div className='whychoose-point' >
                    <h3 className='whychoose-point-title'>Trusted</h3>
                    <p className='whychoose-point-description'>Bridal Team</p>
                </div>
            </div>
            </div>
         </div>
    </section>
  )
             
})

export default Whychoose