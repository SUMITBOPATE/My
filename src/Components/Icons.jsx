import React from 'react'
import  '../Styles/Icons.css';

 const Icons = () => {
  return (<>
    <div className='vertical-Line'></div>
    <div className="icons-list" id='icons-color' >
      
      <hr className='hr'></hr>
     
            <a href="#">
            <i   id='git' className="fa fa-github"></i>
            </a>
            <a href="#">
           
            <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
            <i className="fa fa-linkedin-square"></i>
            </a>
          
            <hr className='hr'></hr>
          </div> <div className='vertical-Line'></div>

          </>
  )
}

export default Icons;