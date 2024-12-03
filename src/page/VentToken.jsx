import React, { useState, useEffect } from 'react';
import TokenFarming from './VentToken/TokenFarming';
import TokenFarmingHeader from './VentToken/TokenFarmingHeader';
import BnbChainStaking from './VentToken/BnbChainStaking';
import VentFooter from './VentToken/VentFooter';
import TransactionHistory from './VentToken/TransactionHistory';
import Graph from './VentToken/Graph';
import VentHeader from './VentToken/VentHeader';
import OxHeader from '../page/VentToken/OxHeader';
import OxFooter from '../page/VentToken/OxFooter';
import ResponsiveDrawer from '../page/Sidebar/Sidebar';

const VentToken = () => {
  
  // Initialize state with value from localStorage
  const [isOpen, setIsOpen] = useState(() => {
    // const savedState = localStorage.getItem('sidebarState');
    const savedState=localStorage.getItem('sidebarState');
    return savedState ? JSON.parse(savedState) : true; // Default to true and now convert again to object
  });

  // Function to toggle sidebar
  const ToggleSidebar = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      localStorage.setItem('sidebarState', JSON.stringify(newState)); // Save new state to localStorage beacuse localStorage  doesnt understand javascript
      return newState;
    });
  };

  return (
    <div className="dashboard-container" style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <ResponsiveDrawer isOpen={isOpen} ToggleSidebar={ToggleSidebar} />
      <div style={{ overflow: "auto", paddingRight: "20px" }}>
        <OxHeader style={{ marginTop: '40px' }} isOpen={isOpen} ToggleSidebar={ToggleSidebar} />
        <VentHeader />
        <BnbChainStaking />
        <div>
          <h1 style={{ textAlign: 'center', marginBottom: "25px", fontSize: '36px', fontWeight: '500px', lineHeight: '44px', marginTop: '60px', color: '#FFFFFF' }}>
            Token Farming Stats
          </h1>
          <TokenFarmingHeader />
          <TokenFarming />
        </div>
        <Graph />
        <TransactionHistory />
        <VentFooter />
        <OxFooter />
      </div>
    </div>
  );
};

export default VentToken;
