import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

// html, css, scss, javascript, jquery, react, typescript, next.js, redux, axios,
// 1. 
const Header = () => {
   return (
      <div className='header'>
         <div className='container'>
            {/* <h1 className='logo'></h1> */}
            <div className='nav'>
               <ul className='nav-list'>
                  <li><Link activeClass="MenuActive" to='section1' spy={true} smooth={true}>Intro</Link></li>
                  <li><Link activeClass="MenuActive" to='section2' spy={true} smooth={true}>About me</Link></li>
                  <li><Link activeClass="MenuActiveR" to='section3' spy={true} smooth={true}>Skills</Link></li>
                  <li><Link activeClass="MenuActiveB" to='section4' spy={true} smooth={true}>Projects</Link></li>
                  <li><Link activeClass="MenuActive" to='section5' spy={true} smooth={true}>Contacts me</Link></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Header;