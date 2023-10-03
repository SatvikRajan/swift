import React from 'react'
import truck from '../images/truck.png'
import ('./WhySwift.css')
export default function WhySwift() {
  return (
    <div className='back'>
      <div className="frame">
        <div className="red-background">
        </div>
          <div className="frame-box">
            <p style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: 700,
              marginBottom: '30px'
            }}>A fleet capable of much more than you'd think</p>
            <p style={{
              color: 'white',
              fontSize: '16px',
              marginBottom: '30px',
              fontWeight: 400
            }}>With a diverse range of utes, trucks and semi-trailers, Swift Transport is capable of much more than you'd think. Combine our versatile fleet wth our industry leading technology and 'can-do' attitude for a winning logistics partnership with your organization.</p>
            <a href="Why" style={{
              color: 'white',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              fontSize: '24px',
              fontWeight: 700,
              textDecorationLine: 'underline',
              textTransform: 'uppercase',
              float: 'right'
            }}>Why Swift</a>
          </div>
          <img src={truck} alt="" className='truck'/>
      </div>
    </div>
  )
}
