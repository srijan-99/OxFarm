import React, { useState } from 'react';
import './sidebar.css'
import { FaBars, FaTimes, FaUserAlt, FaChartLine, FaExchangeAlt, FaBlog } from 'react-icons/fa';
import { RiShieldCheckFill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';
import { GrNext } from "react-icons/gr";
import { BsGrid } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
import { RiTokenSwapFill } from "react-icons/ri";
import { ImSpinner3 } from "react-icons/im";
import { RxDoubleArrowRight } from "react-icons/rx";
import Logo from '../../images/logo/Logo.png'
import {Link} from 'react-router-dom'
import ox from '../../images/logo/ox.png'


const Sidebar = ({isOpen,ToggleSidebar}) => {
return (
    <>
   <div className={`sidebar ${isOpen ? 'open' : ''}`}>

      <div className="sidebar-header">

        <Link className="logo" to="/">
        <img src={Logo} alt="logo" style={{ width: "150px",marginRight:'30px'}} />
      </Link>
     
        {/* <p className="sub-logo">by DcentraLab</p> */}
        <button className="toggle-btn" onClick={ToggleSidebar}>
          {isOpen? <RxDoubleArrowRight size={30}/> : <img src={ox} style={{width:'30px',height:'30px'}}/>}
        </button>
      </div>
      <div className="sidebar-content">
        <ul className="menu">
        <li>
  <BsGrid size={20} />
  {isOpen && <span className="Explore">Explore</span>}
</li>


          <li>
  <Link to='/0x.farm/my-positions'style={{color:'inherit',overflow:'hidden'}}>
    <FaRegUser size={20} style={{marginRight:'20px'}}/>

    {isOpen && <span className='Position' style={{marginBottom:'-10px'}}>Position</span>
}
  </Link>
</li>

          <li>

            <Link to='/0x.farm/dashboard'>
          <ImStatsDots size={20} />

           { isOpen &&  <span className='Dashboard'>Dashboard</span> }
          
          </Link>
          </li>

          <li>
          <RiTokenSwapFill size={20} />
            <span className='Bridge'>Bridge Tokens</span>
          </li>
         
        </ul>
        
      </div>
    </div>
    </>
  );
};

export default Sidebar;
