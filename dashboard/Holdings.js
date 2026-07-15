import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { holdings } from '../data/data';

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);
    
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
            <thead>
                <tr>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Avg. cost</th>
                    <th>LTP</th>
                    <th>Cur. val</th>
                    <th>P&L</th>
                    <th>Net chg.</th>
                    <th>Day chg.</th>
                </tr>
            </thead>
            <tbody>
                {allHoldings.map((stock, index) => {
                    const currVal = stock.price * stock.qty;
                    const isProfit = stock.isLoss ? false : true; 
                    // Note: dummy data has 'net' as string "+10%", so styling based on isLoss boolean
                    // Actually, data has isLoss property. Let's use that logic or regex.
                    
                    const openClass = stock.isLoss ? "text-red" : "text-green";

                    return (
                        <tr key={index} className="table-row">
                            <td>{stock.name}</td>
                            <td>{stock.qty}</td>
                            <td>{stock.avg.toFixed(2)}</td>
                            <td>{stock.price.toFixed(2)}</td>
                            <td>{currVal.toFixed(2)}</td>
                            <td className={openClass}>{(currVal - (stock.avg * stock.qty)).toFixed(2)}</td>
                            <td className={openClass}>{stock.net}</td>
                            <td className={openClass}>{stock.day}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      </div>

      <div className="row" style={{marginTop:"2rem"}}>
            <div className="col-6">
                <div className="summary-card">
                    <h5>Total Investment</h5>
                    <h3>29,875.55</h3>
                </div>
            </div>
             <div className="col-6">
                 <div className="summary-card">
                    <h5>Current Value</h5>
                    <h3>31,432.12</h3>
                </div>
            </div>
      </div>
    </>
  );
};

export default Holdings;
