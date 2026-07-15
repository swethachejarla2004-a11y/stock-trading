import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="logo-container">
        <img src="https://zerodha.com/static/images/logo.svg" alt="Zerodha" style={{width:"120px"}} />
      </div>
      <div className="topbar-menu">
        <Link to="/" className="selected">Dashboard</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/holdings">Holdings</Link>
        <Link to="/positions">Positions</Link>
        <Link to="/funds">Funds</Link>
        <Link to="/apps">Apps</Link>
      </div>
      <div className="user-profile">
          <div className="avatar">ZU</div>
          <span>USERID</span>
      </div>
    </div>
  );
};

export default TopBar;
