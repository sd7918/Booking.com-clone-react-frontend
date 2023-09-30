import React from 'react'
import "./destrepeat.css"
function Destrepeat( {location,imgSrc}) {
  return (
    <div>
      <div className="destinationSection">
        <div className="bigdestiny">
          <p>{location}</p>
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Destrepeat
