import React, { useEffect, useRef } from 'react';

const Scroll = ({ children, sectionNum, isSectionActive, setIsSectionActive }) => {
   const sectionRef = useRef(null);
   /* const [isSectionActive, setIsSectionActive] = useState(false); */
   useEffect(() => {

      const handleScroll = () => {
         const section = sectionRef.current;
         if (section) {
            const rect = section.getBoundingClientRect();
            setIsSectionActive(rect.top <= 10 && rect.bottom > 400);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [setIsSectionActive]);

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
