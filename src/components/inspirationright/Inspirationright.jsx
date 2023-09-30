import React from 'react'
import "./Inspirationright.css"

function inspirationright({imgSrc,heading,subheading}) {
  return (
    <div>
      <div className="smallimages">
        <div className="images">
            <img src={imgSrc} alt="" />
        </div>
        <div className="text">
            <h5>{heading}</h5>
            <p>{subheading}</p>
        </div>
      </div>
    </div>
  )
}

export default inspirationright
