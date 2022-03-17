import React, { useState } from 'react';
import {MenuOutlined} from '@ant-design/icons';
import './Navbar.css';
const Navbar=()=> {
  const [MobileMenu,SetMobileMenu]=useState(false)
  return (
    <nav className='Navbar '>
     
        <div className='Navbar_logo'>
            <li>
                <a href="">
                  <img className='img-fluid' src="img/logo-light.png" alt="" />
                </a>
            </li>
        </div>
        <ul className='Nav_links'>
            <li className='link_style'><a href="">Home</a></li>
            <li className='link_style'><a href="">About</a></li>
            <li className='link_style'><a href="">Works</a></li>
            <li className='link_style'><a href="">Blog</a></li>
            <li className='link_style'><a href="">Contact</a></li>
        </ul>
        <div className='navbar-smallscreen'>
          <MenuOutlined className='mobileMenu-icons' onClick={()=>SetMobileMenu(!MobileMenu)}/>
          </div>
          {MobileMenu &&(
            <div className='navbar-smallscreen-active '>
               <ul className='Nav_links_mobilMenu'>
                 <li className='link_style'><a href="">Home</a></li>
                 <li className='link_style'><a href="">About</a></li>
                 <li className='link_style'><a href="">Works</a></li>
                 <li className='link_style'><a href="">Blog</a></li>
                 <li className='link_style'><a href="">Contact</a></li>
               </ul>
            </div>
       )}
      
       
    </nav>
    
  )
}

export default Navbar