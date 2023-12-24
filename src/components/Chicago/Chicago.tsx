import React from 'react';
import image1 from '../../assets/about1.png';
import image2 from '../../assets/about2.png';
import './Chicago.css';

export default function Chicago() {
  return (
    <React.Fragment>
      <div className="chicago-section" id="chicago">
        <div className="left-side">
          <h2 className="section-title">About us</h2>
          <h3 className="chicago-subtitle">Little Lemon</h3>
          <h4 className="chicago-city">Chicago</h4>
          <p className="text">
            Some text here about restaurant Some text here about restaurant Some
            text here about restaurant Some text here about restaurant
          </p>
        </div>
        <div className="right-side">
          <div className="image-container">
            <img src={image1} alt="Image 1" className="chicago-image1" />
            <img src={image2} alt="Image 2" className="chicago-image2" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
