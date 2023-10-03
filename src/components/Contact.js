import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <>
        <div className="contact">
            <div className="contactelement">
                <p id='ques'>Have a question regarding Swift services?</p>
                <a href='contact' id='quesdes'>Contact Us <svg xmlns="http://www.w3.org/2000/svg" width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807616 47.9792 0.807616 47.3934 1.3934C46.8076 1.97919 46.8076 2.92894 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM-1.31134e-07 13.5L58 13.5L58 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="white"/>
                </svg></a>
            </div>
        </div>
    </>
  )
}
