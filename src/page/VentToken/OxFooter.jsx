import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px 50px",
    margin: "0",
    width: "100%",
    bottom: "0",
    left: "0",
    zIndex: "1000",
 

  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column", // Stack content for mobile by default
    justifyContent: "space-between",
    alignItems: "flex-start",
  };

  const sectionStyle = {
    flex: "1",
    marginBottom: "20px",
  };

  const headingStyle = {
    color: "#fcdc00", // Yellow color for the logo
    marginBottom: "10px",
  };

  const paragraphStyle = {
    marginTop: "10px",
    lineHeight: "1.8",
    fontSize: "14px",
  };

  const bottomStyle = {
    fontSize: "12px",
    lineHeight: "1.5",
    color: "#aaa",
  };

  // Use JavaScript to handle responsive styles
  const responsiveStyle = window.innerWidth < 768 ? {
    footerStyle: {
      ...footerStyle,
      padding: "20px", // Adjust padding for smaller screens
    },
    containerStyle: {
      ...containerStyle,
      flexDirection: "column", // Stack items vertically on small screens
    },
    paragraphStyle: {
      ...paragraphStyle,
      fontSize: "12px", // Smaller font size for mobile
    },
  } : {};

  return (
    <footer style={{ ...footerStyle, ...responsiveStyle.footerStyle }}>
      <div style={{ ...containerStyle, ...responsiveStyle.containerStyle }}>
        {/* Left Section: Logo and Description */}
        <div style={sectionStyle}>
          <h1 style={headingStyle}>0x.farm</h1>
          {/* Copyright and Reserved Rights */}
          <div style={bottomStyle}>
            © 2024 0x.farm. All rights reserved.
          </div>
          <p style={{ ...paragraphStyle, ...responsiveStyle.paragraphStyle }}>
            Empowering the future of decentralized finance. 0x.farm is your
            gateway to the decentralized finance revolution. We provide a secure,
            user-friendly platform that makes blockchain technology accessible to
            everyone, enabling financial freedom and inclusion for all users.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
