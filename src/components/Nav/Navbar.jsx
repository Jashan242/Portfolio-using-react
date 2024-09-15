import React, { useState } from 'react'
import './nav.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);  // Ensure menuOpen is initialized as false

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <a href="#home" className="logo">
        <span>&nbsp; Jashandeep Kaur &nbsp;</span>
      </a>
      <ul className={`links ${menuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </ul>
      <i className="bx bx-menu-alt-right" id="menu" onClick={toggleMenu}></i>
    </nav>
  );
}
