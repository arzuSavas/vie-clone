import React from 'react'
import './CallAction.css';

const  CallAction=()=> {
  return (
    <div className='call-action'>
       <div className="container">
           <div className="row">
              <div className="col-md-8 col-lg-9">
                  <div className="content">
                      <h6><span>Let's Talk</span></h6>
                      <h2>
                          <span>about your</span><br/>
                          <span>next project.</span>
                      </h2>
                  </div>
              </div>
              <div className="col-md-4 col-lg-3">
                  <button className='button-style'>Get In Touch</button>
              </div>
            </div>
       </div>

    </div>
  )
}

export default CallAction