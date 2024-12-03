import React from 'react'



// First section Complete
const DeFiInfo=()=> {
  return (
    <div>
      <div className="headingtab" style={{color:'#FFFFFF',fontSize:'30px',fontWeight:700,marginBottom:'15px',marginLeft:'15px'}}>DeFi Farming Made Simple</div>
      <ul className="numberlist" style={{marginLeft:'35px'}}>

      <div style={{display:'flex'}}>
        <li style={{marginRight:'100px'}}>
          <div className="number">$412.3k</div>
          <div className="namenumber">Total liquidity</div>
        </li>
        <li>
          <div className="number">$11.1k</div>
          <div className="namenumber">24h volume</div>
        </li>
        </div>
        <div style={{display:'flex'}}>
        <li style={{marginRight:'120px'}}>
          <div className="number">$0.18</div>
          <div className="namenumber">JONES price</div>
        </li>
        <li>
          <div className="number">$2.23</div>
          <div className="namenumber">jGLP price</div>
        </li>
        </div>
        <li>
          <div className="number">$1.26</div>
          <div className="namenumber">jUSDC price</div>
        </li>
      </ul>
    </div>
  );
}

export default DeFiInfo;
// Second section