import React from 'react'
import './Blog.css';
const Blog =()=> {
  return (
    <div className='blog'>
        <div className="row">
            <div className="col-lg-6">
              <div className="blog-img">
                <img className='img-fluid' src="img/blog1.jpg" alt="" />
              </div>  
            </div>
            <div className="col-lg-6">
                 <div className="blog-text">
                     <div className="content">
                         <div className='tags'>
                             <span>Trending</span>
                             </div>
                         <div className='info'>
                            <span>06 Aug 2022</span>
                            <span>by Alex Morgan</span>
                         </div>
                         <div className='title'>
                             <h4>
                             Create The Lifestyle You Really Desire This World
                             </h4>
                             </div>
                         <div className='text'>
                             <p>
                             Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.
                             </p>
                             </div>
                         <div className='more'>
                             <span>Read More</span>
                        </div>
                     </div>

                 </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Blog