import React from 'react';
import '../Styles/Skills.css';
import Icons from './Icons';
export default function Skills() {
  return (
    <>
      <div className="skill-main">
      <div className="about__content-skills">
            <div className="about__content-title">What I  <p>&nbsp;know</p>
            {/* <div className="content-title">what i know</div> */}
            </div>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              {/* <div className="skills__skill">SASS</div> */}
              <div className="skills__skill">GIT</div>
             
              <div className="skills__skill">Java</div>
              <div className="skills__skill">SQL</div>
              <div className="skills__skill">DSA</div>
              <div className="skills__skill">Algorithms</div>
              {/* <div className="skills__skill">IOS</div> */}
            </div>
            
          </div>
      </div>
    </>
  );
}
