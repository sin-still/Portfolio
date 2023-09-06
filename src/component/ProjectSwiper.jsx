  import React, { useRef, useState } from 'react';
  // Import Swiper React components
  import { Swiper, SwiperSlide } from 'swiper/react';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';



  // import required modules
  import { Pagination, Navigation,Autoplay } from 'swiper/modules';

  export default function App() {
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
          
          className="mySwiper"
        >
          <SwiperSlide className='slide'>
            <h2 className='project-title'>SOSOMIRA 창작 사이트</h2>
            <div className='project-item'>
              <div className='project-imgBox'>
                <div className='project-img'>
                  <img src="/img/sosomira.png" alt="sosomira" />
                </div>
              </div>
              <div className='project-info'>
                <span className='infoTitle'>사이트명</span>
                <p className='info-item'>
                  SOSOMIRA
                </p>
                <span className='infoTitle'>사용스택</span>
                <p className='info-item'>
                  <img src="/img/skill/React-Light.svg" alt="react" />
                  <img src="/img/skill/NodeJS-Light.svg" alt="node.js" />
                  <img src="/img/skill/Sass.svg" alt="sass" />
                </p>
                <div className='flexBox'>
                  <div className='flexItem'>
                    <span className='infoTitle'>참여인원</span>
                    <p className='info-item'>2인</p>
                  </div>
                  <div className='flexItem'>
                    <span className='infoTitle'>역할</span>
                    <p className='info-item'>프론트전반 서버구축 호스팅</p>
                  </div>
                </div>
               
                <span className='infoTitle'>READ ME</span>
                <p className='info-item'>
                  REACT 기반으로 만든 창작 사이트입니다.  <br />
                  node.js사용해 서버를 구축하였고, 데이터베이스와 연동하여 업로드 기능과 회원가입 로그인 기능을 구현하였습니다. 그리고 버셀과 클라우드타입을 이용하여 배포하였습니다.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide'>Slide 2</SwiperSlide>
          <SwiperSlide className='slide'>Slide 3</SwiperSlide>
          <SwiperSlide className='slide'>Slide 4</SwiperSlide>
          <SwiperSlide className='slide'>Slide 5</SwiperSlide>
          <SwiperSlide className='slide'>Slide 6</SwiperSlide>
          <SwiperSlide className='slide'>Slide 7</SwiperSlide>
          <SwiperSlide className='slide'>Slide 8</SwiperSlide>
          <SwiperSlide className='slide'>Slide 9</SwiperSlide>
        </Swiper>
      </>
    );
  }
