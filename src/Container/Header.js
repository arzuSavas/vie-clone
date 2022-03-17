import React from 'react'
import Particle from '../Components/Particle';
import './Header.css';
const Header=()=> {
  return (
    <div className='header'>
        <div className='container  '>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
            <h1 className=' header-text  text-center'>
                <span className='color-font'>
                Creativity
                </span>
                &nbsp;is the process of having&nbsp;
                <span className='color-font'>original ideas</span>.
            </h1>
            </div>
            </div>
        </div>
        <div className='particles-js'>
          <Particle/>
        </div> 
       
      <div className='circle1'></div>
      <div className='circle2'></div>
   
    <div className='left-line'></div> 
    </div>
  )
}

export default Header