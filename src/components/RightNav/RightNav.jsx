import { Link } from 'react-router-dom';
import './RightNav.css'

export default function RightNav() {



    return (
        <div className="right-links">
            <ul className="navRightList">
          <li className="navRightli"><Link className="link" to="/portfolio">PORTFOLIO</Link></li>
          <li className="navRightli"><Link className="link" to="/resume">RESUME</Link></li>
            </ul>  
          

        </div>
    )
}




