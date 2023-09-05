import { BsMouse } from "react-icons/bs"; 
import React from 'react';
import FlowText from './FlowText';

const Section1 = () => {
   return (
      <div className='section1 section'>
         <div className='sectionBg'></div>
         <FlowText />
         <div className='container'>
            {/* <div className="profilBox">
               <div className="profil-img">
                  <img src="img/Profil.jpg" alt="" />
               </div>
               <div className='info'>
                  <p>Lee sinchul</p>
               </div>
            </div> */}
            <div className="intro">
               <h2 /* className={`firstTitle ${}`} */>Front-End</h2>
               <br />
               <h2 /* className={`secondTitle ${ }`} */><strong>Developer</strong></h2>
               <p>
                  
               </p>
            </div>
            <div className='portfolio'>
               <h2 className='portfolioTitle'>Sinchul's <i>Portfolio</i></h2>
            </div>
            <BsMouse className="mouse"/>
         </div>
      </div>
   );
};

export default Section1;