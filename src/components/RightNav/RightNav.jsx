import { Link } from 'react-router-dom';
import './RightNav.css'

export default function RightNav() {
    return (
        <div className="right-links">
          <Link className="link" to="/portfolio">PORTFOLIO</Link>
          <Link className="link" to="/resume">RESUME</Link>
        </div>
    )
}




// export default function LeftLink() {
//     return (
//         <div>
//             <h5>TATYANA KARLEN - FULL STACK DEVELOPER</h5>
//         </div>
//     )
// }