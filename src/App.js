import React, { useState } from 'react';
import './App.css';
import BioPortfolioPage from './pages/BioPortfolioPage/BioPortfolioPage';

import { Route, Routes, Navigate } from 'react-router-dom';

import img1 from './components/Images/UntitledImages/UntitledTEST5.png';
import img2 from './components/Images/UntitledImages/UntitledTEST6.png';
import img3 from './components/Images/UntitledImages/UntitledTEST1.png';
import img4 from './components/Images/UntitledImages/UntitledTEST2.png';
import img5 from './components/Images/UntitledImages/UntitledTEST3.png';
import img6 from './components/Images/UntitledImages/UntitledTEST4.png';
import img7 from './components/Images/Tinterest/TinScreenShot1.png';
import img8 from './components/Images/Tinterest/TinScreenShot2.png';
import img9 from './components/Images/Tinterest/TinScreenShot3.png';
import img10 from './components/Images/Tinterest/TinScreenShot4.png';
import img11 from './components/Images/Thriftd/Thriftd1.png';
import img12 from './components/Images/Thriftd/Thriftd2.png';
import img13 from './components/Images/Thriftd/Thriftd3.png';
import img14 from './components/Images/Thriftd/Thriftd4.png';
import img15 from './components/Images/Thriftd/Thriftd5.png';
import img16 from './components/Images/Classical/Classical1.png';
import img17 from './components/Images/Classical/Classical2.png';
import img18 from './components/Images/Classical/Classical3.png';
import img19 from './components/Images/Spark/Spark.png';
import img20 from './components/Images/Spark/Spark1.png';
import img21 from './components/Images/Spark/Spark2.png';
import img22 from './components/Images/Spark/Spark3.png';
import img23 from './components/Images/Spark/Spark4.png';
import img24 from './components/Images/Spark/Spark5.png';
import img26 from './components/Images/CookBook/cookbook.png'
import img27 from './components/Images/CookBook/cookbook1.png'
import img28 from './components/Images/CookBook/cookbook2.png'
import img29 from './components/Images/CookBook/CookBook3.png'
import img30 from './components/Images/CookBook/cookbook4.png'
import img31 from './components/Images/CookBook/cookbook5.png'
import img32 from './components/Images/CookBook/CookBook6.png'



function App() {
  const [projects] = useState([
    {
      title: 'CookBook',
      headline: 'Recipe app built with',
      tech: ['React', 'Firebase', 'Spoonacular API', 'Bootstrap'],
      images: [img26, img27, img28, img29, img30, img31, img32],
      bullet1:
        'Mobile-responsive recipe app that allows a user to search for recipes from Spoonacular food/recipe API based on keywords and view individual recipes.',
      bullet2: 'Features Firebase user authentication and database',
      bullet3:
        'Allows a user to like/save and unlike/unsave recipes stored in a Firebase cloud database.',

      deployedAppLink: 'https://cookbookspoonacularapi.netlify.app/',
      gitHubLink: 'https://github.com/tatyanakarlen/Spoonacular',
    },
    {
      title: 'Untitled Magazine',
      headline: 'Content-management MERN stack dashboard and online magazine built with',
      tech: ['React', 'MongoDB', 'NodeJS', 'Express', 'Bootstrap'],
      images: [img1, img2, img3, img4, img5, img6],
      bullet1:
        'Enables user/content manager to add authors and articles to the database. Features a magazine page where readers can view, search and share articles on social-media',
      bullet2:
        'Created AJAX API endpoints to fetch data based on user interactions',
      bullet3:
        'Implemented JWT User Authentication, React Hooks, photo image-uploads via Cloudinary, and social-media share links',

      deployedAppLink: 'https://untitled-magazine.herokuapp.com/',
      gitHubLink: 'https://github.com/tatyanakarlen/Untitled-Magazine',
    },

    {
      title: 'Spark',
      headline: 'Online dating single-page-application built with',
      tech: ['Next.js', 'MySql', 'Typescript', 'Chakra UI'],
      images: [img19, img24, img20, img21, img22, img23],
      bullet1:
        'Online-dating application where users can sign up and be matched with potential mates',
      bullet2: 'AJAX API endpoints to fetch data based on user interactions',
      bullet3:
        'Features JWT User Authentication, React Hooks, photo image-uploads via Amazon S3',

      deployedAppLink: '',
      gitHubLink: 'https://github.com/uwitdat/Spark',
    },
    {
      title: 'Tinterest',
      headline: 'Pinterest/Instagram-style app built with',
      tech: ['Django', 'Python', 'postgreSQL', 'Materialize CSS', 'AWS'],
      images: [img7, img8, img9, img10],
      bullet1:
        'Developed a social-media mobile-app where users can create, update and delete ‘interest’-type posts, as well as save and comment on each other’s posts',
      bullet2:
        'Implemented photo-upload functionality with Amazon S3 - Cloud Object Storage',
      bullet3: 'Utilized a PostgresSQL database and Django Authentication',

      deployedAppLink: 'https://tinterest.herokuapp.com/',
      gitHubLink: 'https://github.com/RyanneZ/project3',
    },
    {
      title: 'Thriftd',
      headline:
        'Depop/Shopify-style peer-to-peer e-commerce application built with',
      tech: ['NodeJS', 'Express', 'MongoDB', 'HTML', 'CSS'],
      images: [img13, img11, img12, img14, img15],
      bullet1:
        'Developed a RESTful MEN-stack CRUD application where users can post items for sale and wish-list/buy other user’s items',
      bullet2:
        'Implemented user’s wishlist and comments for a fun and social shopping experience',
      bullet3:
        'Implemented Google Oauth 2.0 authentication, Imgur API for photo-uploads and no-SQL database',

      deployedAppLink: 'https://thriftd-p2p-ecommerce.herokuapp.com/products',
      gitHubLink:
        'https://github.com/tatyanakarlen/Thriftd-P2P-e-commerce-Node-Express',
    },
    {
      title: 'Classical Trivia',
      headline:
        'Browser-based trivia game with a Western Classical Music theme built with',
      tech: ['HTML', 'CSS', 'Javascript'],
      images: [img16, img17, img18],
      bullet1:
        'Developed a DOM game using vanilla Javascript with efficient win/lose logic ',
      bullet2: 'Designed a fun modern/classic user-interface with HTML and CSS',
      bullet3: 'Utilized Git for version control',

      deployedAppLink: 'https://tatyanakarlen.github.io/ClassicalTrivia/',
      gitHubLink: 'https://github.com/tatyanakarlen/ClassicalTrivia',
    },
  ]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BioPortfolioPage projects={projects} />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
