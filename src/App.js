import React, { useState} from 'react'
import './App.css';
import BioPortfolioPage from './pages/BioPortfolioPage/BioPortfolioPage'
import ResumePage from './pages/ResumePage/ResumePage'
import { Route, Routes, Navigate } from 'react-router-dom';
// import img from './components/Images/UntitledImages/photo1.jpeg'
// import img1 from './components/Images/UntitledImages/photo5.jpeg'
import img1 from './components/Images/UntitledImages/UntitledTEST5.png'
import img2 from './components/Images/UntitledImages/UntitledTEST6.png'
import img3 from './components/Images/UntitledImages/UntitledTEST1.png'
import img4 from './components/Images/UntitledImages/UntitledTEST2.png'
import img5 from './components/Images/UntitledImages/UntitledTEST3.png'
import img6 from './components/Images/UntitledImages/UntitledTEST4.png'
import img7 from './components/Images/Tinterest/TinScreenShot1.jpg'
import img8 from './components/Images/Tinterest/TinScreenShot2.jpg'
import img9 from './components/Images/Tinterest/TinScreenShot3.jpg'
import img10 from './components/Images/Tinterest/TinScreenShot4.jpg'
import img11 from './components/Images/Thriftd/Thriftd1.png'
import img12 from './components/Images/Thriftd/Thriftd2.png'
import img13 from './components/Images/Thriftd/Thriftd3.png'
import img14 from './components/Images/Thriftd/Thriftd4.png'
import img15 from './components/Images/Thriftd/Thriftd5.png'
import img16 from './components/Images/Classical/Classical1.png'
import img17 from './components/Images/Classical/Classical2.png'
import img18 from './components/Images/Classical/Classical3.png'


function App() {


 const [projects] = useState([
   {
     title: "MERN stack 'Untitled Magazine' React Dashboard+Magazine", 
     headline: "Responsive content-management dashboard SPA built with React, MongoDB, NodeJS and Express and Bootstrap CSS", 
     images: [img1, img2, img3, img4, img5, img6], 
     bullet1: "Features an a magazine page where readers can scroll, read, search and share articles on social-media",
     bullet2: "Created AJAX API endpoints to fetch data based on user interactions", 
     bullet3: "Implemented JWT User Authentication, React Hooks, photo image-uploads via Cloudinary, and social-media share links",
     body: "Untitled Magazine is a content-management admin dashboard and online magazine. Readers are able to scroll through an artice list with titles, images and headers and click on individual articles to read the full article. Readers are also able to search articles by tags, browse a 'latest' articles page and share indivdual articles via social-media. The content-management admin dashboard is set up for content managers to view, add, update and delete contributors, as well as peform similiar CRUD operations on articles.",
     deployedAppLink: 'https://untitled-magazine.herokuapp.com/', 
     gitHubLink: 'https://github.com/tatyanakarlen/Untitled-Magazine',
   },
   {
    title: "TINTEREST Social-Media Mobile App (Python, Django, SQL)", 
    headline: "Responsive Pinterest/Instagram-style app built with Django, Python, SQL, Material UI and AWS", 
    images: [img7, img8, img9, img10], 
    bullet1: "Developed a social-media mobile-app where users can create, update and delete ‘interest’-type posts, as well as save and comment on each other’s posts",
    bullet2: "Implemented photo-upload functionality with Amazon S3 - Cloud Object Storage", 
    bullet3: "Utilized a PostgresSQL database and Django Authentication",
    body: "Tinterest is an image sharing social media community designed for users to share, browse, discover, save and comment on 'interest'-type images.",
    deployedAppLink: 'https://tinterest.herokuapp.com/', 
    gitHubLink: 'https://github.com/RyanneZ/project3',
  },
  {
    title: "THRIFTD e-Commerce website (NodeJS/Express/MongoDB)", 
    headline: "Depop/Shopify-style peer-to-peer shopping application built with NodeJS, Express, MongoDB ", 
    images: [img13, img11, img12, img14, img15], 
    bullet1: "Developed a RESTful MEN-stack CRUD application where users can post items for sale and purchase other user’s items",
    bullet2: "Implemented user’s wishlist and comments for a fun and social shopping experience", 
    bullet3: "Implemented Google Oauth 2.0 authentication, Imgur API for photo-uploads and no-SQL database",
    body: "Thriftd is a peer-to-peer shopping community of style addicts. Users can sign up, post their own items for sale, browse, wish-list/save, comment and buy each other’s items.",
    deployedAppLink: 'https://thriftd-p2p-ecommerce.herokuapp.com/products', 
    gitHubLink: 'https://github.com/tatyanakarlen/Thriftd-P2P-e-commerce-Node-Express',
  },
  {
    title: "Classical Trivia (Javascript, HTML, CSS)", 
    headline: "Browser-based trivia game with a Western Classical Music theme", 
    images: [img16, img17, img18], 
    bullet1: "Developed a DOM game using vanilla Javascript with efficient win/lose logic ",
    bullet2: "Designed a fun modern/classic user-interface with HTML and CSS", 
    bullet3: "Utilized Git for version control",
    body: "Classical Trivia is a friendly educational trivia game about Western Classical music history. Topics include composer biographies, famous works, genres, eras, and world history/geography. Many questions feature a 'question within a question' and require two answers. Questions are generated randomly and are accompanied by an image which often times provides a hint to the current question. Many questions feature hints or indirect answers to other questions in the game. ",
    deployedAppLink: 'https://tatyanakarlen.github.io/ClassicalTrivia/', 
    gitHubLink: 'https://github.com/tatyanakarlen/ClassicalTrivia',
  },

   
 

])
  
    return (
      <div className="App">
         <Routes>
        <Route path='/portfolio' element={<BioPortfolioPage projects={projects}/>} />
        <Route path='/resume' element={<ResumePage />} />
        <Route path="*" element={<Navigate to="/portfolio" replace />} />
        </Routes>
      </div>
    )
  
}


export default App;
