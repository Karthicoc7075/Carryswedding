import React from 'react'
import '../styles/highlight.css'
import highlightImage from '../assets/images/highlight-background.webp'
const Highlight = React.memo(() => {
  console.log("Highlight Rendered");
  return (
    <div className='highlight-section' >
        <div className='highlight-image' > 
          <img
            src={"https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?cs=srgb&dl=pexels-rpnickson-2486168.jpg&fm=jpg"}
            alt="Highlight Background"
          />
        </div>
            <div className='highlight-content' >
                 <span className='highlight-overlay' ></span>
                 
                <h2 className='highlight-text' >Love & celebration, made special.</h2>
            </div>
        </div>
  )
})

export default Highlight