/* import React from 'react';
import ScrollEvent from './ScrollEvent';

const Section3 = () => {
   const scrollPosition = ScrollEvent()
   return (
      <div className={`section3 section ${scrollPosition >= 0 ? 'sectionActive' : ''}`}>
            <div className='sectionBg1'></div>
         <div className='container'>
            <h2 className='sectionTitle'>Skills.</h2>
            <div className='skillsArea'>
               <div className='skill-content'>

               </div>
            </div>
         </div>
      </div>
   );
};

export default Section3; */


import React, { useState, useEffect, useRef } from 'react';

const Section3 = () => {
   const sectionRef = useRef(null);
   const [isSectionActive, setIsSectionActive] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const section = sectionRef.current;
         if (section) {
            const rect = section.getBoundingClientRect();
            /* setIsSectionActive(rect.top < window.innerHeight && rect.bottom >= 0); */
            setIsSectionActive(rect.top <= 10 && rect.bottom > 0);
            
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <div
         ref={sectionRef}
         className={`section3 section conSection ${isSectionActive ? 'sectionActive' : ''}`}
      >
         <div className='sectionBg sectionBg1'></div>
         <div className='container'>
            <h2 className='sectionTitle'>Skills.</h2>
            <div className='skillsArea'>
               <div className='skill-content'>
                  {/* 내용 */}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Section3;