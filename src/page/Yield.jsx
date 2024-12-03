import React, { useEffect, useState } from 'react'
import MeetPendle from './Yield/MeetPendle'
import DeFiInfo from './Yield/DeFiInfo'
import SwapCard from './Yield/SwapCard'
import ButtonSection_1 from './Buttons/ButtonsSection_1'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'

const Yield = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Inline styles based on screen width
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
   
    padding: screenWidth <= 480 ? '5px' : screenWidth <= 768 ? '10px' : '20px',
    gap: screenWidth <= 480 ? '10px' : screenWidth <= 1024 ? '15px' : '20px',
  }

  const buttonSectionStyle = {
    marginLeft: screenWidth <= 768 ? '0' : '60px', // Same as your previous code
    width: screenWidth <= 480 ? '100%' : 'auto',  // To maintain responsiveness
  }

  const infoSwapContainerStyle = {
    display: 'flex',
    flexDirection: screenWidth <= 1024 ? 'column' : 'row',
    gap: screenWidth <= 480 ? '5px' : screenWidth <= 768 ? '10px' : '20px',
    width: '100%',
    justifyContent: 'center',
    alignItems: screenWidth <= 1024 ? 'center' : 'flex-start',
  }

  const swapCardStyle = {
    marginLeft: screenWidth <= 1024 ? '0' : '-100px',
    width: screenWidth <= 768 ? '90%' : 'auto',
   
  }

  return (
    <div>
      <Header />
      <div style={containerStyle}>
        <Hero />
        <MeetPendle  />
        <ButtonSection_1 style={{marginLeft:'-10px',border:'1px solid red'}} /> {/* Keeping the same style as before */}
        <div style={infoSwapContainerStyle}>
          <DeFiInfo />
          <SwapCard style={swapCardStyle} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Yield
