import React, { Component, useState} from 'react'
import './App.css';
import BioPortfolioPage from './pages/BioPortfolioPage/BioPortfolioPage'
import ResumePage from './pages/ResumePage/ResumePage'
import { Route, Routes, Navigate } from 'react-router-dom';


function App() {


 const [projects, setProjects] = useState([
   {
     title: "MERN stack 'Untitled' React Dashboard+Magazine", 
     headline: "Responsive content-management dashboard SPA built with React, MongoDB, NodeJS and Express and Bootstrap CSS", 
     image: {}, 
     bullet1: "Features an additioanl magazine page where readers can scroll, read, search and share articles",
     bullet2: "Created AJAX API endpoints to fetch data based on user interactions", 
     bullet3: "Implemented JWT User Authentication, React Hooks, photo image-uploads via Cloudinary, and social-media share links",
     body: "Untitled Magazine is a content-management admin dashboard with an additional user-side, read-only magazine where content is rendered. Readers are able to scroll through an artice list with titles, images and headers and click on individual articles to read the full article. Readers are also able to search articles by tags, browse a 'latest' articles page and share indivdual articles via social-media. The content-management admin dashboard is set up for content managers to add, update and delete contrubutors, as well as peform similiar CRUD operations with articles. Content managers are also able to view and read each article in the same format as the magazine readers",
     deployedAppLink: 'https://untitled-magazine.herokuapp.com/', 
     gitHubLink: 'https://github.com/tatyanakarlen/Untitled-Magazine',
   },
   {
    title: "TINTEREST Social-Media Mobile App (Python, Django, SQL)", 
    headline: "Responsive Pinterest/Instagram-style app built with Django, Python, SQL, Material UI and AWS.", 
    image: {}, 
    bullet1: "Developed a social-media mobile-app where users can create, update and delete ‘interest’-type posts, as well as save and comment on each other’s posts",
    bullet2: "Implemented photo-upload functionality with Amazon S3 - Cloud Object Storage", 
    bullet3: "Utilized a PostgresSQL database and Django Authentication",
    body: "Tinterest is an image sharing social media community designed for users to share, browse, discover, save and comment on images.",
    deployedAppLink: 'https://tinterest.herokuapp.com/', 
    gitHubLink: 'https://github.com/RyanneZ/project3',
  },
  {
    title: "THRIFTD e-Commerce website (NodeJS/Express/MongoDB)", 
    headline: "Depop/Shopify-style peer-to-peer shopping application built with NodeJS, Express, MongoDB ", 
    image: {}, 
    bullet1: "Developed a RESTful MEN-stack CRUD application where users can post items for sale and purchase other user’s items",
    bullet2: "Implemented user’s wishlist and comments for a fun and social shopping experience", 
    bullet3: "Implemented Google Oauth 2.0 authentication, Imgur API for photo-uploads and no-SQL database",
    body: "Thriftd is a peer-to-peer shopping community of style addicts. Users can sign up, post their own items for sale, browse, wish-list/save, comment and buy each other’s items. ",
    deployedAppLink: 'https://thriftd-p2p-ecommerce.herokuapp.com/products', 
    gitHubLink: 'https://github.com/tatyanakarlen/Thriftd-P2P-e-commerce-Node-Express',
  },
  {
    title: "Classical Trivia (Javascript, HTML, CSS)", 
    headline: "Browser-based trivia game with a Western Classical Music theme", 
    image: {}, 
    bullet1: "Developed a DOM game using vanilla Javascript with efficient win/lose logic ",
    bullet2: "Designed a fun modern/classic user-interface with HTML and CSS", 
    bullet3: "Utilized Git for version control ",
    body: "Classical Trivia is a friendly educational trivia game about Western Classical music history. Topics include composer biographies, famous works, genres, eras, and world history/geography. Many questions feature a 'question within a question' and require two answers. Questions are generated randomly and are accompanied by an image which often times provides a hint to the current question. Many questions feature hints or indirect answers to other questions in the game. ",
    deployedAppLink: 'https://tatyanakarlen.github.io/ClassicalTrivia/', 
    gitHubLink: 'https://github.com/tatyanakarlen/ClassicalTrivia',
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
