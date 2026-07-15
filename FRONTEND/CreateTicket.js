import React from 'react';

const CreateTicket = () => {
    return (
        <div className="support-ticket-container">
            <h3>To create a ticket, select a relevant topic</h3>
            
            <div className="ticket-grid">
                <div className="ticket-column">
                    <h4><i className="fa fa-plus-circle"></i> Account Opening</h4>
                    <a href="/">Getting started</a>
                    <a href="/">Online</a>
                    <a href="/">Offline</a>
                    <a href="/">Charges</a>
                    <a href="/">Company, Partnership and HUF</a>
                    <a href="/">Non Resident Indian (NRI)</a>
                </div>

                <div className="ticket-column">
                     <h4><i className="fa fa-user"></i> Your Zerodha Account</h4>
                    <a href="/">Login credentials</a>
                    <a href="/">Your Profile</a>
                    <a href="/">Account modification and segment addition</a>
                    <a href="/">CMR & DP ID</a>
                    <a href="/">Nomination</a>
                    <a href="/">Transfer and conversion of shares</a>
                </div>

                <div className="ticket-column">
                     <h4><i className="fa fa-chart-bar"></i> Trading and Markets</h4>
                    <a href="/">Trading FAQs</a>
                    <a href="/">Kite</a>
                    <a href="/">Margins</a>
                    <a href="/">Product and order types</a>
                    <a href="/">Corporate actions</a>
                    <a href="/">Kite features</a>
                </div>

                 <div className="ticket-column">
                     <h4><i className="fa fa-wallet"></i> Funds</h4>
                    <a href="/">Fund withdrawal</a>
                    <a href="/">Adding funds</a>
                    <a href="/">Adding bank accounts</a>
                    <a href="/">eMandates</a>
                </div>

                 <div className="ticket-column">
                     <h4><i className="fa fa-circle"></i> Console</h4>
                    <a href="/">IPO</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Funds statement</a>
                    <a href="/">Profile</a>
                    <a href="/">Reports</a>
                    <a href="/">Referral program</a>
                </div>

                 <div className="ticket-column">
                     <h4><i className="fa fa-coins"></i> Coin</h4>
                    <a href="/">Understanding mutual funds and Coin</a>
                    <a href="/">Coin app</a>
                    <a href="/">Coin web</a>
                    <a href="/">Transactions and reports</a>
                    <a href="/">National Pension Scheme (NPS)</a>
                </div>
            </div>
        </div>
    );
};

export default CreateTicket;
