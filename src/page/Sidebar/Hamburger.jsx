import React, { useState } from 'react';
import './Hamburger.css'; 

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div 
      className='containers' 
      onClick={toggleMenu}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default HamburgerMenu;
