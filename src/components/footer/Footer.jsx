import React from 'react'
import "./Footer.css"

function Footer({footeritem}) {
  return (
    <div className='footer'>
      <p><a href="">{footeritem}</a></p>
    </div>
  )
}

export default Footer
