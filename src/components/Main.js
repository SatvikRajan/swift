import React from 'react'
import imagesrc from '../images/landline.png'
import '../components/Main.css'
export default function Main() {
    const eclipse = (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="7.5" cy="7.5" r="6.5" stroke="white" strokeWidth="2"/>
        </svg>
    )
  return (
    <div className='container'>
        <div className="frame1 text-container">
            <img src={imagesrc} alt=""/>
            <div className='text-container'>
                <p>Call Us</p>
                <a href='tel:1300 779 438' className='tag'>1300 779 438</a>
            </div>
        </div>
        <div className="frame2 text-container">
            <ul>
                <a href='Why' className='tag1'>Why Swift Transport</a>
                <a href='Fleet' className='tag1'>Fleet</a>
                <a href='Policy' className='tag1'>Company Policies</a>
                <a href='AboutUs' className='tag1'>About Us</a>
                <a href='Contact' className='tag1'>Contact Us</a>
            </ul>
        </div>
        <div className="frame3 text-container">
            <ul>
                <a href="Swift" className='tag2' style={{
                    backgroundColor: "rgba(237, 27, 36, 0.55)",
                    borderRadius: "7px",
                    padding: "2px 20px",
                    fontWeight: "bold"}}>Swift Intermodel</a>
                <a href="Transport" className='tag2'>Container Transport Solutions</a>
                <a href="Warehousing" className='tag2'>Complete Warehousing Solutions</a>
            </ul>
        </div>
        <div className='text-container frame4'>
            <p className='head1'>Cheaper delivery costs through <br />innovative vehicle design</p>
            <p className='head2'>OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS <br /> CAN'T. YOU'LL BE PLEASANTLY SUPRISED</p>
            <a href="TAXI AND COURIER TRUCK" className='tag3'>TAXI AND COURIER TRUCK
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="24" viewBox="0 0 54 24" fill="none">
            <path d="M14 12L49 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M43 5L50 12L43 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg></a>
        </div>
        <div className='slider'>
            <a href='1'>{eclipse}</a>
            <a href='2'>{eclipse}</a>
            <a href='3'>{eclipse}</a>
            <a href='4'>{eclipse}</a>
            <a href='5'>{eclipse}</a>
            <a href='6'>{eclipse}</a>
            <a href='7'>{eclipse}</a>
        </div>
    </div>
  )
}