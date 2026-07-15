import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';
import './Pricing.css';

const PricingPage = () => {
    return (
        <>
            <Hero />
            <Brokerage />
            <OpenAccount />
        </>
    );
};

export default PricingPage;
