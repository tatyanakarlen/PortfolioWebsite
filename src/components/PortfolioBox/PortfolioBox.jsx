import './PortfolioBox.css'
import PortfolioPiece from '../PorfolioPiece/PortfolioPiece'
import React from 'react'

const PortfolioBox = () => {
  return (
    <div class="Portfolio-Box-Container">
      <h2>PORTFOLIO</h2>
      <PortfolioPiece />
      <PortfolioPiece />
      <PortfolioPiece />
    </div>
  )
}

export default PortfolioBox
