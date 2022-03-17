import React from 'react';
import SubHeading from '../Components/SubHeading';
import { IoMdTv, IoIosArrowRoundForward, IoIosFlash, IoMdCube, IoMdColorWand } from "react-icons/io";
import './Feats.css';
const  Feats=()=> {
    
  return (
    <div>
        <div className='feats'>
            <div className="container">
            <div className='row'>
                    <div className='col-lg-8 col-md-10 '>
                        <div className='sec-head'>
                         <SubHeading title="BEST SERVICES" subhead="We help to create strategies, "/>
                         <SubHeading  subhead=" design & development."/>
                        </div>
                    </div>
                </div>
            <div className="row">
                <div className= "col-lg-3 col-md-6 items active">
                    <div>
                        <span className='icons'>
                            <i> <IoMdTv/> </i>
                        </span>
                        <h5>Interface Design</h5>
                        <p>Implementation and rollout of new network infrastructure, including consolidation.</p>
                        <span className='more-info-io'><i> <IoIosArrowRoundForward/> </i></span>
                    </div>
                </div>
                <div className=" col-lg-3 col-md-6 items"  >
                <div>
                        <span className='icons'><i><IoIosFlash/></i></span>
                        <h5>Creative Always</h5>
                        <p>Implementation and rollout of new network infrastructure, including consolidation.</p>
                        <span className='more-info-io'><i> <IoIosArrowRoundForward/> </i></span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 items ">
                <div>
                        <span  className='icons'><i><IoMdCube/></i></span>
                        <h5>Real-time Editing</h5>
                        <p>Implementation and rollout of new network infrastructure, including consolidation.</p>
                        <span className='more-info-io'><i> <IoIosArrowRoundForward/> </i></span>
                    </div>
                </div>
                <div className=" col-lg-3 col-md-6 items">
                <div>
                        <span className='icons'><i><IoMdColorWand/></i></span>
                        <h5>Art Concept</h5>
                        <p>Implementation and rollout of new network infrastructure, including consolidation.</p>
                        <span className='more-info-io'><i> <IoIosArrowRoundForward/></i></span>
                    </div>
                </div>
            </div> 
            </div>
        </div>
    </div>
  )
}

export default Feats