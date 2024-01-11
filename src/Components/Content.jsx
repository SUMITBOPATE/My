import React from 'react';
import '../Styles/Content.css';
import avatar  from "/assets/astroboy.jpg"
import Icons from './Icons';
export default function Content() {
  return (
    <>
 
      <div className="main-content">
             <div className="welcome-section">
          <p id='intro-text'><p>I’m  Sumit —</p> </p><div className='title-name'> 
          <p>Frontend Developer</p>
                  <div className="title-description"> I love to Craft for<b>  Web </b>.</div>
                  
           </div>
                  {/* <div className='my-desc'>
                       
                      
                         <p> "I am a <b>Frontend Developer </b>based in India  | 
                      Crafting User-Friendly Digital Solutions<br></br>
                       with a Blend of Technical Expertise and
                  
                   Design aesthetics that resonates with you 🚀 and lead to the success of overall product" 
                            </p>
                            </div>  */}
        
          
                      
                      {/* <img src={avatar} className='head-img'/> */}
        
                  
                      {/* "I am a Frontend Developer | 
                      Crafting User-Friendly Digital Solutions<br></br>
                       with a Blend of Technical Expertise and
                  <br></br> 
                  Design Aesthetics that resonates with you 🚀" */}
              

          
          
      
              <Icons/>

     </div>        

</div>
      
  </>
  );
}
