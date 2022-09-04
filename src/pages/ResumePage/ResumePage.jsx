import React from 'react'
import { Link } from 'react-router-dom';
import TopNav from '../../components/TopNav/TopNav'
import { BsLinkedin } from 'react-icons/bs'


class ResumePage extends React.Component {
    render() {
        return(
            <>
            <TopNav />
            <h1>This is Resume page</h1>
            <BsLinkedin style={{fontSize: '25px'}}/>
            </>
        )
    }
}

export default ResumePage