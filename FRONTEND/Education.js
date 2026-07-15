import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className="education-container">
            <div className="education-image">
                <img src="media/images/education.svg" alt="Varsity Education" />
            </div>
            
            <div className="education-content">
                <h3>Free and open market education</h3>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="/varsity">Varsity &rarr;</a>
                
                <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="/qna">TradingQ&A &rarr;</a>
            </div>
        </div>
    );
};

export default Education;
