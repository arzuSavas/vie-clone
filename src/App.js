import React from 'react';
import './App.css';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import Header from './Container/Header';
import AboutUs from './Container/AboutUs';
import Works from './Container/Works';
import Feats from './Container/Feats';
import MinArea from './Container/MinArea';
import References from './Container/References';
import Team from './Container/Team';
import Blog from './Container/Blog';
import CallAction from './Container/CallAction';


const App=() =>{
 return(
     <div className='App'>
       
       <Header/>
       <Navbar/>
       <AboutUs/>
       <Works/>
       <Feats/>
       <MinArea/>
       <References/>
       <Team/>
       <Blog/>
       <CallAction/>
       <Footer/>
     </div>
     
 )
 
}

export default App;
