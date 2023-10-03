import React from 'react'
import './Services.css'
import truck1 from '../images/truck1.png'
import vector from '../images/Vector.png'
import warehouse from '../images/warehouse.png'
import traincargo from '../images/traincargo.png'
import g3264 from '../images/g3264.png'
import arrow1 from '../images/arow1.png'
export default function Services() {
    const svg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="24" viewBox="0 0 100 24" fill="none">
        <path d="M99.0607 13.0607C99.6464 12.4749 99.6464 11.5251 99.0607 10.9393L89.5147 1.39339C88.9289 0.807604 87.9792 0.807604 87.3934 1.39339C86.8076 1.97918 86.8076 2.92892 87.3934 3.51471L95.8787 12L87.3934 20.4853C86.8076 21.0711 86.8076 22.0208 87.3934 22.6066C87.9792 23.1924 88.9289 23.1924 89.5147 22.6066L99.0607 13.0607ZM1.31134e-07 13.5L98 13.5L98 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z" fill="#ED1B24"/>
        </svg>
    )
  return (
    <>
    <div className='service'>
        <p className='services'>Services</p>
        <div className="intro">
            <p className='heading'>A <span className="highlighted-text">smarter</span> container transport business</p>
            <p className='introduction'>AN ON-DEMAND CONTAINER TRANSPORT SOLUTION THAT WORKS, UTILISING THE LATEST IN GPS, GEO-MAPPING SOFTWARE AND TECHNOLOGY.</p>  
    </div>
            <div className="desc">
                <div className="box">
                    <p className='boxintro'>Transport - Container, Tautliner, Bulk</p>
                    <img src={truck1} alt=""/>
                    <p className='boxdesc'>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>
                    <a href="about" className='svg'>{svg}</a>
                </div>
                <div className="box">
                    <p className='boxintro'>Intermodal Rail Terminals</p>
                    <img src={traincargo} alt="" className='boximg'/>
                    <p className='boxdesc'>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>
                    <a href="about" className='svg'>{svg}</a>
                </div>
                <div className="box">
                    <p className='boxintro'>Empty Container Depots</p>
                    <img src={vector} alt="" className='boximg'/>
                    <p className='boxdesc'>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>
                    <a href="about" className='svg'>{svg}</a>
                </div>
                <div className="box">
                    <p className='boxintro'>Warehousing – 3PL, FAK and eCommerce</p>
                    <img src={warehouse} alt="" className='boximg'/>
                    <p className='boxdesc'>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>
                    <a href="about" className='svg'>{svg}</a>
                </div>
                <div className="box"
                    style={{
                        backgroundColor: '#ED1B24'
                    }}>
                    <p className='boxintro' style={{color:'white'}}>Bio-Security & Border Security(Customs)</p>
                    <img src={g3264} alt="" className='boximg'/>
                    <p className='boxdesc' style={{color:'white'}}>Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>
                    <a href="about" className='svg'><img src={arrow1} alt="" /></a>
                </div>
            </div>
        </div>
    </>
  )
}
