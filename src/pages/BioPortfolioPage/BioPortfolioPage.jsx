import React from 'react'
import TopNav from '../../components/TopNav/TopNav'
import { Link } from 'react-router-dom';

class BioPortfolioPage extends React.Component {
    render() {
        return(
            <>
            <TopNav />
            <h1>This is MAIN bio portfolio page</h1>
            </>
        )
    }
}

export default BioPortfolioPage