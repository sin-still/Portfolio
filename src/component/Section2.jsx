import React, { useState } from 'react';

import Scroll from './Scroll';


const Section2 = () => {
   const [isSectionActive, setIsSectionActive] = useState(false);

   return (
      <Scroll sectionNum={2} isSectionActive={isSectionActive} setIsSectionActive={setIsSectionActive}>
         
            <div className='sectionBg sectionBg3'></div>
         
            <div className='container s-container'>
               <h2 className='sectionTitle'>About Me.</h2>
               <div className={`aboutArea ${isSectionActive ? 'activeAboutArea' : ''}`}>
                  <div className='myProfileImg'><img src="/img/profile.jpg" alt="" /></div>
                  <div className='myProfile'>
                     <div className='myProfileText'>
                        <p>"저는 모시깽이가 되고픈<br /> 어쩌구저쩌구하는 개발자입니다"</p>
                     </div>
                     <div className='myProfileInfo'>
                        <div className='ProfileInfoItem'>
                           <h3 className='infoTitle'>이름</h3>
                           <p className='infoText'>
                              이신철
                           </p>
                        </div>
                        <div className='ProfileInfoItem'>
                           <h3 className='infoTitle'>생일</h3>
                           <p className='infoText'>
                              <address>1996.08.16 (만 27세)</address>
                           </p>
                        </div>
                        <div className='ProfileInfoItem'>
                        <h3 className='infoTitle'>교육</h3>
                           <p className='infoText'>
                              더휴먼컴퓨터아카데미 
                           </p>
                        </div>
                        <div className='ProfileInfoItem'>
                           <h3 className='infoTitle'>학력</h3>
                           <p className='infoText'>
                              용인예술과학대학교(前 용인송담대) 건축에너지과
                           </p>
                        </div>
                        <div className='ProfileInfoItem'>
                           <h3 className='infoTitle'>주소</h3>
                           <p className='infoText'>
                              <address>경기도 수원시 권선구</address>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
      </Scroll>
   );
};

export default Section2;