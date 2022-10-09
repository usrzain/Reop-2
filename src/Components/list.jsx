import React, { Component } from 'react'
import './list.css'
class Tlist extends Component {
    state = {  } 
    render() { 
        return (
        <span className='list'>
            <ul className='ls'>
                <li className='liD'>All</li>
                <li className='liD'>Computer Programming</li>
                <li className='liD'>Music</li>
                <li className='liD'>Sales</li>
                <li className='liD'>Server</li>
                <li className='liD'>Live</li>
                <li className='liD'>Graphic Design </li>
                <li className='liD'>Consumer Electronics</li>
                <li className='liD'>Podcast</li>
                <li className='liD'>Recently Uploaded</li>
                <li className='liD'>Web3.0</li>
                
                
                
                
            </ul>
        </span>
        
        );
    }
}
 
export default Tlist;
