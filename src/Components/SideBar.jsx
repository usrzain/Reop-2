import React, {Component} from "react";
import './SideBar.css';
import { FaHome } from "react-icons/fa";
import { AiFillCompass , AiOutlineVideoCamera, AiOutlineLike} from "react-icons/ai";
import {MdSubscriptions, MdOutlineVideoLibrary} from "react-icons/md"
import {GrHistory} from "react-icons/gr"
import {RiVideoLine} from "react-icons/ri"
import {BsClockHistory} from "react-icons/bs";
import {FcBusinessman} from "react-icons/fc";


class Sbar extends Component {
    state = {  } 
    render() { 
        return (
        <span className="sidebr">
            <ul>
            
            
               <li><FaHome  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="home"> Home </a></li>
               <li><AiFillCompass  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="explore"> Explore </a></li>
               <li><AiOutlineVideoCamera  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="shorts"> Shorts </a></li>
               <li><MdSubscriptions  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="subscriptions"> Subscription </a></li>


               </ul>


               <hr/>

            <ul>
               <li><MdOutlineVideoLibrary  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="library"> Library </a></li>
               <li><GrHistory  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="history"> History </a></li>
               <li><RiVideoLine  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="your videos"> Your Videos </a></li>
               <li><BsClockHistory  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="watch later"> Watch Later </a></li>
               <li><AiOutlineLike  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="Liked videos"> Liked Videos </a></li>
               </ul> 

  
               <hr/>

            <ul>
            <label style={{ cursor:'pointer'}} title="subscribed channels"> Subscription </label>
               <li><FcBusinessman  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="Go to"> Junaid Akram </a></li>
               <li><FcBusinessman  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="Go to"> Kumar k </a></li>
               <li><FcBusinessman  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="Go to"> web Dev Simplifi </a></li>
               <li><FcBusinessman  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="Go to"> Techgun </a></li>
               <li><FcBusinessman  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="Go to"> TeaShop </a></li>
               <li><FcBusinessman  style={{color: 'green', fontSize: '20px'}}/><a className="Sb" title="Go to"> gunShop </a></li>
               </ul> 
            
             
             
                 
                 
             
            
            

            

          
        </span>
        );
    }
}
 
export default Sbar;