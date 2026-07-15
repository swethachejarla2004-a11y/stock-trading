import React from 'react';

const RightSection = ({ imageURL, productName, productDescription, learnMore }) => {
    return (
        <div className="product-section-right">
             <div className="product-text">
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                 <div className="product-links">
                    <a href={learnMore}>Learn More →</a>
                </div>
            </div>
            <div className="product-image">
                <img src={imageURL} alt={productName} />
            </div>
        </div>
    );
};

export default RightSection;
