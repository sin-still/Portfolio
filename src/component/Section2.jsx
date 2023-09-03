import React from 'react';

const Section2 = () => {
   return (
      <div className='section2 section'>
         <div className='container'>
            <h2 className='sectionTitle'>About Me.</h2>
            <div className='aboutArea'>
               <div className='myProfileImg'><img src="/img/profile.jpg" alt="" /></div>
               <div className='myProfile'>
                  <div className='myProfileText'>
                     <p>"저는 모시깽이가 되고픈 어쩌구저쩌구하는 개발자입니다"</p>
                  </div>
                  <div className='myProfileInfo'>
                     <h3 className='infoTitle'>name</h3>
                     <p className='infoText'>
                        이신철
                     </p>
                     <h3 className='infoTitle'>생일</h3>
                     <p className='infoText'>
                        <address>1996.08.16</address>
                     </p>
                     <h3 className='infoTitle'>주소</h3>
                     <p className='infoText'>
                        <address>경기도 수원시 권선구</address>
                     </p>
                     <h3 className='infoTitle'>학력</h3>
                     <p className='infoText'>
                        용인예술과학대학교(前 용인송담대) 건축에너지과
                     </p>
                     <h3 className='infoTitle'>교육</h3>
                     <p className='infoText'>
                        더휴먼컴퓨터아카데미 
                     </p>
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Section2;