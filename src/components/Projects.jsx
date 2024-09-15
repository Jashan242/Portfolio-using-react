import React from 'react'
import index from '../images/index.png'; 
import home from '../images/home.png'; 
import password from '../images/password.png';
import weather from '../images/weather.png';
import color from '../images/color.png';
import 'boxicons/css/boxicons.min.css';  

const projects = [
    {
      title: 'NoteTaker',
      technologies: 'Java, Hibernate, Maven, Servlet, JSP, MySQL, Bootstrap',
      description: 'Developed a web application that allows users to create, manage, and store notes efficiently.',
      imageUrl: index,
      link: "https://github.com/Jashandeep123/NoteTaker_WebApp"
    },
    {
      title: 'PhoneBook',
      technologies: 'Java, Hibernate, Spring MVC, Spring Security, MySQL, Bootstrap',
      description: 'Built a secure and efficient contact management system...',
      imageUrl: home,
      link: "https://tonmoysu.netlify.app/"
    },
    {
      title: 'Password Generator',
      technologies: 'HTML, CSS, JavaScript',
      description: 'A web-based application that generates strong, random passwords.',
      imageUrl: password,
      link: "https://github.com/Jashandeep123/Password-Generator"
    },
    {
      title: 'Weather App',
      technologies: 'HTML, CSS, JavaScript, React',
      description: 'A web-app that provides real-time weather information of a searched city.',
      imageUrl: weather,
      link: "https://github.com/Jashandeep123/Weather-App"
    },
    {
        title: 'Color Scheme Switcher',
        technologies: 'HTML, CSS, JavaScript',
        description: 'It allows users to change the background color of the page by clicking on colored buttons.',
        imageUrl: color,
        link: "https://github.com/Jashandeep123/Color-Changer"
      }
  ];

export default function Projects() {
  return (
    <section id="projects">
      <h1 className="header"><span>Projects</span></h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>Technologies: {project.technologies}</p>
              <p>{project.description}</p>
              <div className="social-icons">
          <a href={project.link} className='project-link' target="_blank">
            <i className="bx bxl-github" style={{ fontSize: '38px', color: '#00bfff' }}></i>
            <p>Know More</p>
          </a>
          
          </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
