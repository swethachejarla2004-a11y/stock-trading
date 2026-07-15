import React from 'react';
import './CoinPage.css';

const CoinPage = () => {
  return (
    <div className="coin-page-container">
      <div className="coin-content">
        <div className="row align-items-center">
            {/* Left Side: Image */}
            <div className="col-12 col-md-7 text-center">
                <img 
                    src="media/images/coin.png" 
                    alt="Coin Dashboard" 
                    className="coin-hero-img" 
                    style={{width:"90%", maxWidth:"600px", borderRadius:"5px", boxShadow:"0 5px 15px rgba(0,0,0,0.1)"}}
                />
            </div>

            {/* Right Side: Content */}
            <div className="col-12 col-md-5 p-5">
                <div className="coin-logo mb-4">
                     <span style={{color:"#333", fontWeight:"bold", fontSize:"2rem"}}>coin</span>
                     <span style={{color:"#999", fontSize:"10px", textTransform:"uppercase", letterSpacing:"1px", marginLeft:"10px"}}>by Zerodha</span>
                </div>
                
                <h1 className="coin-heading">
                    Invest in your long term financial goals
                </h1>
                
                <p className="coin-subheading mt-3 mb-5">
                    Explore 0% commission direct Mutual funds and NPS investments with India's largest stockbroker.
                </p>

                <div className="coin-actions d-flex gap-3">
                    <button className="btn btn-login px-5 py-3" onClick={() => window.location.href="http://localhost:3001"}>
                        Login
                    </button>
                     <button className="btn btn-explore px-5 py-3">
                        Explore
                    </button>
                </div>
                 <div className="mt-3">
                        <span className="text-muted small">Don't have a Zerodha account? </span>
                        <a href="/signup" className="text-primary text-decoration-none">Signup now</a>
                </div>
            </div>
        </div>
      </div>

      <div className="coin-features text-center mt-5 mb-5 p-5">
           <h2 className="mb-3" style={{fontSize:"2.5rem", fontWeight:"500", color:"#444"}}>Many investment options</h2>
           <p className="text-muted mb-5" style={{fontSize:"1.2rem"}}>One platform for all your longterm investment needs</p>

           <div className="row justify-content-center align-items-center text-start mt-5 mb-5">
               <div className="col-2 text-end">
                   {/* Placeholder for Briefcase Icon */}
                   <i className="fas fa-briefcase" style={{fontSize:"3rem", color:"#387ed1"}}></i>
               </div>
               <div className="col-6">
                   <h4 className="mb-2">Direct mutual funds</h4>
                   <p className="text-muted">Save up to 1% in commissions by investing in zero commission direct mutual funds for free.</p>
                   <a href="/" style={{textDecoration:"none", fontWeight:"bold"}}>More</a>
               </div>
           </div>

            <div className="row justify-content-center align-items-center text-start mt-5 mb-5">
               <div className="col-2 text-end">
                    {/* Placeholder for Piggybank Icon */}
                    <i className="fas fa-hand-holding-usd" style={{fontSize:"3rem", color:"#6610f2"}}></i>
               </div>
               <div className="col-6">
                   <h4 className="mb-2">National Pension System</h4>
                   <p className="text-muted">Invest in NPS for a secure future: Simple. Beneficial. Your retirement income booster.</p>
                    <a href="/" style={{textDecoration:"none", fontWeight:"bold"}}>More</a>
               </div>
           </div>
      </div>

      <div className="coin-app-banner p-5 text-center" style={{backgroundColor:"#fbfbfb"}}>
          <div className="row align-items-center justify-content-center">
               <div className="col-12 col-md-5">
                   <h2 className="mb-3" style={{fontSize:"2rem"}}>Download the app</h2>
                   <p className="text-muted mb-4">Investing early makes a huge difference. Download the Coin app and make your first investment today.</p>
                   <div className="d-flex justify-content-center gap-3">
                        <img src="media/images/appstoreBadge.svg" alt="App Store" style={{height:"50px"}} />
                        <img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{height:"50px"}} />
                   </div>
               </div>
          </div>
      </div>
    </div>
  );
};

export default CoinPage;
