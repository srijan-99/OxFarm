import { ConnectButton } from '@rainbow-me/rainbowkit';
import { disconnect } from '@wagmi/core'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { config } from "../main";






//function to disconnect 
const handleDisconnect = async () => {
  try{
  await disconnect(config);
  console.log(disconnect);
  }
  catch(error){
    console.log(error)

  }
}



export const YourApp = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',marginBottom:'10px'}}>

    <div className='customConnectBtn farm-btn' style={{paddingLeft:'12px'}} >
 
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
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" className="customConnectBtn"
                  style={{border:'none',backgroundColor:'transparent',marginLeft:'10px',fontWeight:'600'}}  >
                    Connect Wallet to Farm
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button"   className="customConnectBtn"
                  style={{border:'none',backgroundColor:'transparent'}} 
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12,justifyContent:'center',marginBottom:'10px' }}>
                  
                  <button onClick={openAccountModal} type="button"   className="customConnectBtn" style={{border:'none',background:'transparent',paddingLeft:'3px',paddingRight:'3px'}}>
                    {account.displayName}
                    
                  </button>

                  {/* Dropdown section */}


                  <Dropdown align="end">
                        <Dropdown.Toggle
                          variant="link"
                          id="dropdown-basic"
                          className="custom-wallet-btn-dropdown"
                        >
                          <i className="bi bi-three-dots-vertical"></i>{" "}

                        </Dropdown.Toggle>

                        <Dropdown.Menu className='disconnect'>
                          <Dropdown.Item onClick={handleDisconnect} >
                            Disconnect
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                </div>

              );
            })()}
          </div>
         
        );
      }}
    </ConnectButton.Custom>
    </div>
    </div>
 
  );
};