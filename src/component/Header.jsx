import React from 'react';
import { NavLink } from 'react-router-dom';

// html, css, scss, javascript, jquery, react, typescript, next.js, redux, axios,
// 1. 
const Header = () => {
   return (
      <div className='header'>
         <div className='container'>
            {/* <h1 className='logo'></h1> */}
            <div className='nav'>
               <ul className='nav-list'>
                  <li>About me</li>
                  <li>Skills</li>
                  <li>Projects</li>
                  <li>Contacts me</li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Header;