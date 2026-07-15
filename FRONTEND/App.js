import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import Signup from './signup/Signup';
import Login from './signup/Login';
import AboutPage from './about/AboutPage';
import ProductPage from './product/ProductPage';
import PricingPage from './pricing/PricingPage';
import SupportPage from './support/SupportPage';
import ConsolePage from './console/ConsolePage';
import CoinPage from './coin/CoinPage';
import OrderWindow from './components/OrderWindow';

import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFound'; // Optional, but good practice. I'll define route with *

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/console" element={<ConsolePage />} />
        <Route path="/coin" element={<CoinPage />} />
        <Route path="/test/order-window" element={<div style={{display:'flex', justifyContent:'center', padding:'50px', backgroundColor: '#f0f0f0', height: '100vh'}}><OrderWindow /></div>} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
