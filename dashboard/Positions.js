import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { positions } from '../data/data';

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allPositions").then((res) => {
      setAllPositions(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Avg.</th>
                    <th>LTP</th>
                    <th>P&L</th>
                    <th>Chg.</th>
                </tr>
            </thead>
            <tbody>
                {allPositions.map((stock, index) => {
                    const currVal = stock.price * stock.qty;
                    const isProfit = stock.isLoss ? false : true; 
                    const openClass = stock.isLoss ? "text-red" : "text-green";
                    const pnl = (currVal - (stock.avg * stock.qty)).toFixed(2);

                    return (
                        <tr key={index} className="table-row">
                            <td>{stock.product}</td>
                            <td>{stock.name}</td>
                            <td>{stock.qty}</td>
                            <td>{stock.avg.toFixed(2)}</td>
                            <td>{stock.price.toFixed(2)}</td>
                            <td className={openClass}>{pnl}</td>
                            <td className={openClass}>{stock.day}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
