import React from 'react';

const Section1 = () => {
   return (
      <div className='Section1 section'>
         <div className='sectionBg'></div>
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
               <h2 /* className={`firstTitle ${}`} */>Front-end</h2>
               <br />
               <h2 /* className={`secondTitle ${ }`} */><strong>Developer</strong></h2>
               <p>
                  
               </p>
            </div>
            <div className='portfolio'>
               <h2 className='portfolioTitle'>Sinchul's <i>portfolio</i></h2>
            </div>
         </div>
      </div>
   );
};

export default Section1;