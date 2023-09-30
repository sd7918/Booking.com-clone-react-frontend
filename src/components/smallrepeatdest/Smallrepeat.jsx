import React from 'react'
import "./smallrepeat.css"

function smallrepeat({location,imgSrc}) {
  return (
    <div className='smallrepeatsec'>
      <p>{location}</p>
      <img src={imgSrc} alt="" />
    </div>
  )
}

export default smallrepeat
