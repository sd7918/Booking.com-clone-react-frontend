import React from 'react'
import "./explore.css"

function explore({location,quantity,imgSrc}) {
  return (
    <div>
      <div className="cards">
        <img src={imgSrc} alt="" />
        <h4>{location}</h4>
        <p>{quantity}</p>
      </div>
    </div>
  )
}

export default explore
