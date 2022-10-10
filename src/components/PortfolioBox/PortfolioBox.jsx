import './PortfolioBox.css'
import PortfolioPiece from '../PorfolioPiece/PortfolioPiece'
import React from 'react'

const PortfolioBox = (props) => {
  return (
    <div class="Portfolio-Box-Container" id="portfolio">
      <div id="Projects-container">
      <h1 id="PROJECTS">&lt;Projects &#128187;&gt;</h1><br/><br/>
      {/* <h1 id="PROJECTS">Projects &#128187;</h1><br/><br/> */}
      
      </div>
      {props.projects.map((m) => (
       <PortfolioPiece 
       images={m.images}
       title={m.title} 
       tech={m.tech}
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

