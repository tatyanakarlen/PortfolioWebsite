import React, { Component} from 'react'
import './App.css';
import BioPortfolioPage from './pages/BioPortfolioPage/BioPortfolioPage'
import ResumePage from './pages/ResumePage/ResumePage'
import { Route, Routes } from 'react-router-dom'




class App extends Component {
  render() {
    return (
      <div className="App">
        <BioPortfolioPage />
      </div>
    )
  }
}

export default App;
