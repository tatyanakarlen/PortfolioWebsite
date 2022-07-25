import { Link } from 'react-router-dom';
import './LeftLink.css';

export default function LeftLink() {
    return (
        <div className="left-link">
            <Link className="link" to="/portfolio">TATYANA KARLEN - FULL STACK DEVELOPER</Link>
        </div>
    )
}






// export default function TopNav() {
//     return (
//         <div>
//           <h5>THIS IS TOP NAV</h5>
//         </div>
//     )
//  }