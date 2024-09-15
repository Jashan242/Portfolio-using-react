import React, { useEffect, useState } from 'react';
import profilePic from '../images/pic.jpg';
import 'boxicons/css/boxicons.min.css'; 

export default function Home() {
  const roles = ['Fullstack Developer','Java Developer']; // Add more roles as needed
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Typing speed (in ms)
  const pauseTime = 2000;  // Pause before switching roles (in ms)

  useEffect(() => {
    const type = () => {
      if (!isDeleting && letterIndex < roles[roleIndex].length) {
        setCurrentRole((prev) => prev + roles[roleIndex].charAt(letterIndex));
        setLetterIndex((prev) => prev + 1);
      } else if (isDeleting && letterIndex > 0) {
        setCurrentRole((prev) => prev.slice(0, -1));
        setLetterIndex((prev) => prev - 1);
      } else if (!isDeleting && letterIndex === roles[roleIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && letterIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    
    return () => clearTimeout(typingTimeout);
  }, [letterIndex, isDeleting, roleIndex]);

  return (
    <section id="home">
      <div className="home-img">
        <img src={profilePic} alt="Jashandeep" />
      </div>
      <div className="info">
        <h1><span>Hello, I'm Jashan</span></h1>
        <h3>
          <span>{currentRole}</span>
          <span className="cursor">|</span> {/* Blinking cursor */}
        </h3>
        <p>A highly dedicated and motivated computer science engineering student aiming to build a career as a software developer.</p>
        <div className="social-icons">
          <a href="https://github.com/Jashandeep123" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jashandeep-kaur-535167238" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>
        <div className="btn-box">
          <div className="btn">
            <a href="/Resume.pdf" download="Resume.pdf" style={{ color: 'black' }}>
              Download CV
            </a>
          </div>
          <div className="btn">
            Contact Me
          </div>
        </div>
      </div>
    </section>
  );
}
