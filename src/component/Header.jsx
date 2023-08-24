import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
   return (
      <div className='header'>
         <div className='container'>
            <h1 className='logo'></h1>
            <div className='nav'>
               <ul className='nav-list'>
                  <li>About me</li>
                  <li>Skills</li>
                  <li>Archiving</li>
                  <li>Projects</li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Header;