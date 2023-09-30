import React from 'react'
import "./Uproperties.css"



function uproperties({imgSrc,location,sublocation,ratings,reviews}) {
  return (
    <div>
      <div className="ucards">
        <img src={imgSrc} alt="" />
        <div className="textsec">
          <h3>{location}</h3>
          <p>{sublocation}</p>
          <div className="sidebyside">
              <p>{ratings}</p>
              <span>{reviews}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default uproperties
