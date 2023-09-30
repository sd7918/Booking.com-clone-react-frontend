import React from 'react'
import "./Footerimage.css"

function Footerimage({imgSrc}) {
  return (
    <div className='footerimg'>
        <img src={imgSrc} alt="" />
    </div>
  )
}

export default Footerimage
