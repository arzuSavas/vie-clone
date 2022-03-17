import React from 'react'
import SubHeading from '../Components/SubHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation } from "swiper";
import './Works.css';
const Works=()=> {
  return (
    <div>
        <div className='Works'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-10'>
                        <div className='sec-head'>
                         <SubHeading title="portfolio" subhead="Our Recent Web Design & "/>
                         <SubHeading  subhead="Some Past Projects."/>
                        </div>
                    </div>
                </div>
           
            </div>
           
            <Swiper className='coursel mt-5'
                spaceBetween={10}
      
                slidesPerGroup={1}
                autoplay={{
                  delay: 2200,
                  disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                   320: {
                     slidesPerView: 1,
                   },
                    991: {
                      slidesPerView: 2,
                    },
                  }}>
      <SwiperSlide>
                    <div className='content'>
                        <div>
                        <img src="img/1.jpg" className='img-fluid'/>
                        </div>
                       <div className='slide-text'>
                            <h6>art & illustration</h6>
                        <h4>Inspiring new space</h4></div>
                    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='content'>
                        <div>
                        <img src="img/2.jpg" className='img-fluid'/>
                        </div>
                       <div className='slide-text'>
                            <h6>art & illustration</h6>
                        <h4>Inspiring new space</h4></div>
                    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='content'>
                        <div>
                        <img src="img/3.jpg" className='img-fluid'/>
                        </div>
                       <div className='slide-text'>
                            <h6>art & illustration</h6>
                        <h4>Inspiring new space</h4></div>
                    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='content'>
                        <div>
                        <img src="img/4.jpg" className='img-fluid'/>
                        </div>
                       <div className='slide-text'>
                            <h6>art & illustration</h6>
                        <h4>Inspiring new space</h4></div>
                    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='content'>
                        <div>
                        <img src="img/5.jpg" className='img-fluid'/>
                        </div>
                       <div className='slide-text'>
                            <h6>art & illustration</h6>
                        <h4>Inspiring new space</h4></div>
                    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='content'>
                        <div>
                        <img src="img/6.jpg" className='img-fluid'/>
                        </div>
                       <div className='slide-text'>
                            <h6>art & illustration</h6>
                        <h4>Inspiring new space</h4></div>
                    </div>
      </SwiperSlide>
    
    </Swiper>
    
        </div>
    </div>
  )
}

export default Works