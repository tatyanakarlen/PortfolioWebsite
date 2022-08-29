import React from 'react'
import TopNav from '../../components/TopNav/TopNav'
import Hero from '../../components/Hero/Hero'
import PortfolioBox from '../../components/PortfolioBox/PortfolioBox';
import { Link } from 'react-router-dom';


class BioPortfolioPage extends React.Component {
    render() {
        return(
            <div>
            <TopNav />
            <Hero />
            <PortfolioBox />
           
         
            </div>
        )
    }
}

export default BioPortfolioPage