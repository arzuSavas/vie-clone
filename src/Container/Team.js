import React from 'react'
import Progress from '../Components/Progress';
import './Team.css';

const Team =()=> {
  return (
    <div className='team container'>
        <div className="row">
            <div className="col-lg-5 team-left">
              <div className="team-text">
                <div className="team-title">
                  <h6>Our Staff</h6>
                </div>
                <h3>We help to create visual strategies.</h3>
                <p>We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.   Nullam imperdie.</p>
              <div className="skills-box">
                <div className="skill-item">
                  <h6>UI / UX Design</h6>
                  <div className="skill-progress">
                    <Progress done={90}></Progress>
                  </div>
               </div>
                <div className="skill-item mb-5">
                <h6>Apps Development</h6>
                <div className="skill-progress">
                    <Progress done={80}></Progress>
                  </div>
                </div>
              </div>
              </div>
             
            </div>
            <div className="col-lg-6">
                <div className='img-box'>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className='img pb-4'>
                        <img className='img-fluid' src="img/team1.jpg" alt="" />
                      </div>
                      <div className='img pb-4'>
                        <img className='img-fluid' src="img/team2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className='img pb-4'>
                        <img className='img-fluid' src="img/team3.jpg" alt="" />
                      </div>
                      <div className='img pb-4'>
                        <img className='img-fluid' src="img/team4.jpg" alt="" />
                      </div>
                    </div>
                  </div>
               
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team