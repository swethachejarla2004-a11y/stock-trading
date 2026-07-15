import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import WatchList from './components/WatchList';

import Summary from './components/Summary';
import Orders from './components/Orders';
import Holdings from './components/Holdings';
import Positions from './components/Positions';
import Funds from './components/Funds';
import Apps from './components/Apps';
import OrderWindow from './components/OrderWindow';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="dashboard-container">
        <WatchList />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/test/order-window" element={<div style={{display:'flex', justifyContent:'center', padding:'50px'}}><OrderWindow /></div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
