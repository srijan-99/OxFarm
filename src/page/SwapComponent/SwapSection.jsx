import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const SwapSection = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);
  const [fromSelectedOption, setFromSelectedOption] = useState("ETH");
  const [toSelectedOption, setToSelectedOption] = useState("BTC");
  const [selectedTab, setSelectedTab] = useState("Native");

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setFromSelectedOption((prev) => toSelectedOption);
    setToSelectedOption((prev) => fromSelectedOption);
  };

  const handleFromOptionSelect = (option) => {
    setFromSelectedOption(option);
    setIsFromDropdownOpen(false);
  };

  const handleToOptionSelect = (option) => {
    setToSelectedOption(option);
    setIsToDropdownOpen(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#0d1117",
        padding: "16px",
        borderRadius: "10px",
        width: "90%",
        maxWidth: "600px",
        color: "#c9d1d9",
        margin: "0 auto",
        boxSizing: "border-box",
     
      }}
    >
      {/* Tab Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0",
          borderBottom: "1px solid #161b24",
          backgroundColor: "#161b24",
          padding: "5px 5px",
        }}
      >
        {["Native", "Paraswap", "OpenOcean"].map((tab) => (
          <div
            key={tab}
            onClick={() => setSelectedTab(tab)}
            style={{
              cursor: "pointer",
              color: selectedTab === tab ? "#f4bf00" : "#8b949e",
              fontWeight: selectedTab === tab ? "bold" : "normal",
              marginBottom: "5px",
              overflow: "hidden",
              fontSize: "1rem",
              flex: 1,
              textAlign: "center",
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Upper Swap Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          flexWrap: "wrap",
        }}
      >
        {/* Responsive styling */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexBasis: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: isToggled ? "#333" : "#555",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#fff" }}>{fromSelectedOption}</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontSize: "16px" }}>0.00</span>
            <div style={{ fontSize: "12px", color: "#8b949e" }}>
              balance: 0{" "}
              <span style={{ color: "#f4bf00", cursor: "pointer" }}>Max</span>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Wallet */}
      <button
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#f4bf00",
          color: "#000",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default SwapSection;
