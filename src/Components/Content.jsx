import React from 'react';
import '../Styles/Content.css';
import avatar  from "/assets/astroboy.jpg"
import Icons from './Icons';
export default function Content() {
  return (
    <>
 
      <div className="main-content">
             <div className="welcome-section">
          <h1 className='title-name'> I am 
            <br></br> Sumit Bopate</h1>
                  <div className="title-description"> Crafting things for<span className='highlight'> WEB</span> <span className='highlight'></span></div>
                  
           </div>
                  <div className='my-desc'>
                       
                      
                         <p> "I am a Frontend Developer based in India  | 
                      Crafting User-Friendly Digital Solutions<br></br>
                       with a Blend of Technical Expertise and
                  
                   Design aesthetics that resonates with you 🚀 and <br>
                   </br>lead to the success of overall product" 
                            </p>
                             
        
          
                      
                      {/* <img src={avatar} className='head-img'/> */}
        
                  
                      {/* "I am a Frontend Developer | 
                      Crafting User-Friendly Digital Solutions<br></br>
                       with a Blend of Technical Expertise and
                  <br></br> 
                  Design Aesthetics that resonates with you 🚀" */}
              

          
          </div>
      
              <Icons/>

     </div>        


      
  </>
  );
}
