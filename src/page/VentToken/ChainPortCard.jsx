import React from 'react';

const ChainPortCard = () => {
  // Add a simple hook to detect screen width
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define styles based on screen width
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#1c1c1c',
    borderRadius: '12px',
    color: '#ffffff',
    maxWidth: screenWidth < 768 ? '90%' : '500px', // adjust width for smaller screens
    flexDirection: screenWidth < 600 ? 'column' : 'row', // stack on small screens
    textAlign: screenWidth < 600 ? 'center' : 'left',
    margin: '0 auto', // center align on all screens
    marginTop:'40px',
    height:'200px',
    width:'1000px'
    
  };

  const logoContainerStyle = {
    width: '80px',
    height: '80px',
    backgroundColor: '#002366',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: screenWidth < 600 ? '0' : '16px', // no margin on small screens
    marginBottom: screenWidth < 600 ? '16px' : '0', // margin at bottom on small screens
  };

  const textContainerStyle = {
    maxWidth: '100%',
  };

  const titleStyle = {
    fontSize: screenWidth < 600 ? '16px' : '18px',
    fontWeight: 'bold',
    margin: '0',
  };

  const descriptionStyle = {
    fontSize: screenWidth < 600 ? '13px' : '14px',
    margin: '8px 0',
    color: '#b5b5b5',
  };

  const linkStyle = {
    color: '#a2d729',
    textDecoration: 'none',
  };

  const learnMoreStyle = {
    fontSize: screenWidth < 600 ? '13px' : '14px',
    color: '#b5b5b5',
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <div style={logoContainerStyle}>
        <img
          src="https://chainport.io/logo.png" // replace with the actual logo URL
          alt="ChainPort Logo"
          style={{ width: '40px', height: '40px' }}
        />
      </div>
      <div style={textContainerStyle}>
        <h3 style={titleStyle}>Port Token via ChainPort</h3>
        <p style={descriptionStyle}>
          We recognized this farm token is a ported version used by the
          chainport bridge.{' '}
          <a href="https://app.chainport.io" style={linkStyle}>
            Click here
          </a>{' '}
          to port the token via app.chainport.io
        </p>
        <a href="https://chainport.io" style={learnMoreStyle}>
          Learn about chainport.io
        </a>
      </div>
    </div>
  );
};

export default ChainPortCard;
