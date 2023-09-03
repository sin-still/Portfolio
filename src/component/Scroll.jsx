import React, { useState, useEffect, useRef } from 'react';

const Scroll = ({ children, sectionNum  }) => {
   const sectionRef = useRef(null);
   const [isSectionActive, setIsSectionActive] = useState(false);
   useEffect(() => {

      const handleScroll = () => {
         const section = sectionRef.current;
         if (section) {
            const rect = section.getBoundingClientRect();
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
         className={`section${sectionNum} section conSection ${isSectionActive ? 'sectionActive' : ''}`}
      >
         {children}
      </div>
   );
};

export default Scroll;
