import React from 'react';

const Brokerage = () => {
    return (
        <div className="container" style={{maxWidth:"1000px", margin:"0 auto", padding:"4rem 0"}}>
            <div className="row">
                <div className="col-8">
                    <a href="" style={{textDecoration:"none", color:"#387ed1"}}><h3 className="fs-5 mb-4">Brokerage calculator</h3></a>
                    
                    <div className="charges-table-container">
                        <table className="table table-bordered" style={{fontSize:"14px", color:"#666"}}>
                            <thead>
                                <tr style={{backgroundColor:"#f9f9f9"}}>
                                    <th style={{width:"25%"}}>Categories</th>
                                    <th style={{width:"25%"}}>Equity Delivery</th>
                                    <th style={{width:"25%"}}>Equity Intraday</th>
                                    <th style={{width:"25%"}}>F&O - Futures</th>
                                    <th style={{width:"25%"}}>F&O - Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Brokerage</td>
                                    <td>Zero Brokerage</td>
                                    <td>Flat ₹ 20 or 0.03% (lower)</td>
                                    <td>Flat ₹ 20 or 0.03% (lower)</td>
                                    <td>Flat ₹ 20</td>
                                </tr>
                                <tr>
                                    <td>STT/CTT</td>
                                    <td>0.1% on buy & sell</td>
                                    <td>0.025% on sell</td>
                                    <td>0.0125% on sell</td>
                                    <td>0.0625% on sell (on premium)</td>
                                </tr>
                                 <tr>
                                    <td>Transaction charges</td>
                                    <td>NSE: 0.00345%<br/>BSE: 0.00345%</td>
                                    <td>NSE: 0.00345%<br/>BSE: 0.00345%</td>
                                    <td>NSE: 0.002%<br/>BSE: 0</td>
                                    <td>NSE: 0.053% (on premium)<br/>BSE: 0</td>
                                </tr>
                                <tr>
                                    <td>GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <td>SEBI charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                 <tr>
                                    <td>Stamp charges</td>
                                    <td>0.015% or ₹1500 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="text-center mt-5">
                        <a href="" style={{textDecoration:"none", color:"#387ed1", fontSize:"14px"}}>Calculate your costs upfront using our brokerage calculator</a>
                    </div>
                </div>
                
                <div className="col-4">
                    <a href="" style={{textDecoration:"none", color:"#387ed1"}}><h3 className="fs-5 mb-4">List of charges</h3></a>
                     <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"13px"}} className="text-muted">
                        <li>Standard Plan (Equity): ₹20 or 0.03% whichever is lower.</li>
                        <li>Call & Trade: ₹50 per order.</li>
                        <li>RMS Auto-squareoff: ₹50 per order.</li>
                        <li>Contract Note: Digital (Free), Physical (₹20).</li>
                   </ul>
                </div>
            </div>
        </div>
    );
};

export default Brokerage;
