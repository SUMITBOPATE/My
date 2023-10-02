import * as React from 'react';
import "../Styles/Projects.css";
import Users from '../Info/Data.jsx';
import Info from '../Info/Info.jsx';
import Icons from './Icons';

// import img from ".images/quiz.png";

export default function Projects() {
  return (
    <>
      <div className="head-project" >
      <div className='head-name'>
     <h1> PROJECTS</h1>

        
        <p className='project-desc'>Check some of the projects I have crafted.<i  className="fa fa-github"></i></p>
         </div>
      </div>
      <div className="project-main">
        {Users.map((e) => {
          return <Info  key={e.key} name={e.name} desc={e.desc} img={e.img} code={e.code} link={e.link}/>;
        })}
       
      </div>
    </>
  );
}