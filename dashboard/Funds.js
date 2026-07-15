import React from 'react';

const Funds = () => {
  return (
    <>
      <div className="funds-header" style={{marginBottom:"2rem"}}>
          <p>Instant, zero-cost fund transfers with UPI </p>
          <a href="" style={{textDecoration:"none", color:"#387ed1"}}>Add funds</a>
          <a href="" style={{marginLeft:"2rem", textDecoration:"none", color:"#387ed1"}}>Withdraw</a>
      </div>

      <div className="row">
          <div className="col-12 col-md-6">
              <div className="data-row">
                  <div className="label">Available margin</div>
                  <div className="value">4,043.10</div>
              </div>
              <div className="data-row">
                  <div className="label">Used margin</div>
                  <div className="value">3,757.30</div>
              </div>
              <div className="data-row">
                  <div className="label">Available cash</div>
                  <div className="value">7,800.40</div>
              </div>
          </div>
          <div className="col-12 col-md-6">
               <div className="data-row">
                  <div className="label">Opening Balance</div>
                  <div className="value">4,043.10</div>
              </div>
               <div className="data-row">
                  <div className="label">Payin</div>
                  <div className="value">0.00</div>
              </div>
          </div>
      </div>
    </>
  );
};

export default Funds;
