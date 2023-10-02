import React from 'react';
import "../Styles/Projects.css";
import "../Info/Data"

const Info = (props) => {
  return (
    <>
    <div className="card">
    <div className="card-details">
      <div className='card-image-detail' >
      <img   className='img-card' alt="img" src={props.img}/>
     
      <div className="overlay">
      <div className='text' id="text-name">
    
      <a href={props.code}> <i  id="project-code" className="fa fa-github" ></i></a></div>
     </div>
     <div className='project-name'>{props.name}</div>
     <div className='project-info'>{props.desc}</div>
      {/* <div className="overlay">
      <div className='text' id="text-name">
      <i className="fa fa-eye"></i>&nbsp;
       <i   className="fa fa-github "></i></div>
     </div> */}
     
      </div>
      {/* <p className="text-body"> {props.desc}</p> */}
    
    </div>
    <div className="line-btn">
    {/* <button className="card-button" id="btn-1">View Code{props.code}</button> */}
   <button className='card-button'><a href={props.link}>
    Live</a></button>
    </div>
  </div>
  
  </>
  )
}

export default Info;


  