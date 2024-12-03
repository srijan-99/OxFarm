import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { disconnect } from '@wagmi/core';
import { useAccount } from 'wagmi';
import Logo from '../../images/logo/Logo.png';
import { config } from '../../main';

const Header = ({ isOpen, ToggleSidebar }) => {
  const { address } = useAccount();

  const handleDisconnect = async () => {
    await disconnect(config);
  };

  return (
    <header className="d-flex justify-content-between align-items-center p-2 shadow-sm custom-header">
      <Link className="mobile-logo" to="/">
        <img src={Logo} alt="logo" style={{ width: '150px', marginRight: '30px' }} />
      </Link>
      <div className="customConnectBtn">
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            const ready = mounted && authenticationStatus !== 'loading';
            const connected =
              ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  style: { opacity: 0, pointerEvents: 'none', userSelect: 'none' },
                })}
              >
                {!connected ? (
                  <button onClick={openConnectModal} className="customConnectBtn" style={{ marginLeft: '15px',fontWeight:'600',background:'transparent',border:'none' }}>
                    Connect Wallet
                  </button>
                ) : chain.unsupported ? (
                  <button onClick={openChainModal} className="customConnectBtn">
                    Wrong Network
                  </button>
                ) : (
                  <Dropdown
                    className="customConnectBtn"
                    style={{ background: 'none', border: 'none', backgroundColor: 'none', color: 'black' }}
                  >
                    <Dropdown.Toggle className="customConnectBtn" style={{ border: 'none', background: 'transparent' }}>
                      <span className="customConnectBtn" style={{ border: 'none', background: 'transparent', color: 'black' }}>
                        {account.displayName}
                      </span>
                      <i className="bi bi-chevron-down" style={{ color: 'black' }}></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ border: '1px solid yellow', marginRight: '10px', height: '30px', borderRadius: '15px', width: '120px' }}>
                      <Dropdown.Item onClick={handleDisconnect} style={{ color: 'black', marginTop: '-10px' }}>
                        Disconnect
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
      <div className={`ox-hamburger ${!isOpen ? 'open' : ''}`} onClick={ToggleSidebar}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
  );
};

export default Header;
