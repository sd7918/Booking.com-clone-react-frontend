import React from 'react'
import "./Bodyicon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Bodyicon({icon,plan}) {
  return (
    <div className='bodyicon'>
      <FontAwesomeIcon icon={icon} />
      <p>{plan}</p>
    </div>
  )
}

export default Bodyicon
