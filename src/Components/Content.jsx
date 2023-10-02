import React from 'react';
import '../Styles/Content.css';
import avatar  from "/assets/astroboy.jpg"
import Icons from './Icons';
export default function Content() {
  return (
    <>
 
      <div className="main-content">
             <div className="welcome-section">
          
                  <div className="name">Crafting Web Experiences<br></br> with<br></br><span className='highlight'>Design</span> and <span className='highlight'> Code</span></div>
                  
           </div>
                  <div className='my-desc'>
                       
                      
                         <p> "I am a Frontend Developer | 
                      Crafting User-Friendly Digital Solutions<br></br>
                       with a Blend of Technical Expertise and
                  <br></br> 
                   Design Aesthetics that resonates with you 🚀" 
                            </p>
                             
          <div className='desc'>
          <span className='img-brand'>
                      
                      <img src={avatar} className='head-img'/>
        
                      </span>
                      {/* "I am a Frontend Developer | 
                      Crafting User-Friendly Digital Solutions<br></br>
                       with a Blend of Technical Expertise and
                  <br></br> 
                  Design Aesthetics that resonates with you 🚀" */}
                  </div>

          
          </div>
      
              <Icons/>

     </div>        


      
  </>
  );
}
