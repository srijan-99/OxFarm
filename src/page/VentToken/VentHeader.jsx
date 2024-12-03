import React from 'react';
import { FaGlobe, FaTwitter, FaTelegramPlane } from 'react-icons/fa';

const VentHeader = () => {
  return (
    <div className='vent-header'
      style={{
        background: 'linear-gradient(45deg, #8fd41f 0%, #ffe569 40%)',

        color: '#1a1a1a',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        marginTop:'10px',
        
   
      
      }}
    >
      
      
      <div className='vent-header-section' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px'}}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '10px 0' }}>WYS TOKEN</h1>
          <p style={{ fontSize: '1rem', color: '#1a1a1a' }}>Farm your WYS tokens and earn a high APY</p>
          <div style={{ fontSize: '0.9rem', color: '#1a1a1a', marginTop: '10px' }}>
            <span>Token address </span>
            <a
              href="https://bscscan.com/token/0x872d068c25511be88c1f5990c53eeffcdf46c9b4"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a1a1a', textDecoration: 'none' }}
            >
              0x872d068c25511be88c1f5990c53eeffcdf46c9b4
            </a>
            <span style={{ color: '#1a1a1a', marginLeft: '5px' }}>
              ~$
              <span style={{ display: 'inline-flex', color: '#1a1a1a', marginLeft: '5px' }}>0.0022</span>
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
            <a href="https://vent.finance" target="_blank" rel="noreferrer" style={{ color: '#1a1a1a', textDecoration: 'none' }}>
              <FaGlobe size={17} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: '#1a1a1a', textDecoration: 'none' }}>
              <FaTwitter size={17} />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noreferrer" style={{ color: '#1a1a1a', textDecoration: 'none' }}>
              <FaTelegramPlane size={17} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentHeader;
