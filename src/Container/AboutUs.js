import React from 'react'
import './AboutUs.css';

const AboutUs=()=> {
  return (
      <div className='AboutUs'>
    <div className='  container '>
        <div className=' row AboutUs-container '>
        <div className='AboutUs-images d-flex col-lg-7'>
            <div className='row'>
            <div className='col-lg-6 col-md-6 AboutUs-images-left'>
                <img src="img/about01.jpg"className='about01 img-fluid' /> 
                <div className='exp'>
                    <h2>28</h2>
                    <h6>Years Of Experiance</h6>
                </div> 
            </div>
            <div className='col-lg-6  col-md-6 AboutUs-images-right'>
                <img src="img/about02.jpg" className='about02 img-fluid' />
            </div>
            </div>
            </div>
        <div className='AboutUs-text col-lg-5'>
            <div className="AboutUs-content">
            <h4>Unlimited Skills for</h4><br/>
            <h4>Super Projects.</h4>
            <p>
            <span>Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).</span> <br /><span> We develop creative solutions for small and big brands alike,build authentic product identities and much more.</span>
            </p>
            <button className='button-style'>About Us</button>
            </div>
         </div>
       
        </div>
          
    </div>
    <div className='right-line '></div>
    </div>
  )
}

export default AboutUs