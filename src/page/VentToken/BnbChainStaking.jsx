import React from 'react';
import { YourApp } from '../CustomWallet';

const BnbChainStaking = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '40px',
          cursor: 'pointer',
          marginTop: '60px',
          marginLeft: '80px',
        }}
      >
        <span
          style={{
            fontSize: '26px',
            fontWeight: '600',
            marginLeft: '-75px',
            color: '#ffd300',
          }}
        >
          WYS Farming
        </span>
        <div
          style={{
            borderBottom: '6px solid #ffd300',
            marginTop: '10px',
          }}
        ></div>
      </div>

      <div
        className="bnb-section"
        style={{
          backgroundColor: '#1D1D1D',
          color: '#FFFFFF',
          padding: '20px',
          borderRadius: '15px',
          maxWidth: '620px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Title Section */}
        <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
          0x Farming Platform
        </div>

        {/* Description Section */}
        <div
          style={{
            fontSize: '16px',
            color: '#A1A1A1',
            marginBottom: '15px',
          }}
        >
          Farm WYS token to earn additional annual percentage yield (APY).
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '8px',
            }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: '4px' }}
            >
              <path
                d="M13 9.5L7 13L7 6L13 9.5Z"
                fill="#C4C4C4"
              />
              <circle cx="9.5" cy="9.5" r="9" stroke="#A1A1A1" />
            </svg>
            <a
              href="https://www.youtube.com/watch?v=n03wiqWC6_s"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#A1A1A1',
                textDecoration: 'underline',
              }}
            >
              Watch a video
            </a>
          </span>
        </div>

        {/* Current APY Section */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '15px 0',
            backgroundColor: '#2C2C2C',
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        >
          12.19 %
        </div>

        {/* Staking Information Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '15px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              backgroundColor: '#2C2C2C',
              padding: '10px',
              borderRadius: '8px',
              minWidth: '100px',
              flex: '1 1 45%',
            }}
          >
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>365 days</div>
            <div style={{ fontSize: '14px', color: '#A1A1A1' }}>Farm duration</div>
          </div>
          <div
            style={{
              textAlign: 'center',
              backgroundColor: '#2C2C2C',
              padding: '10px',
              borderRadius: '8px',
              minWidth: '100px',
              flex: '1 1 45%',
            }}
          >
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>May 09, 2025</div>
            <div style={{ fontSize: '14px', color: '#A1A1A1' }}>Last day to earn APY</div>
          </div>
          <div
            style={{
              textAlign: 'center',
              backgroundColor: '#2C2C2C',
              padding: '10px',
              borderRadius: '8px',
              minWidth: '100px',
              flex: '1 1 45%',
            }}
          >
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>60 days</div>
            <div style={{ fontSize: '14px', color: '#A1A1A1' }}>Minimum farming time</div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div
          style={{
            textAlign: 'left',
            fontSize: '14px',
            color: '#A1A1A1',
            marginBottom: '20px',
          }}
        >
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px' }}>
            <li>Tokens can be added or removed from the farm at any time during the campaign period.</li>
            <li>Reward tokens will be returned to the pool if the farmed tokens are withdrawn before the minimum farming duration.</li>
          </ul>
        </div>

        {/* Connect Wallet Button */}
        <YourApp />

        {/* View Token Contract Link */}
        {/* <div style={{ fontSize: '14px', color: '#FFE600', textDecoration: 'underline', cursor: 'pointer', marginBottom: '20px' }}>
          View token contract
        </div> */}
      </div>
    </>
  );
};

export default BnbChainStaking;
