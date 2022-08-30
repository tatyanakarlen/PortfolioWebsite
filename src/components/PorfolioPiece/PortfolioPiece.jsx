import './PortfolioPiece.css';
import img from './untitled.png';
import { Link } from 'react-router-dom';

import React from 'react';

const PortfolioPiece = (props) => {

    // title={m.title} 
    // headline={m.headline} 
    // bullet1={m.bullet1} 
    // bullet2={m.bullet2} 
    // bullet3={m.bullet3}
    // body={m.body}
    // deployedAppLink={m.deployedAppLink}
    // gitHubLink={m.gitHubLink}

  return (
    <div>
      <div id="port-piece-container">
        <div id="left-size-image">
          <img
            id="port-image"
            src={img}
            style={{ width: '100%', objectFit: 'scale-down'}}
          ></img>
        </div>
        <div id="right-size-text">
          <h2>{props.title}</h2>
          <br />
          <br />
          <p>
           {props.headline}
          </p>
          <br />
          <p>
            -{props.bullet1}
          </p>
          <br />
          <p>
            -{props.bullet2}
          </p>
          <br />
          <p>
            -{props.bullet3}
          </p>
          <br />
         
          <br />
        </div>
      </div>
      {/* <div id="bottom-text-div"> */}
          <p>
        {props.body}
        </p><br/>
        <p>Visit the app here: <a href={props.deployedAppLink} target="_blank">{props.deployedAppLink}</a></p><br/>
        <p>View code on GitHub: <a href={props.gitHubLink} target="_blank">{props.gitHubLink}</a></p><br/>
      {/* </div> */}
    </div>
   
  );
};



export default PortfolioPiece;
