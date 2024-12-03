// import React from "react";

// const TokenStats = () => {
//   // Example data (can be fetched from API or smart contract)
//   const data = {
//     totalVentStaked: "24.608M",
//     rewardsLocked: "1.466M",
//     rewardsPerMinute: 5.71,
//     farmEndTime: "178D 8H 14M",
//     minutesRemaining: "256.8K Minutes Remaining",
//     rewardsUnlocked: "1.5M",
//     rewardsWithdrawn: "148.64K Rewards Withdrawn",
//   };

//   // Inline styles
//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     padding: "20px",
//     backgroundColor: "#121212",
//     color: "#fff",
//     fontFamily: "Arial, sans-serif",
//     gap: "20px",
//   };

//   const cardStyle = {
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "#1c1c1e",
//     padding: "20px",
//     borderRadius: "10px",
//     width: "100%", // Full width on small screens
//     maxWidth: "450px", // Limit width on larger screens
//     height: "170px",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
//     marginBottom: "20px",
//     textAlign: "center", // Center-align text for readability on smaller screens
//   };

//   const titleStyle = {
//     fontSize: "18px",
//     marginBottom: "10px",
//     color: "#ffd300",
//   };

//   const valueStyle = {
//     fontSize: "26px",
//     fontWeight: "bold",
//   };

//   const smallTextStyle = {
//     fontSize: "14px",
//     color: "#b3b3b3",
//   };

//   // Responsive adjustments
//   const mediaQuery = window.matchMedia("(max-width: 768px)");
//   if (mediaQuery.matches) {
//     // Apply mobile-specific styles
//     containerStyle.flexDirection = "column";
//     cardStyle.width = "90%"; // Reduce card width on mobile screens
//     cardStyle.marginBottom = "15px";
//     cardStyle.marginLeft='20px';
//   } else {
//     // Apply tablet/desktop styles
//     containerStyle.flexDirection = "row";
//     containerStyle.justifyContent = "space-around";
//   }

//   return (
//     <div style={containerStyle}>
//       <div>
//         {/* Card 1: Total VENT Staked */}
//         <div style={cardStyle}>
//           <div style={titleStyle}>Total VENT Staked</div>
//           <div style={valueStyle}>{data.totalVentStaked}</div>
//         </div>

//         {/* Card 2: Total VENT Rewards Locked */}
//         <div style={cardStyle}>
//           <div style={titleStyle}>Total VENT Rewards Locked</div>
//           <div style={valueStyle}>{data.rewardsLocked}</div>
//           <div style={smallTextStyle}>{data.rewardsPerMinute} VENT per minute</div>
//         </div>
//       </div>
//       <div>
//         {/* Card 3: Farm Ending In */}
//         <div style={cardStyle}>
//           <div style={titleStyle}>Farm Ending In</div>
//           <div style={valueStyle}>{data.farmEndTime}</div>
//           <div style={smallTextStyle}>{data.minutesRemaining}</div>
//         </div>

//         {/* Card 4: Total VENT Rewards Unlocked */}
//         <div style={cardStyle}>
//           <div style={titleStyle}>Total VENT Rewards Unlocked</div>
//           <div style={valueStyle}>{data.rewardsUnlocked}</div>
//           <div style={smallTextStyle}>{data.rewardsWithdrawn}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TokenStats;


import React from "react";

const TokenStats = () => {
  // Example data (replace with API or smart contract data as needed)
  const data = {
    totalVentStaked: "24.608M",
    rewardsLocked: "1.466M",
    rewardsPerMinute: 5.71,
    farmEndTime: "178D 8H 14M",
    minutesRemaining: "256.8K Minutes Remaining",
    rewardsUnlocked: "1.5M",
    rewardsWithdrawn: "148.64K Rewards Withdrawn",
  };

  // Inline styles
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#121212",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    gap: "20px",
    // Mobile view styles
    "@media (max-width: 768px)": {
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
    },
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1c1c1e",
    padding: "20px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "450px",
    height: "170px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    marginBottom: "20px",
    // Mobile view styles
    "@media (max-width: 768px)": {
      maxWidth: "300px",
      height: "auto",
      marginBottom: "10px",
    },
  };

  const titleStyle = {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#ffd300",
  };

  const valueStyle = {
    fontSize: "26px",
    fontWeight: "bold",
  };

  const smallTextStyle = {
    fontSize: "14px",
    color: "#b3b3b3",
  };

  return (
    <div style={containerStyle}>
      {/* Card 1: Total WYS Farmed */}
      <div style={cardStyle}>
        <div style={titleStyle}>Total WYS Farmed</div>
        <div style={valueStyle}>{data.totalVentStaked}</div>
      </div>

      {/* Card 2: Total WYS Rewards Locked */}
      <div style={cardStyle}>
        <div style={titleStyle}>Total WYS Rewards Locked</div>
        <div style={valueStyle}>{data.rewardsLocked}</div>
        <div style={smallTextStyle}>{data.rewardsPerMinute} WYS per minute</div>
      </div>

      {/* Card 3: Farm Ending In */}
      <div style={cardStyle}>
        <div style={titleStyle}>Farm Ending In</div>
        <div style={valueStyle}>{data.farmEndTime}</div>
        <div style={smallTextStyle}>{data.minutesRemaining}</div>
      </div>

      {/* Card 4: Total WYS Rewards Unlocked */}
      <div style={cardStyle}>
        <div style={titleStyle}>Total WYS Rewards Unlocked</div>
        <div style={valueStyle}>{data.rewardsUnlocked}</div>
        <div style={smallTextStyle}>{data.rewardsWithdrawn}</div>
      </div>
    </div>
  );
};

export default TokenStats;
