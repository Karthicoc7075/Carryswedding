import React from 'react'
import '../styles/highlight.css'
import highlightImage from '../assets/images/highlight-background.webp'

function Highlight() {
  return (
    <div className='highlight-section' >
           <div className='highlight-image' > <img src={highlightImage} alt="Highlight" /></div>
            <div className='highlight-content' >
                 <span className='highlight-overlay' ></span>
                 
                <h2 className='highlight-text' >Love & celebration, made special.</h2>
            </div>
        </div>
  )
}

export default Highlight