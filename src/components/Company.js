import React from 'react'
import './Company.css'
import truck2 from '../images/truck2.png'
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand4.png'
import brand5 from '../images/brand5.png'
import brand6 from '../images/brand6.png'
export default function Company() {
  return (
    <>
        <div className="mainbox">
            <p id='name'>You'll be in good company</p>
            <div className="brand">
                <img src={truck2} alt="" style={{width:'50%'}}/>
                <div className="brands">
                    <div className="right-brands">
                        <img src={brand1} className='brandlogo' alt="" />
                        <img src={brand2} className='brandlogo' alt="" />
                        <img src={brand3} className='brandlogo' alt="" />
                        <img src={brand4} className='brandlogo' alt="" />
                    </div>
                    <div className="left-brands">
                        <img src={brand5} className='brandlogo' alt="" />
                        <img src={brand6} className='brandlogo' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
