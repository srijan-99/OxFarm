import React from "react";

const TokenFarmingHeader = () => {
  // Example data (could be fetched from an API)
  const data = {
    currentTVL: "66.52K",
    allTimeHighTVL: "244.33K",
    farmContractAddress: "https://etherscan.io/address/0x123456789abcdef",
  };

  // Inline styles
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1c1c1e",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "930px",
    margin: "0 auto",
    color: "#FFE600",
    fontFamily: "Arial, sans-serif",
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    padding: "0 10px",
  };

  const titleStyle = {
    fontSize: "14px",
    color: "#FFE600",
    marginBottom: "5px",
  };

  const valueStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ffffff",
  };

  const linkStyle = {
    color: "#ffd300",
    textDecoration: "underline",
    fontSize: "14px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <div style={titleStyle}>Current Total Value Locked - $</div>
        <div style={valueStyle}>{data.currentTVL}</div>
      </div>
      <div style={sectionStyle}>
        <div style={titleStyle}>All Time High Value Locked - $</div>
        <div style={valueStyle}>{data.allTimeHighTVL}</div>
      </div>
      <div style={sectionStyle}>
        <a
          href={data.farmContractAddress}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Farm Contract Address
        </a>
      </div>
    </div>
  );
};

export default TokenFarmingHeader;
