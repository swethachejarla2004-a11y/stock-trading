import React from 'react';
import './Pricing.css'; // We'll create this next

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-content">
        <div className="pricing-text">
            <h2>Unbeatable pricing</h2>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="/pricing" className="pricing-link">See pricing &rarr;</a>
        </div>
        
        <div className="pricing-boxes">
            <div className="price-box">
                <div className="price-value">₹0</div>
                <div className="price-label">Free equity delivery and direct mutual funds</div>
            </div>
             <div className="price-box">
                <div className="price-value">₹20</div>
                <div className="price-label">Intraday and F&O</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
