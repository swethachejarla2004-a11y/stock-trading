import React from 'react';

const Universe = () => {
    return (
        <div className="product-universe-container">
            <div className="universe-header">
                <h2>The StockApp Universe</h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            
            <div className="universe-grid">
                {/* Row 1 */}
                <div className="universe-item">
                    <img src="media/images/smallcaseLogo.png" alt="smallcase" />
                    <p>Thematic investment platform</p>
                </div>
                <div className="universe-item">
                    <img src="media/images/streakLogo.png" alt="Streak" style={{width:"150px"}} />
                    <p>Algo & strategy platform</p>
                </div>
                <div className="universe-item">
                     <img src="media/images/sensibullLogo.svg" alt="Sensibull" style={{width:"150px"}} />
                    <p>Options trading platform</p>
                </div>

                 {/* Row 2 */}
                 <div className="universe-item">
                    <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" style={{width:"150px"}} />
                    <p>Asset management</p>
                </div>
                <div className="universe-item">
                    <img src="https://placehold.co/150x50/e0e0e0/333?text=Tijori" alt="Tijori" />
                    <p>Fundamental research platform</p>
                </div>
                 <div className="universe-item">
                     <img src="media/images/dittoLogo.png" alt="Ditto" style={{width:"100px"}} />
                    <p>Insurance</p>
                </div>
            </div>

            <button className="btn-primary" style={{marginTop: "3rem"}} onClick={() => window.location.href='/signup'}>
                Sign up Now
            </button>
        </div>
    );
};

export default Universe;
