import React from 'react';
import './OpenAccount.css';

const OpenAccount = () => {
    return (
        <div className="open-account-container">
            <h2 className="open-account-title">Open a StockApp account</h2>
            <p className="open-account-subtitle">
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>
            <button className="btn-primary" onClick={() => window.location.href='/signup'}>
                Sign up Now
            </button>
        </div>
    );
};

export default OpenAccount;
