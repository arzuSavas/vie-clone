import React from 'react'
import SubHeading from '../Components/SubHeading';
import './MinArea.css'
const MinArea =()=> {
  return (
    <div>
        <div className="MinArea">
          <div className="container">
             <div className="row">
              <div className="col-lg-6">
              <div className="img">
                <div className="MinArea-img">
                    <img src="img/min-area.jpg" alt="" className='img-fluid' /></div>           
              </div>  
              </div>
              <div className="col-lg-6">
                <div className="content">
                <SubHeading  subhead="Dream. Innovate."/>
                <SubHeading  subhead=" Implement."/>
                <p>Our creative Adagency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players. By adhering to industry standards, we create some stunning portfolios. Company branding redefines.</p>
                <ul>
                    <li>We provide free initial consultation and support.</li>
                    <li>We work with some of the most successful businesses.</li>
                </ul>
                <button className='button-style'>Discover</button>
                </div>
            </div>            
            </div>
         </div>
        </div>
    </div>
  )
}

export default MinArea