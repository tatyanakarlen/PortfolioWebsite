import './PortfolioPiece.css';
import img from './untitled.png';

import React from 'react';

const PortfolioPiece = () => {
  return (
    <div>
      <div id="port-piece-container">
        <div id="left-size-image">
          <img
            id="port-image"
            src={img}
            style={{ width: '100%', height: 'auto'}}
          ></img>
        </div>
        <div id="right-size-text">
          <h2>MERN stack 'Untitled' Dashboard+Magazine</h2>
          <br />
          <br />
          <p>
            Responsive content-management dashboard SPA built with
            React, MongoDB, NodeJS and Express.
          </p>
          <br />
          <p>
            -Features an additioanl magazine page where readers can scroll, read, search and share articles. 
          </p>
          <br />
          <p>
            -Designed both back-end and front-end utilizing MongoDB and Bootstrap
            CSS
          </p>
          <br />
          <p>
            -Created AJAX API endpoints to fetch data based on user interactions
          </p>
          <br />
          {/* <p>
            -Implemented JWT User Authentication, React Hooks, photo
            image-uploads via Cloudinary, and social-media share links
          </p> */}
          <br />
        </div>
      </div>
      <div id="bottom-text-div">
          <p>
        Untitled Magazine is a content-management admin dashboard with an additional user-side, 
        read-only magazine where content is rendered. Readers are able to scroll through an artice list with titles, images
        and headers and click on individual articles to read the full article. Readers are also able to search articles by tags, browse a 'latest' articles page and share
        indivdual articles via social-media. The content-management admin dashboard is set up
        for content managers to add, update and delete contrubutors, as well as peform similiar CRUD operations with articles. Content managers
        are also able to 'view' and read each article in the same format as the magazine readers. 
        </p><br/>
        <p>Visit the deplyed app: https://untitled-magazine.herokuapp.com/</p><br/>
        <p>Git Hub: https://untitled-magazine.herokuapp.com/</p><br/>
      </div>
    </div>
  );
};

export default PortfolioPiece;
