import React, { useState } from 'react';
import './OrderWindow.css';

const OrderWindow = ({ uid }) => {
  const [mode, setMode] = useState('buy'); // 'buy' or 'sell'
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(1000.20);
  const [activeTab, setActiveTab] = useState('regular'); // 'quick', 'regular', etc
  const [intraday, setIntraday] = useState(false);

  // Derived stock details (hardcoded for now as per image)
  const stockName = "HDFCBANK";
  const bsePrice = 1000.20;
  const nsePrice = 1001.50;

  return (
    <div className="order-window-container">
      {/* Header */}
      <div className={`order-header ${mode}`}>
        <div className="order-header-top">
            <h4 className="stock-name">{stockName}</h4>
            <div className="toggle-switch">
                <label className="switch">
                    <input 
                        type="checkbox" 
                        checked={mode === 'sell'} 
                        onChange={() => setMode(mode === 'buy' ? 'sell' : 'buy')} 
                    />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
        <div className="order-header-bottom">
            <div className="exchange-info active">
                <input type="radio" name="exchange" defaultChecked /> BSE ₹{bsePrice.toFixed(2)}
            </div>
            <div className="exchange-info">
                <input type="radio" name="exchange" /> NSE ₹{nsePrice.toFixed(2)}
            </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="order-tabs">
        {['Quick', 'Regular', 'Iceberg'].map((tab) => (
             <div 
                key={tab}
                className={`order-tab ${activeTab === tab.toLowerCase() ? `active ${mode}` : ''}`}
                onClick={() => setActiveTab(tab.toLowerCase())}
             >
                {tab}
             </div>
        ))}
      </div>

      {/* Body */}
      <div className="order-body">
            <div className="input-group">
                <div className={`input-field ${mode}`}>
                    <label>Qty.</label>
                    <input 
                        type="number" 
                        value={qty} 
                        onChange={(e) => setQty(e.target.value)} 
                        min="1"
                    />
                </div>
                <div className={`input-field ${mode}`}>
                    <label>Price</label>
                    <input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        step="0.05"
                    />
                </div>
            </div>

            <div className="options-row">
                <label className="checkbox-label">
                    <input 
                        type="checkbox" 
                        checked={intraday} 
                        onChange={(e) => setIntraday(e.target.checked)} 
                    />
                    Intraday MIS
                </label>
                <label className="checkbox-label">
                    <input 
                        type="checkbox" 
                        checked={!intraday} 
                        onChange={(e) => setIntraday(!e.target.checked)} 
                    />
                    Longterm CNC
                </label>
            </div>
      </div>

      {/* Footer */}
      <div className="order-footer">
          <div className="margin-info">
              <span>Margin required <span className="margin-value">₹{(price * qty).toFixed(2)}</span></span>
              <span>Available -</span>
          </div>
          <div className="buttons-row">
              <button className={`btn btn-submit ${mode}`}>
                  {mode === 'buy' ? 'Buy' : 'Sell'}
              </button>
              <button className="btn btn-cancel">Cancel</button>
          </div>
      </div>
    </div>
  );
};

export default OrderWindow;
