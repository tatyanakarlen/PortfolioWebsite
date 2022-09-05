import React, {useState} from 'react'
import TopNav from '../../components/TopNav/TopNav'
import Hero from '../../components/Hero/Hero'
import PortfolioBox from '../../components/PortfolioBox/PortfolioBox';
import { Link } from 'react-router-dom';


function BioPortfolioPage(props) {

    // const [enlargedPhotoActive, setenlargedPhotoActive] = useState(false)

        return(
            <div style={{backgroundColor: 'rgba(241, 238, 238, 0.836)'}}>
            <TopNav />
            <Hero />
            <PortfolioBox projects={props.projects}/>
           </div>
        )
    
}

/* background-color: rgba(241, 238, 238, 0.836); */

export default BioPortfolioPage