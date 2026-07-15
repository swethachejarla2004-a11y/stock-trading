import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // Basic state to toggle the menu (if we were building the full responsive mobile menu or the dropdown)
    // For the desktop dropdown (the screenshot), it's usually just a link or a hover. 
    // But since it's a hamburger icon in the screenshot, let's implement the logic.
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
            <img src="media/images/logo.svg" alt="Zerodha" style={{width:"150px"}} />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><a href={process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001"} style={{color:"#387ed1", fontWeight:"bold"}}>Login</a></li>
        <li>
            <div className="menu-btn" onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
            </div>
        </li>
      </ul>
      
      {/* Mega Menu / Dropdown */}
      {isMenuOpen && (
          <div className="menu-dropdown">
              <div className="menu-top">
                  <div className="menu-item-product">
                      <a href={process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001"} style={{textDecoration:"none", color:"#444", textAlign:"center", display:"block"}}>
                        <img src="media/images/kite.png" style={{width:"50px", marginBottom:"10px"}} alt="Kite" />
                        <h5>Kite</h5>
                        <p style={{fontSize:"12px", color:"#9b9b9b", margin:0}}>Trading platform</p>
                      </a>
                  </div>
                  <div className="menu-item-product">
                      <a href="/console" style={{textDecoration:"none", color:"#444", textAlign:"center", display:"block"}}>
                        <img src="media/images/console.png" style={{width:"50px", marginBottom:"10px"}} alt="Console" />
                        <h5>Console</h5>
                         <p style={{fontSize:"12px", color:"#9b9b9b", margin:0}}>Backoffice</p>
                      </a>
                  </div>
                   <div className="menu-item-product">
                      <a href="/kite-connect" style={{textDecoration:"none", color:"#444", textAlign:"center", display:"block"}}>
                        <img src="media/images/kiteconnect.png" style={{width:"50px", marginBottom:"10px"}} alt="Kite Connect" />
                        <h5>Kite Connect</h5>
                         <p style={{fontSize:"12px", color:"#9b9b9b", margin:0}}>Trading APIs</p>
                      </a>
                  </div>
                   <div className="menu-item-product">
                      <a href="/coin" style={{textDecoration:"none", color:"#444", textAlign:"center", display:"block"}}>
                        <img src="media/images/coin.png" style={{width:"50px", marginBottom:"10px"}} alt="Coin" />
                        <h5>Coin</h5>
                         <p style={{fontSize:"12px", color:"#9b9b9b", margin:0}}>Mutual funds</p>
                      </a>
                  </div>
              </div>

              <div className="menu-bottom">
                <div className="menu-column">
                    <h3>Utilities</h3>
                    <a href="/">Brokerage calculator</a>
                    <a href="/">Margin calculator</a>
                    <a href="/">Holiday calendar</a>
                    <a href="/">Markets</a>
                </div>
                 <div className="menu-column">
                    <h3>Updates</h3>
                    <a href="/">Z-Connect blog</a>
                    <a href="/">Pulse News</a>
                    <a href="/">Circulars / Bulletin</a>
                    <a href="/">IPOs</a>
                </div>
                 <div className="menu-column">
                    <h3>Education</h3>
                     <a href="/">Varsity</a>
                    <a href="/">Trading Q&A</a>
                </div>
              </div>
          </div>
      )}
    </nav>
  );
};

export default Navbar;
