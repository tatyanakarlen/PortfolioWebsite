import './PortfolioBox.css'
import PortfolioPiece from '../PorfolioPiece/PortfolioPiece'
import React from 'react'

const PortfolioBox = (props) => {
  return (
    <div class="Portfolio-Box-Container">
      <h2>PORTFOLIO</h2><br/>
      {props.projects.map((m) => (
       <PortfolioPiece 
       img={m.img}
       title={m.title} 
       headline={m.headline} 
       bullet1={m.bullet1} 
       bullet2={m.bullet2} 
       bullet3={m.bullet3}
       body={m.body}
       deployedAppLink={m.deployedAppLink}
       gitHubLink={m.gitHubLink}

        />
      ))}
      
    </div>
  )
}

export default PortfolioBox

