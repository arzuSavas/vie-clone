import React from 'react'
import './References.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation } from "swiper";
const References=()=> {

    return (
      <div className='references container-fluid'>
        
        
   <Swiper className='coursel mt-5'
                spaceBetween={10}
                centeredSlides= {true}
                initialSlide={1}
                autoplay={{
                  delay: 2000,
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
                  
                     771: {
                       slidesPerView: 2,
                      
                   },
                   320: {
                    slidesPerView: 1,
                   
                },
                  }}>
      <SwiperSlide>

      <div className='row item '>
     
           <div className="item-left col-lg-4 col-sm-6">
             <div className="img">
               <img src="img/rf1.jpg" alt="" />
             </div>
             <div className="text">
               <h6>Alex regelman</h6>
               <span>Co-founder, colabrio</span>
             </div>
           </div>
      
           <div className="item-right col-lg-8 col-sm-6">
             <p>I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.</p>
           </div>
           </div>
         
      </SwiperSlide>
      <SwiperSlide>
      <div className='row item '>
          
           <div className="item-left col-lg-4 col-sm-6">
             <div className="img">
               <img src="img/rf1.jpg" alt="" />
             </div>
             <div className="text">
               <h6>Alex regelman</h6>
               <span>Co-founder, colabrio</span>
             </div>
           </div>
           <div className="item-right col-lg-8 col-sm-6">
             <p>I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.</p>
           </div>
           </div>
          
      </SwiperSlide>
      <SwiperSlide>
      <div className='row item '>
           
           <div className="item-left col-lg-4 col-sm-6">
             <div className="img">
               <img src="img/rf1.jpg" alt="" />
             </div>
             <div className="text">
               <h6>Alex regelman</h6>
               <span>Co-founder, colabrio</span>
             </div>
           </div>
           <div className="item-right col-lg-8 col-sm-6">
             <p>I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.</p>
           </div>
           </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className='row item '>
           
           <div className="item-left col-lg-4 col-sm-6">
             <div className="img">
               <img src="img/rf1.jpg" alt="" />
             </div>
             <div className="text">
               <h6>Alex regelman</h6>
               <span>Co-founder, colabrio</span>
             </div>
           </div>
           <div className="item-right col-lg-8 col-sm-6">
             <p>I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.</p>
           </div>
           </div>
        
      </SwiperSlide>
      <SwiperSlide>
      <div className='row item '>
            
           <div className="item-left col-lg-4 col-sm-6">
             <div className="img">
               <img src="img/rf1.jpg" alt="" />
             </div>
             <div className="text">
               <h6>Alex regelman</h6>
               <span>Co-founder, colabrio</span>
             </div>
           </div>
           <div className="item-right col-lg-8 col-sm-6">
             <p>I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.</p>
           </div>
           </div>
          
      </SwiperSlide>
      <SwiperSlide>
      <div className='row item '>
       
           <div className="item-left col-lg-4 col-sm-6">
             <div className="img">
               <img src="img/rf1.jpg" alt="" />
             </div>
             <div className="text">
               <h6>Alex regelman</h6>
               <span>Co-founder, colabrio</span>
             </div>
           </div>
           <div className="item-right col-lg-8 col-sm-6">
             <p>I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.</p>
           </div>
           </div>
          
      </SwiperSlide>
    
    </Swiper>







       
      </div>
    );
  }


export default References