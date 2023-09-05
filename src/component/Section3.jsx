import React, { useState, useEffect, useRef } from 'react';
import Scroll from './Scroll';
import FlowText from './FlowText';



const Section3 = () => {
   const [isSectionActive, setIsSectionActive] = useState(false);
   return (
      <Scroll sectionNum={3} isSectionActive={isSectionActive} setIsSectionActive={setIsSectionActive}>
      <div className='sectionBg sectionBg1'></div>
      <div className='container'>
         <h2 className='sectionTitle'>Skills.</h2>
         <div className={`skillsArea ${isSectionActive ? 'activeskillsArea' : ''}`}>
            
            <div className='skill-content'>
               <div className='skills-box'>
                  <div className='skills-item'>
                     <h3 className='skills-title'>Programming Languages</h3>
                     <div className='item-list none'>
                     <div className='skill-item'><img src="/img/skill/JavaScript.svg" alt="JavaScript" /></div>
                     <div className='skill-item'><img src="/img/skill/TypeScript.svg" alt="TypeScript" /></div>
                     
                     </div>
                  </div>
                  <div className='skills-item'>
                     <h3 className='skills-title'>Frameworks and Libraries</h3>
                     <div className='item-list'>
                     <div className='skill-item'><img src="/img/skill/JQuery.svg" alt="JQuery" /></div>
                     <div className='skill-item'><img src="/img/skill/React-Light.svg" alt="React-Light" /></div>
                     <div className='skill-item'><img src="/img/skill/Redux.svg" alt="Redux" /></div>
                     <div className='skill-item'><img src="/img/skill/axios.png" alt="axios-icon" /></div>
                     <div className='skill-item'><img src="/img/skill/NextJS-Light.svg" alt="NextJS-Light" /></div>
                     </div>
                  </div>
                  {/* <div className='skills-item'>
                     <h3 className='skills-title'>Styling and Design</h3>
                     <div className='item-list'>
                     <div className='skill-item'><img src="/img/skill/HTML.svg" alt="css" /></div>
                     <div className='skill-item'><img src="/img/skill/CSS.svg" alt="css" /></div>
                     <div className='skill-item'><img src="/img/skill/Sass.svg" alt="sass" /></div>
                     <div className='skill-item'><img src="/img/skill/Bootstrap.svg" alt="Bootstrap" /></div>
                     </div>
                  </div>
                  <div className='skills-item'>
                     <h3 className='skills-title'>Tools</h3>
                     <div className='item-list'>
                        <div className='skill-item'><img src="/img/skill/VisualStudio-Light.svg" alt="vs코드" /></div>
                        <div className='skill-item'><img src="/img/skill/Figma-Light.svg" alt="피그마" /></div>
                        <div className='skill-item'><img src="/img/skill/Git.svg" alt="깃" /></div>
                        <div className='skill-item'><img src="/img/skill/Github-Light.svg" alt="깃허브" /></div>
                     </div>
                  </div> */}
               </div>
               <div className='skills-box'>
                  
                  <div className='skills-item'>
                     <h3 className='skills-title'>Styling and Design</h3>
                     <div className='item-list'>
                     <div className='skill-item'><img src="/img/skill/HTML.svg" alt="css" /></div>
                     <div className='skill-item'><img src="/img/skill/CSS.svg" alt="css" /></div>
                     <div className='skill-item'><img src="/img/skill/Sass.svg" alt="sass" /></div>
                     <div className='skill-item'><img src="/img/skill/Bootstrap.svg" alt="Bootstrap" /></div>
                     </div>
                  </div>
                  <div className='skills-item'>
                     <h3 className='skills-title'>Tools</h3>
                     <div className='item-list'>
                        <div className='skill-item'><img src="/img/skill/VisualStudio-Light.svg" alt="vs코드" /></div>
                        <div className='skill-item'><img src="/img/skill/Figma-Light.svg" alt="피그마" /></div>
                        <div className='skill-item'><img src="/img/skill/Git.svg" alt="깃" /></div>
                        <div className='skill-item'><img src="/img/skill/Github-Light.svg" alt="깃허브" /></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Scroll>
   );
};

export default Section3;