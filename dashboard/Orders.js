import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders-container">
      {allOrders.length === 0 ? (
        <div className="no-orders text-center" style={{marginTop:"5rem"}}>
             <p>You haven't placed any orders today</p>
             <Link to="/" className="btn btn-blue" style={{textDecoration:"none", color:"#387ed1", marginTop:"1rem", display:"inline-block"}}>Get started</Link>
        </div>
      ) : (
          <>
            <h3 className="title">Orders ({allOrders.length})</h3>
            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>LTP</th>
                            <th>Mode</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((order, index) => {
                             return (
                                 <tr key={index}>
                                     <td>{new Date(order.createdAt).toLocaleTimeString()}</td>
                                     <td>{order.name}</td>
                                     <td>{order.qty}</td>
                                     <td>{order.price.toFixed(2)}</td>
                                     <td>{order.mode.toUpperCase()}</td>
                                     <td><span className="text-green">COMPLETE</span></td>
                                 </tr>
                             )
                        })}
                    </tbody>
                </table>
            </div>
          </>
      )}
    </div>
  );
};

export default Orders;
