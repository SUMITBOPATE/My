import React from 'react';
import '../Styles/Footer.css';
import "@fortawesome/free-regular-svg-icons";
import cartoon  from "/assets/cartoon2.png"

export default function Footer() {
  return (
    <>
    <section id="footer" className="footer">
      <div className='contact-heading'><h1>Contact me</h1>
 
  <span><img src={cartoon} className="footer-img"/></span></div>
  <h3 className="title">
    Get in Touch 💭
  </h3>
  <p className="description">
  Got a cool project or job opportunity?<br></br>
  "I'm ready to dive into new projects and challenges and join you.<br></br>
   If you're looking for someone to bring your ideas to life,
    you've come to the right place. <br></br>
    Reach out to me at <sapn className='bold-footer' >sumitbopate888name@gmail.com</sapn> and 
  let's create something awesome!"😎
  </p>


  < div className="copyright">
    <span className="footer-text">
      <p className='bold-footer'><h1> &nbsp;   Sumit Bopate</h1></p><br></br>
      &copy;  2023 - Designed and Built by Sumit Bopate &nbsp;🚀
    </span>
    
    <div className="social-media-links">
   <span>Linkedin 🡥</span>
   <span>Twitter 🡥</span>
   <span>Github 🡥</span>
  </div>
  </div>
  
</section>
<hr className='section-line'></hr>
     </>
  );
}