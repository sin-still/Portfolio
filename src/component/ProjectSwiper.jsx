import React, {  useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";


export default function App() {
  const [pData] = useState(data);




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
        className='mySwiper'
      >
        {pData.map((item, i) => {
          return (
            
            <SwiperSlide className='slide' key={i}>
               
              <h2 className='project-title'>{item.title}</h2>
              
              <div className='project-item'>
                <div className='project-imgBox'>
                  <div className='project-img'>
                    <a target="_blank" rel="noopener noreferrer"href={item.link}><img src={item.image} alt='sosomira' /></a>
                  </div>
                </div>
                  
                <div className='project-info'>
                  <span className='infoTitle'>사이트명</span>
                  <p className='info-item'>{item.title}</p>
                  <span className='infoTitle'>사용스택</span>
                  <p className='info-item'>
                    {item.skill.map((a, i) => {
                      return <img src={a} alt='skill' key={i} />;
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
                  <div className="linkBox">
                     <Link className="infoTitle">바로가기</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

