import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap"; // For dropdown menu
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { disconnect } from "@wagmi/core";
import { useAccount } from "wagmi";
import WyzLogo from "../images/logo/wyzlogo.png";
import { config } from "../main";

const Header = () => {
  const { address } = useAccount();

  // Disconnect wallet handler
  const handleDisconnect = async () => {
    await disconnect(config);
  };

  return (
    <header className="d-flex justify-content-between align-items-center p-2 shadow-sm">
      {/* Logo */}
      <Link className="logo" to="/">
        <img src={WyzLogo} alt="logo" style={{ width: "200px"}} />
      </Link>

      {/* Connect Wallet Button */}
      <div className='customConnectBtn' style={{marginRight:'5px'}}>
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
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus || authenticationStatus === "authenticated");

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: { opacity: 0, pointerEvents: "none", userSelect: "none" },
                })}
              >
                {!connected ? (
                  <button
                    onClick={openConnectModal}
                    className="customConnectBtn"
                    style={{marginLeft:'15px'}}
                  >
                    Connect Wallet
                  </button>
                ) : chain.unsupported ? (
                  <button
                    onClick={openChainModal}
                    className="customConnectBtn"
                  >
                    Wrong Network
                  </button>
                ) : (
                  <Dropdown className='customConnectBtn' style={{background:'none',border:'none',backgroundColor:'none',color:'black'}}>
                    <Dropdown.Toggle className='customConnectBtn' style={{border:'none',background:'transparent'}}
                    >
                      <span className='customConnectBtn' style={{border:'none',background:'transparent',color:'black'}} >{account.displayName}</span>
                      <i className="bi bi-chevron-down text-dark"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{border:'1px solid red',marginRight:'10px'}}>
                      <Dropdown.Item
                        onClick={handleDisconnect}
                        style={{ color: "black"}}
                      >
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
    </header>
  );
};

export default Header;
