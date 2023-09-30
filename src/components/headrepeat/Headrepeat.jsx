import React from 'react'
import "./Headrepeat.css"

function Headrepeat({heading , subheading}) {
  return (
    <div>
      <div className="dest-heading">
        <h3>{heading}</h3>
        <p>{subheading}</p>
        </div>
    </div>
  )
}

export default Headrepeat
