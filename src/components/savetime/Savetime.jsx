import React from 'react'
import "./Savetime.css"

function Savetime() {
  return (
    <div className='savetime'>
      <h3>Save time, save money!</h3>
      <p>Sign up and we'll send the best deals to you</p>
      <div className="onerow">
      <input type="text" placeholder='Your Email address'/>
      <button>Subscribe</button>
      </div>
      
    </div>
  )
}

export default Savetime
