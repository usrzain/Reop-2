import React, { Component } from 'react'

import Nbar from './Components/NavBar';
import Sbar from './Components/SideBar';
import Tlist from './Components/list';
import Content from './Components/contents';
import './App.css'

class App1 extends Component {
    state = {  } 
    render() { 
        return (
            <div className="bg">

            
                    <Nbar />
                    <Sbar />
                    <Tlist />
                    <Content />

            </div>

        );
    }
}
 
export default App1;
