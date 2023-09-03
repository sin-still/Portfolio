import React, { useState, useEffect, useRef } from 'react';
import Scroll from './Scroll';


const Section4 = () => {
  
   return (
      <Scroll sectionNum={4}
   >
      <div className='sectionBg sectionBg2'></div>
      <div className='container'>
         <h2 className='sectionTitle'>Project.</h2>
         <div className='skillsArea'>
            <div className='skill-content'>
               {/* 내용 */}
            </div>
         </div>
      </div>
   </Scroll>
   );
};

export default Section4;