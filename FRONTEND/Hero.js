import React from 'react';

const Hero = () => {
    return (
        <section className="support-hero">
            <div className="support-hero-wrapper">
                <div className="support-title">
                    <h4>Support Portal</h4>
                    <a href="/support">Track tickets</a>
                </div>
                <div className="support-search">
                    <h2>Search for an answer or browse help topics to create a ticket</h2>
                    <div className="search-input-wrapper">
                        <input type="text" placeholder="Eg: how do i activate F&O, why is my order rejected ..." />
                        <div className="search-icon">
                            <i className="fa fa-search"></i>
                        </div>
                    </div>
                    <div className="quick-links">
                        <a href="/support">Track account opening</a>
                        <a href="/support">Track segment activation</a>
                        <a href="/support">Intraday margins</a>
                        <a href="/support">Kite user manual</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
