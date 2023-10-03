import React from 'react';
import './Company1.css';
import truck3 from '../images/truck3.png';
import company from '../images/company.png';

export default function Company1() {
  return (
    <div className="company1">
      <div className="gradient-background">
        <img src={truck3} alt="" style={{
            maxWidth: '50%',
            height: 'auto'
        }}/>
        <div className="company2">
          <p className="subtitle">We deliver, no matter how hard the challenge.</p>
          <img src={company} alt="" className="company-image" /><br/>
          <a href="k" className="cta-link">Kennards Hire Case Study</a>
        </div>
      </div>
    </div>
  );
}
