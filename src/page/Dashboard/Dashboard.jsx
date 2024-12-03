import React, { useState, useEffect } from "react";
import "./dashboard.css";
import CardData from '../Dashboard/CardData';
import OxHeader from "../VentToken/OxHeader";
import OxFooter from "../VentToken/OxFooter";
import ResponsiveDrawer from "../Sidebar/Sidebar";
import UserInfoCard from './UserInfoCard'
import {TotalFarm} from '../web3'

// Dashboard component
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(() => {
    const savedState = localStorage.getItem("sidebar");
    return savedState ? JSON.parse(savedState) : true;
  });

  const ToggleSidebar = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      localStorage.setItem("sidebar", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <>
      <div className="main-dashboard" style={{ display: "flex", width: "100vw" }}>
        <ResponsiveDrawer isOpen={isOpen} ToggleSidebar={ToggleSidebar} />

        <div className="main-dashboard-1" style={{ width: "93%" }}>
          <OxHeader isOpen={isOpen} ToggleSidebar={ToggleSidebar} />

          <div className="dashboards-container">
            <header className="dashboards-header">
              <div className="header-left">
                <h1>Dashboard</h1>
              </div>
            </header>

            {/* User Info Section */}
            <section className="user-info-section">

              <div className="user-card">
                <div className="user-card-1">
                  <div className="avatar">US</div>
                  <p>User ID</p>

                  <h3>ABC1234</h3>
                </div>
                <div className="user-details">
                  <div className='user-details_1'>
                  <p style={{marginTop:'-25px'}}>Wallet Address: 0x123...ABCD</p>
                  <p style={{marginTop:'-15px'}}>Referral ID: ABC1234</p>
                  <p style={{marginTop:'-15px'}}>
                    Referral Link:{" "}
                    <a href="#" className="referrer-link">
                      http://...?refID=ABC1234
                    </a>
                  </p>
                  
                  <p style={{marginTop:'-15px'}}>Total Farm:</p>
                </div>
                </div>
              </div>

              <div className="wallet-cards">

                <div className="card">
                  <h4>Airdrop</h4>
                  <p>- USDT (2.0)</p>
                  </div>
               
               <UserInfoCard />  
            
              </div>
            </section>

            {/* Rewards Section */}
            <section className="rewards-section">
              <div className="rewards-header">
                <h4>Your Direct Rewards</h4>
                <p>0 WYZ</p>
              </div>
              <div className="rewards-details">
                <div className="reward-card">
                  <button>Rank</button>
                </div>
                <div className="reward-card">
                  <button>0 USDT Rank Rewards</button>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="additional-stats">
              {CardData.map((card) => (
                <div className="stat-card" key={card.id}>
                  <div className="stat-card-main">
                    <div className="card-data-icon">{card.icon}</div>
                    <div className="card-data-content">
                      <p>{card.description}</p>
                      <span>{card.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>

      <OxFooter />
    </>
  );
};

export default Dashboard;
