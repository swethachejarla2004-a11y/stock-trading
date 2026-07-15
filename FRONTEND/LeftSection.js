import React from 'react';

const LeftSection = ({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) => {
    return (
        <div className="product-section-left">
            <div className="product-image">
                <img src={imageURL} alt={productName} />
            </div>
            <div className="product-text">
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <div className="product-links">
                    <a href={tryDemo}>Try Demo →</a>
                    <a href={learnMore}>Learn More →</a>
                </div>
                <div className="product-stores">
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play" /></a>
                    <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="App Store" style={{marginLeft:"10px"}} /></a>
                </div>
            </div>
        </div>
    );
};

export default LeftSection;
