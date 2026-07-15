import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FaChevronDown, FaChevronUp, FaChartBar, FaEllipsisH,
  FaThumbtack, FaListUl, FaChartPie, FaChartLine 
} from 'react-icons/fa';
import OrderWindow from './OrderWindow';

import TradingViewWidget from './TradingViewWidget';

const WatchList = () => {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [orderMode, setOrderMode] = useState('buy');
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3002/allStocks")
         .then((res) => {
             setStocks(res.data);
         })
         .catch((err) => {
             console.log("Error fetching stocks", err);
         });
  }, []);

  const handleOpenOrder = (stock, mode) => {
    setSelectedStock(stock);
    setOrderMode(mode);
    setShowChart(false);
  };

  const handleOpenChart = (stock) => {
    setSelectedStock(stock);
    setShowChart(true);
  };

  const handleCloseOrder = () => {
    setSelectedStock(null);
    setShowChart(false);
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input 
            type="text" 
            placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx" 
            className="search-input"
        />
        <span className="counts">{stocks.length} / 50</span>
      </div>

      <ul className="list">
        {stocks.map((stock, index) => {
            return (
                <WatchListItem 
                    stock={stock} 
                    key={index} 
                    handleOpenOrder={handleOpenOrder}
                    handleOpenChart={handleOpenChart}
                />
            )
        })}
      </ul>

      {selectedStock && !showChart && (
          <div className="order-window-overlay" style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
              backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, 
              display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}>
              <OrderWindow 
                stock={selectedStock} 
                initialMode={orderMode} 
                closeOrderWindow={handleCloseOrder} 
              />
          </div>
      )}

      {selectedStock && showChart && (
         <div className="chart-overlay" style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
              backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, 
              display: 'flex', justifyContent: 'center', alignItems: 'center'
         }}>
             <div style={{ width: '80%', height: '80%', background: 'white', padding: '10px', borderRadius: '4px', position: 'relative' }}>
                 <button className="btn-close-chart" onClick={handleCloseOrder} style={{
                     position: 'absolute', right: '10px', top: '10px', zIndex: 10, cursor: 'pointer', padding: '5px'
                 }}>X</button>
                 <TradingViewWidget ticker={`NSE:${selectedStock.name}`} />
             </div>
         </div>
      )}
    </div>
  );
};

// Optional: Use MUI tooltip if available, otherwise native 'title' is okay.

// ... existing WatchList component ...

const WatchListItem = ({ stock, handleOpenOrder, handleOpenChart }) => {
    const [showActions, setShowActions] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleMouseEnter = (e) => {
        setShowActions(true);
    }
    const handleMouseLeave = (e) => {
        setShowActions(false);
        setShowMenu(false); // Close menu on mouse leave? Or keep open? Usually close on leave or click outside. 
        // For simplicity, let's keep it open until clicked again or mouse leave if that's the behavior in Kite (Kite usually closes on click elsewhere). 
        // But mouse leave is safer for a hover-based action bar.
    }

    const toggleMenu = (e) => {
        e.stopPropagation(); // Prevent list item click
        setShowMenu(!showMenu);
    };

    return (
        <li className="list-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{position: 'relative'}}>
            <div className="item-details">
                <span className={`item-name ${stock.isDown ? 'text-red' : ''}`}>{stock.name}</span>
                <span className="item-exchange text-muted" style={{marginLeft:"10px"}}>NSE</span>
            </div>
            <div className="item-price-container">
                <span className={`price ${stock.isDown ? 'text-red' : 'text-green'}`}>{stock.price}</span>
                
                <div className="action-buttons">
                    <button className="btn-buy" onClick={() => handleOpenOrder(stock, 'buy')} title="Buy (B)">B</button>
                    <button className="btn-sell" onClick={() => handleOpenOrder(stock, 'sell')} title="Sell (S)">S</button>
                    <button className="btn-action" onClick={() => handleOpenChart(stock)} title="Analytics/Chart"><FaChartBar /></button>
                    <button className="btn-action" onClick={toggleMenu} title="More"><FaEllipsisH /></button>
                </div>

                <span className="percent">{stock.percent}</span>
                {stock.isDown ? (
                   <FaChevronDown className="text-red" />
                ) : (
                   <FaChevronUp className="text-green" />
                )}
            </div>
            
            {showMenu && (
                <div className="more-menu-dropdown">
                    <div className="menu-item"><FaThumbtack /> Pin</div>
                    <div className="menu-item"><FaListUl /> Create GTT / GTC</div>
                    <div className="menu-item"><FaChartPie /> Fundamentals</div>
                    <div className="menu-item"><FaChartLine /> Technicals</div>
                    {/* Add more items as per screenshot */}
                </div>
            )}
        </li>
    )
}

export default WatchList;
