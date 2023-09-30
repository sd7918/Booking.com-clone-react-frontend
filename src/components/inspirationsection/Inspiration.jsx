import React from 'react'
import "./Inspiration.css"

import imgSrc from "../../pictures/mumbai.jpg"
function Inspiration() {
  return (
    <div className='imagesection'>
        <div className='textarea'>
            <h3>10 cricket cities in India you can not miss</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis</p>
        </div>
        <div className='imagearea'>
        <img src={imgSrc} alt="" />
        </div>
    </div>
    
  )
}

export default Inspiration
