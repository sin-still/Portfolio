import React, { useState } from "react"
import Scroll from "./Scroll"
import ContactForm from "./ContactForm"

const Section5 = () => {
   const [isSectionActive, setIsSectionActive] = useState(false)
   return (
      <Scroll
         sectionNum={5}
         isSectionActive={isSectionActive}
         setIsSectionActive={setIsSectionActive}
      >
         <div className='sectionBg sectionBg4'></div>
         <div className='container s-container'>
            <h2 className='sectionTitle'>Contact Me</h2>
            <div className='contactArea'>
               <div className='contact-content'>

                  <div className={`contactFlex activeBefore ${isSectionActive? "active" : null}`}>
                     <div className="circle">
                        <img className="circleImg" src="/img/circle1.png" alt="" />
                     </div>
                     <div className="qrCode">
                        <img src="/img/qrcode.png" alt="" />
                     </div>
                  </div>

                  <div className="contactFlex">
                     <ContactForm isSectionActive={isSectionActive}></ContactForm>
                  </div>
               </div>
            </div>
         </div>
      </Scroll>
   )
}

export default Section5
