import './PortfolioBox.css'
import PortfolioPiece from '../PorfolioPiece/PortfolioPiece'
import React from 'react'

const PortfolioBox = (props) => {
  return (
    <div class="Portfolio-Box-Container">
      <h2>PORTFOLIO</h2><br/>
      {props.projects.map((m) => (
       <PortfolioPiece title={m.title}/>
      ))}
      
    </div>
  )
}

export default PortfolioBox
