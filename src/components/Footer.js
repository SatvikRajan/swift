import React from 'react'
import footer1 from '../images/footer1.png'
import footer2 from '../images/footer2.png'
import footer3 from '../images/footer3.png'
import footer4 from '../images/footer4.png'
import footer5 from '../images/footer5.png'
import './Footer.css'
export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="footer-heading">
            <img src={footer1} alt="" className='footer-image'/>
            <p>Call us at anytime on 1210 779 434</p>
        </div>
        <div className="footer-heading">
            <img src={footer2} alt="" className='footer-image'/>
            <p>See why more companies prefer Swift</p>
        </div>
        <div className="footer-heading">
            <img src={footer3} alt="" className='footer-image'/>
            <p>Email the Team at Swift Transport Courier Division</p>
        </div>
        <div className="footer-heading">
            <img src={footer4} alt="" className='footer-image'/>
            <p>Email the Team at Swift Containers Transport Division</p>
        </div>
        <div className="footer-heading">
            <img src={footer5} alt="" className='footer-image'/>
            <p>Visit our warehousing and distribution center</p>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="footer-bottom-header">
            <div className="footer-bottom-items">
               <p style={{marginBottom: '20px'}}>Information</p>
               <p>About Us</p>
               <p>Carrers</p>
               <p>Driver Safety</p>
               <p>Contact Us</p>
               <p>Terms of use</p>
               <p>Privacy Policy</p>
            </div>
            <div className="footer-bottom-items">
               <p style={{marginBottom: '20px'}}>CONTAINER TRANSPORT</p>
               <p>Convenience</p>
               <p>Location</p>
               <p>Live Unloads</p>
               <p>Side Loader Drops</p>
               <p>50T Onsite Forklift</p>
               <p>Oversize, Overweight</p>
               <p>Dangerous Goods</p>
               <p>24/7 Operations</p>
               <p>Company Owned Fleet</p>
            </div>
            <div className="footer-bottom-items">
               <p style={{marginBottom: '20px'}}>Complete warehousing solutions</p>
               <p>Short & Long Term</p>
               <p>Indoor & Outdoor Storage</p>
               <p>Racked, Dry & Floor Stacked</p>
               <p>Distribution</p>
               <p>Import, Unpack, Pack, Ship</p>
               <p>Sub-Leasing</p>
               <p>Secure Facilities</p>
               <p>Barcode Scanning</p>
            </div>
        </div>
    </div>
    </>
  )
}
