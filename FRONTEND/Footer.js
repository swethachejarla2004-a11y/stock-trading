import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-columns">
                    <div className="footer-col">
                        <div className="footer-logo">
                            <h2>StockApp</h2>
                        </div>
                        <p className="copyright">
                            &copy; 2010 - 2024, StockApp Broking Ltd.<br />
                            All rights reserved.
                        </p>
                        <ul className="social-links">
                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/referral">Referral programme</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/press">StockApp.tech</a></li>
                            <li><a href="/press">Press & media</a></li>
                            <li><a href="/csr">StockApp Cares (CSR)</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/support">Support portal</a></li>
                            <li><a href="/z-connect">Z-Connect blog</a></li>
                            <li><a href="/list-charges">List of charges</a></li>
                            <li><a href="/downloads">Downloads & resources</a></li>
                            <li><a href="/videos">Videos</a></li>
                            <li><a href="/market-overview">Market overview</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Account</h3>
                        <ul>
                            <li><a href="/open-account">Open an account</a></li>
                            <li><a href="/fund-transfer">Fund transfer</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-disclaimer">
                  <p>StockApp Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through StockApp Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through StockApp Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: StockApp Broking Ltd., #153/154, 4th Cross, J.P. Nagar 4th Phase, Opp. Clarence Public School, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@stockapp.com, for DP related to dp@stockapp.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                  <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                  <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                  <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of StockApp and offering such services, please create a ticket here.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
