import React from 'react'
import '../Styles/About.css';
    import myimg from "/assets/new-avatar.jpg"
    import work from "/assets/work.jpg"
    import tech from "/assets/tech.jpg"
    import think from "/assets/think.jpg"
    import vision from "/assets/vision.jpg"
    import Skills from './Skills'
    export default function About() {
      return (
        <>
           
          <div className="main-about">
           
               
                <span className="bold"><h1>Get to know me!</h1>

                   <br></br><h2>Nice to meet you😄.</h2></span>

              <div className="about-section">
                    
               
                <div className="section">
                  I am a self-taught <span className="bold"> FrontEnd Developer. </span>
               
         I've been focused on programming, building a solid frontend stack and 
         creating exciting projects that solve real-world problems.
                   I love to build stuff and
                  connect with people smarter than me!<br>
                  </br>
                  When I am not smashing the keyboard, you will find me playing
                  cricket, reading or watching You-Tube or Cycling🚲.
                 <br></br> 
                  I'm open to<span className='bold'> Job opportunities</span> where I can contribute,
                   learn and grow. If you have a good opportunity
                   that matches my skills and experience then don't hesitate to contact me.
                  <br></br> Take a look at my work below to see !
                
             
                <div className='btn-list'>
                <button className="btn" id="bottone1">Contact me <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
              
                </div>
                </div>
                <div className="column">    
            
                <img src={myimg} alt='my' className='img-my'/> 

                </div>
                


     </div>
                
       
              
    
    
         `` 
               </div>
    
    {/* <div className='about-me'>
      <div className='work'> 
                <img src={work} alt="work" className='img-work' />
      <div className='work-text'><p className="work-title">FrontEnd Developer</p>
             <h4> Specializes in visually appealing, user- friendly interfaces with expertise in responsive  asthetic design, accessibility, and cross-browser compatibility.
</h4>
     </div>
   </div> */}
{/* 
  <div className='work'> 
              <img src={vision} alt="work" className='img-work' />
       <div className='work-text'><p className="work-title">Visionary</p>
             <h4> A visionary with commendable leadership qualities. Aiming to reach new heights. 
      .</h4>
      </div>
   </div>
  <div className='work'>
             <img src={tech} alt="work" className='img-work' />
        <div className='work-text'><p className="work-title">Tech Enthusiast</p>
              <h4> Love new technologies and like to explore the field of Web development,
        ..</h4></div>
  </div>
 <div className='work'>
             <img src={think} alt="work" className='img-work' />
        <div className='work-text'><p className="work-title">Problem Solver</p>
       <h4>Equipped with good analytical and problem solving skills. 
       Creative thinker and love to take up any challenges or puzzles.</h4></div>
  </div> */}

<Skills/>

        </>
      );
    }
  
