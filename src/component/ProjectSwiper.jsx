import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import data from "../data"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules"

export default function App() {
   const [pData, setpData] = useState(data)
   return (
      <>
         <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            /* autoplay={{ delay: 1000, disableOnInteraction: false }} */

            className='mySwiper'
         >
            {pData.map((item, i) => {
               return (
                  <SwiperSlide className='slide' key={i}>
                     <h2 className='project-title'>{item.title}</h2>
                     <div className='project-item'>
                        <div
                           className='project-imgBox'
                           onScroll={(e) => {
                              if (e.currentTarget === e.target) {
                                 // 이벤트가 직접적으로 발생한 요소에 대해서만 처리
                                 // e.currentTarget은 이벤트가 등록된 요소를 가리킵니다.
                                 // e.target은 실제 이벤트가 발생한 요소를 가리킵니다.
                                 // 이 두 값이 동일한 경우에만 처리하도록 합니다.
                                 // 그 외의 경우에는 상위 요소로 이벤트가 전파됩니다.
                                 // 여기서는 project-imgBox 내부에서 스크롤 이벤트가 발생한 경우에만 처리합니다.
                              }
                           }}
                        >
                           <div className='project-img'>
                              <img src={item.image} alt='sosomira' />
                           </div>
                        </div>
                        <div className='project-info'>
                           <span className='infoTitle'>사이트명</span>
                           <p className='info-item'>{item.title}</p>
                           <span className='infoTitle'>사용스택</span>
                           <p className='info-item'>
                              {item.skill.map((a, i) => {
                                 return <img src={a} alt='skill' key={i} />
                              })}
                           </p>
                           <div className='flexBox'>
                              <div className='flexItem'>
                                 <span className='infoTitle'>참여인원</span>
                                 <p className='info-item'>{item.personnel}인</p>
                              </div>
                              <div className='flexItem'>
                                 <span className='infoTitle'>역할</span>
                                 <p className='info-item'>{item.part}</p>
                              </div>
                           </div>

                           <span className='infoTitle'>READ ME</span>
                           <p className='info-item'>
                              {item.desTitle}
                              <br />
                              {item.des}
                           </p>
                        </div>
                     </div>
                  </SwiperSlide>
               )
            })}
         </Swiper>
      </>
   )
}
