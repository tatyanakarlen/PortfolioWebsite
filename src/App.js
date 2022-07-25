import React, { Component} from 'react'
import './App.css';
import BioPortfolioPage from './pages/BioPortfolioPage/BioPortfolioPage'
import ResumePage from './pages/ResumePage/ResumePage'
import { Route, Routes, Navigate } from 'react-router-dom';


class App extends Component {
  render() {
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
}


export default App;
