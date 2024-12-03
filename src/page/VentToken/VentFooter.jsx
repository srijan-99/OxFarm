import React, { useState, useEffect } from "react";

const HowItWorks = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define responsive styles based on screen width
  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1024;

  return (
    <>
      <div
        style={{
          padding: isMobile ? "10px" : isTablet ? "20px" : "40px",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // minHeight: "100vh",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "24px" : isTablet ? "28px" : "32px",
            fontWeight: "bold",
            margin: "20px 0",
            textAlign: "center",
          }}
        >
           This Work?
        </h1>

        <div
          style={{
            backgroundColor: "rgb(42, 42, 42)",
            color: "gb(211, 211, 211)",
            padding: "15px",
            borderRadius: "10px",
            maxWidth: "80%",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: "1.6",
              marginBottom: "10px",
            }}
          >
           
         
          0x Farming allows users to earn rewards by depositing their tokens into a specific farming pool. When tokens are farmed, they generate additional tokens as rewards, typically expressed as an Annual Percentage Yield (APY). Users can withdraw their farmed tokens at any time, but early withdrawals may forfeit some or all of the rewards, especially if a minimum farming duration is required. Rewards are periodically distributed and can either be claimed or reinvested to maximize returns. This process enables users to passively earn tokens while supporting the ecosystem, powered by 0x Farming.

          </p>
          
        </div>

        <p
          style={{
            color: "#d3d3d3",
            fontSize: isMobile ? "12px" : "14px",
            textAlign: "center",
            maxWidth: isMobile ? "90%" : "700px",
            lineHeight: "1.6",
          }}
        >
          Before using this site, please do your own research on how farming Farms
          and smart contracts work, make sure that you understand the risks and
          read our <span style={{ color: "#ffd300" }}>terms</span> and reviewed
          the audit. Don’t risk more than you can lose. 
        </p>
      </div>

    </>
  );
};

export default HowItWorks;
