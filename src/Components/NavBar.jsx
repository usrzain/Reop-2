import React, {Component } from "react";

import './NavBar.css'

class Nbar extends Component {
    state = { 
        clas:"inp"
     } ;

    
    render() { 
        return (
        <div>
            
               <span> 
                  

                  <form>
                    <a className="logo"> <img src="./images/Yu.jpg"  alt="Youtube" title="Youtube"/> </a>
                    <input placeholder="Search" className="input " title="Search"/>
                     
            
                  </form>
                  
               </span>
                  
               <button class="material-icons search" style={{ cursor:'pointer'}} title="Search">  search   </button>

               <span class="material-symbols-sharp mic" style={{ cursor:'pointer'}} title="google search">
                    mic
               </span>


             

              <span className="extra">
                  <span class="material-symbols-sharp mg" style={{ cursor:'pointer'}} title="Create a Channel">
                     video_call
                  </span>

                    <span class="material-symbols-sharp mg" style={{ cursor:'pointer'}} title="Notifications">
                        notifications
                        </span>

                        <span class="material-symbols-sharp mg" style={{ cursor:'pointer'}} title="Create an Account">
                        account_circle
                        </span>
              </span>
        
            
            
            


            
                
            
        </div>
        
        );
    }
}
 
export default Nbar;