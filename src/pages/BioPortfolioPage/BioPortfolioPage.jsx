import React from 'react'
import TopNav from '../../components/TopNav/TopNav'
import { Link } from 'react-router-dom';

class BioPortfolioPage extends React.Component {
    render() {
        return(
            <div>
            <TopNav />
            <div className="container">
        <article>
          <h1>This is BioPortfolioPage </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
            </div>
            </div>
        )
    }
}

export default BioPortfolioPage