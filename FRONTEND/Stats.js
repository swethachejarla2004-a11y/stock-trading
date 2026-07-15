import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stats-content">
        <h2 className="stats-title">Trust with Confidence</h2>
        
        <div className="stats-description">
            <div className="stats-block">
                <h3>Customer-First Always</h3>
                <p>That's why 1.5+ crore customers trust StockApp with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
            </div>

            <div className="stats-block">
                <h3>No Spam or Hidden Charges</h3>
                <p>No hidden charges, no spam calls. We keep it transparent and simple, just the way you like it.</p>
            </div>

            <div className="stats-block">
                <h3>The StockApp Universe</h3>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
        </div>
      </div>
      
      <div className="stats-image">
         <img src="media/images/ecosystem.png" alt="Stats Graphic" style={{width:"90%"}} />
         <div className="floating-links">
             <a href="/products">Explore our products &rarr;</a>
             <a href="/pricing">Try reliable trading &rarr;</a>
         </div>
      </div>
    </div>
  );
};

export default Stats;
