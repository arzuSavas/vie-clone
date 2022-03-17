import React from 'react'
import './Footer.css';
const Footer=()=> {
  return (
    <div className='footer'>
         <div className="container">
             <div className="row">
                 <div className="col-lg-4">
                   <div className="item">
                   <div className="title">
                     <h5>Contact Us</h5>
                   </div>
                   <ul>
                     <li>
                       <span className='icon pe-7s-map-marker'></span>
                       <div className='cont'>
                         <h6>Officeal Address</h6>
                         <p>504 White St . Dawsonville, GA 30534 , New York</p>
                       </div>
                     </li>
                     <li>
                     <span className='icon pe-7s-mail'></span>
                       <div className='cont'>
                         <h6>Email Us</h6>
                         <p>support@gmail.com</p>
                       </div>
                     </li>
                     <li>
                     <span className='icon pe-7s-call'></span>
                       <div className='cont'>
                         <h6>Call Us</h6>
                         <p>+87986451666</p>
                       </div>
                     </li>
                   </ul>
                   </div>
                 </div>
                 <div className="col-lg-4">
                 <div className="item">
                   <div className="title">
                     <h5>Recent News</h5>
                   </div>
                   <ul>
                        <li>
                          <div className="img">
                            <img className='img-fluid' src="img/5.jpg" alt="" />
                          </div>
                          <div className="news-text">
                            <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
                            <span>14 sep 2022</span>
                          </div>
                        </li>
                        <li>
                        <div className="img">
                            <img className='img-fluid' src="img/1.jpg" alt="" />
                          </div>
                          <div className="news-text">
                            <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
                            <span>14 sep 2022</span>
                          </div>
                        </li>
                        <li>
                          <div className='mail-send'>
                            <input type="text" placeholder='Type Your Email' />
                            <span className='mail-send-icon pe-7s-paper-plane'></span>
                          </div>
                        </li>
                   </ul>
                   </div>
                 </div>
                 <div className="col-lg-4">
                   <div className="item ">
                     <div className="footer-logo">
                      <img src="img/logo-light.png" alt="" />
                     </div>
                     <div className="social d-flex">
                       <a>
                         <i className='fab fa-facebook-f'></i>
                       </a>
                       <a>
                        <i class="fab fa-twitter"></i>
                       </a>
                       <a>
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a>
                      <i class="fab fa-youtube"></i>
                      </a>
                     </div>
                     <div className="copy-right">
                       <p>© 2022, Vie Template. Made with passion by
                          <span>ThemesCamp</span>.</p>
                     </div>
                   </div>
                 </div>
             </div>
         </div>
    </div>
  )
}

export default Footer