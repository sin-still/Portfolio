import React, { useState, useEffect, useRef } from 'react';
import Scroll from './Scroll';
import FlowText from './FlowText';
import ProjectSwiper from './ProjectSwiper'
import './ProjectSwiper.scss'


const Section4 = () => {
   const [isSectionActive, setIsSectionActive] = useState(false);
   return (
      <Scroll sectionNum={4} isSectionActive={isSectionActive} setIsSectionActive={setIsSectionActive}>
      <div className='sectionBg sectionBg2'></div>
      <div className='container s-container'>
         <h2 className='sectionTitle'>Project.</h2>
         <div className='projectArea'>
            <div className='project-content'>
           
               <ProjectSwiper></ProjectSwiper>
            </div>
         </div>
      </div>
      {/* <FlowText/> */}
   </Scroll>
   );
};

export default Section4;