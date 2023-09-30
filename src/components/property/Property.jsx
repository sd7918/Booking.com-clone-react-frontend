import React from 'react'
import "./Property.css"

function Property({imgSrc,property}) {
  return (
    <div>
      <div className="propertyimages">
        <img src={imgSrc} alt="" />
        <p>{property}</p>
      </div>
    </div>
  )
}

export default Property
