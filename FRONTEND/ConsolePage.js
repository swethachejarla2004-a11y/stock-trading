import React from 'react';
import './ConsolePage.css';

const ConsolePage = () => {
  return (
    <div className="console-page-container">
      <div className="console-content">
        <div className="row align-items-center">
            {/* Left Side: Image */}
            <div className="col-12 col-md-7 text-center">
                <img 
                    src="media/images/console.png" 
                    alt="Console Dashboard" 
                    className="console-hero-img" 
                    style={{width:"90%", maxWidth:"600px", borderRadius:"5px", boxShadow:"0 10px 30px rgba(0,0,0,0.1)"}}
                />
                {/* Note: I am using the console icon image as placeholder. You should replace 'console.png' with a full screenshot of the dashboard named 'consoleDashboard.png' */}
            </div>

            {/* Right Side: Content */}
            <div className="col-12 col-md-5 p-5">
                <div className="console-logo mb-4">
                    <img src="media/images/logo.svg" alt="Zerodha" style={{width:"20px", marginRight:"10px", opacity:0.5}} />
                    <span style={{color:"#999", fontSize:"12px", textTransform:"uppercase", letterSpacing:"1px"}}>Zerodha</span>
                </div>
                
                <h1 className="console-heading">console</h1>
                
                <p className="console-subheading mt-3 mb-5">
                    The central dashboard for your<br />Zerodha account
                </p>

                <div className="console-actions">
                    <button className="btn btn-primary btn-lg px-5 py-3" onClick={() => window.location.href="http://localhost:3001"}>
                        LOGIN WITH KITE
                    </button>
                    <div className="mt-3">
                        <span className="text-muted small">Don't have an account? </span>
                        <a href="/signup" className="text-primary text-decoration-none">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ConsolePage;
