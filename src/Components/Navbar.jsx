import React, { useState } from 'react';
import '../Styles/Navbar.css';
function Navbar() {
  // Define a state variable to track whether the menu is active or not
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="logo">
            sumit bopate
          </a>
          <button className="nav-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`menu-items ${isMenuActive ? 'active' : ''}`}>
            <li>
              <a href="#">Home</a>
            </li>
          
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
