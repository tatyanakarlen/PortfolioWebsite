import React, { Component, useState} from 'react'
import './App.css';
import BioPortfolioPage from './pages/BioPortfolioPage/BioPortfolioPage'
import ResumePage from './pages/ResumePage/ResumePage'
import { Route, Routes, Navigate } from 'react-router-dom';


function App() {


 const [projects, setProjects] = useState([
   {
     title: "MERN stack 'Untitled' Dashboard+Magazine", 
     headline: "Responsive content-management dashboard SPA built with React, MongoDB, NodeJS and Express and Bootstrap CSS", 
     image: {}, 
     bullet1: "Features an additioanl magazine page where readers can scroll, read, search and share articles",
     bullet2: "Created AJAX API endpoints to fetch data based on user interactions", 
     bullet3: "Implemented JWT User Authentication, React Hooks, photo image-uploads via Cloudinary, and social-media share links",
     body: "Untitled Magazine is a content-management admin dashboard with an additional user-side, read-only magazine where content is rendered. Readers are able to scroll through an artice list with titles, images and headers and click on individual articles to read the full article. Readers are also able to search articles by tags, browse a 'latest' articles page and share indivdual articles via social-media. The content-management admin dashboard is set up for content managers to add, update and delete contrubutors, as well as peform similiar CRUD operations with articles. Content managers are also able to view and read each article in the same format as the magazine readers",
     herokuLink: 'https://untitled-magazine.herokuapp.com/', 
     gitHubLink: 'https://github.com/tatyanakarlen/Untitled-Magazine',
   },
   
 

])
  
    return (
      <div className="App">
         <Routes>
        <Route path='/portfolio' element={<BioPortfolioPage />} />
        <Route path='/resume' element={<ResumePage />} />
        <Route path="*" element={<Navigate to="/portfolio" replace />} />
        </Routes>
      </div>
    )
  
}


export default App;
