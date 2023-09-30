import React from 'react'
import "./body.css"
import imgSrc from "../../pictures/bengalore.jpg"
import imgSrc1 from "../../pictures/plane.jpeg"

function Body() {
  return (
    <div className='bodySection'>

      <div className="offerSection">
        <h3>Offers</h3>
        <p>Promotions, deals and special offers for you</p>
        <div className="cardSection">
            <div className="carditems">
                <div className="leftside">
                    <h4>Working, relaxing or a bit of both</h4>
                    <p>Browse properties offering extended stays, many with reduced monthly rates</p>
                    <button className='cardButton'>Find a stay</button>
                </div>
                <div className="rightside">
                    <img src={imgSrc} alt="" />
                </div>
            </div>
            <div className="carditems">
                    <div className="leftside">
                        <h4>Fly away to your dream holiday</h4>
                        <p>Get inspired, compare and book flights with more flexibility</p>
                        <button className='cardButton'>Search For a flight</button>
                    </div>
                    <div className="rightside">
                        <img src={imgSrc1} alt="" />
                    </div>
            </div>
        </div>
      </div>

      
      
    </div>
  )
}

export default Body
