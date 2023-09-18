import { BsMouse } from "react-icons/bs"; 

import FlowText from './FlowText';
import TypingTitle from "./TextTyping";


const Section1 = () => {
   
   return (
      <div  className='section1 section'>
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
               <h2 className='portfolioTitle'><TypingTitle completionWord={'PORTFOLIO'}></TypingTitle></h2>
            </div>
            <BsMouse className="mouse"/>
         </div>
      </div>
   );
};

export default Section1;