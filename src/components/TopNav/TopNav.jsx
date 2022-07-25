
import LeftLink from '../LeftLink/LeftLink.jsx'
import RightNav from '../RightNav/RightNav.jsx'


export default function TopNav() {
   return (
       <div>
         <LeftLink />
         <RightNav />
       </div>
   )
}





// function CategoryList(props) {
//     return (
//         <div>
//           <ul className='CategoryList'>
//           {props.menuCategories.map(c => <li>{c}</li>)}
//           </ul>
//         </div>
//     );
//   }
  
//   export default CategoryList;