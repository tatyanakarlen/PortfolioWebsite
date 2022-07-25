import { Link } from 'react-router-dom';

export default function RightNav() {
    return (
        <>
          <h3>This is right navigation</h3>
          <Link to="/portfolio">PORTFOLIO</Link>
          <br/>
          <Link to="/resume">RESUME</Link>
          
        </>
    )
}




// export default function LeftLink() {
//     return (
//         <div>
//             <h5>TATYANA KARLEN - FULL STACK DEVELOPER</h5>
//         </div>
//     )
// }