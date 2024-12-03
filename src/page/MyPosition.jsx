import { useState, useEffect } from "react";
import OxHeader from './VentToken/OxHeader';
import OxFooter from './VentToken/OxFooter';
import ResponsiveDrawer from './Sidebar/Sidebar';

const MyPosition = () => {
  // const [isOpen, setIsOpen] = useState(true);
  const[isOpen,setIsOpen]=useState(()=>{
    const savedState=localStorage.getItem('sidebar');
    return savedState ? JSON.parse(savedState) :true;
  });


  const ToggleSidebar = () => {
    setIsOpen((prev)=>{
      const newState=!prev;
      localStorage.setItem('sidebar',JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <>
      <div className="my-positions" style={{ display: 'flex', flexDirection: 'row', height:'100vh'
      }}>
        {/* Sidebar */}
   
  <ResponsiveDrawer isOpen={isOpen} ToggleSidebar={ToggleSidebar}  />



        {/* Main Content Area */}
        <div
          style={{
            flex: 1,
            overflow: 'auto',
            marginRight: '15px',
            paddingTop: '20px', // Adjusted marginTop for spacing
          }}
        >
          <OxHeader isOpen={isOpen} ToggleSidebar={ToggleSidebar} />
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              backgroundColor: "#121212",
              color: "#fff",
              padding: "20px",
              minHeight: "50vh",
            }}
          >
            {/* Your existing layout structure here... */}
            <div
              style={{
                margin: "auto",
                padding: "20px",
                backgroundColor: "#1a1a1a",
                borderRadius: "10px",
                marginTop:'80px',
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Top Section */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "20px",
                  marginBottom: "30px",
                }}
              >
                <div style={cardStyle}>
                  <p style={labelStyle}>Deposits</p>
                  <h3 style={valueStyle}>$ 0.000</h3>
                </div>
                <div style={cardStyle}>
                  <p style={labelStyle}>Claimable Rewards</p>
                  <h3 style={valueStyle}>0 WYS</h3>
                </div>
                <div style={cardStyle}>
                  <p style={labelStyle}>Referral Link</p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#ffcc00",
                      cursor: "pointer",
                      marginBottom: "5px",
                    }}
                  >
                    Click to copy
                  </p>
                  <span
                    style={{
                      wordWrap: "break-word",
                      fontSize: "12px",
                      color: "#ddd",
                    }}
                  >
                    http://...?refID=0
                  </span>
                </div>
                <div style={cardStyle}>
                  <p style={labelStyle}>$ WYS Token</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginTop: "10px",
                    }}
                  >
                    <button style={buttonStyle}>Sell</button>
                    <button style={buttonStyle}>Buy</button>
                  </div>
                </div>
              </div>

              {/* Table Section */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ marginBottom: "15px", color: "#ffcc00" }}>Farm</h3>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    backgroundColor: "#1a1a1a",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "#202020" }}>
                      <th style={tableHeaderStyle}>Farm</th>
                      <th style={tableHeaderStyle}>Total Amount</th>
                      <th style={tableHeaderStyle}>Duration</th>
                      <th style={tableHeaderStyle}>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderTop: "1px solid #333" }}>
                      <td
                        colSpan="4"
                        style={{
                          textAlign: "center",
                          padding: "15px",
                          color: "#888",
                        }}
                      >
                        No data available
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Rewards & Referrals Section */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "20px",
                }}
              >
                <div style={infoCardStyle}>
                  <h3 style={{ marginBottom: "10px", color: "#ffcc00" }}>
                    Rewards & Referrals
                  </h3>
                  <p style={labelStyle}>Available Reward to Claim</p>
                  <h3 style={{ color: "#ffcc00", marginBottom: "10px" }}>0 WYS</h3>
                  <button style={claimButtonStyle}>Claim</button>
                  <p
                    style={{
                      marginTop: "10px",
                      wordWrap: "break-word",
                      fontSize: "12px",
                      color: "#ccc",
                    }}
                  >
                    https://registration.wyscale.com/?refID=0
                  </p>
                </div>
                <div style={infoCardStyle}>
                  <h3 style={{ marginBottom: "10px", color: "#ffcc00" }}>
                    Tier Details
                  </h3>
                  <p style={labelStyle}>
                    Referee Wallet: <span style={{ color: "#888" }}>...</span>
                  </p>
                  <p style={labelStyle}>
                    Direct Referral: <span style={{ color: "#888" }}>0</span>
                  </p>
                  <p style={labelStyle}>
                    Team: <span style={{ color: "#888" }}>0</span>
                  </p>
                  <p style={labelStyle}>
                    Referral Rate:{" "}
                    <span style={{ color: "#ffcc00", fontWeight: "bold" }}>10%</span>
                  </p>
                  <p style={labelStyle}>
                    WYS Price:{" "}
                    <span style={{ color: "#ffcc00", fontWeight: "bold" }}>
                      $ 10.318
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <OxFooter />
    </>
  );
};

// Common Inline Styles
const cardStyle = {
  backgroundColor: "#202020",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
};
const infoCardStyle = {
  backgroundColor: "#202020",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
};
const labelStyle = { fontSize: "14px", color: "#888", marginBottom: "10px" };
const valueStyle = { fontSize: "20px", fontWeight: "bold", margin: "0" };
const buttonStyle = {
  backgroundColor: "#ffcc00",
  color: "#000",
  border: "none",
  borderRadius: "5px",
  padding: "8px 15px",
  cursor: "pointer",
  fontWeight: "bold",
};
const claimButtonStyle = {
  ...buttonStyle,
  width: "100%",
  padding: "12px 0",
  marginTop: "10px",
};
const tableHeaderStyle = {
  padding: "15px",
  textAlign: "left",
  color: "#fff",
  borderBottom: "1px solid #333",
};

export default MyPosition;
