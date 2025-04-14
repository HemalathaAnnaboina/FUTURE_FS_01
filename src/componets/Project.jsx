import React from 'react';
import './project.css'; // Make sure to import the appropriate CSS file
import resortImg from '../assets/resort.png';
import calimg from '../assets/cal.jpg';
import todo from '../assets/todo.png';
import portfolio from '../assets/portfolio.png'
import tictac from '../assets/tictac.jpg';
import wheather from '../assets/wheather.png'


const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>Recent projects</h2>
      <p>
        Below you can see some examples of my recent work. Check out my complete{' '}
        <a href="#">portfolio</a>. Have a project you would like to discuss?{' '}
        <a href="#">Let’s make something great together!</a>
      </p>

      <div className="projects-grid-container">
        <div className="projects-grid">
          {/* Resort Website */}
          <div className="project-card">
          <img src={resortImg} alt="Resort Website" />
          <h3>Resort Website</h3>
          <p>A resort website built using HTML, CSS, and JavaScript with a responsive layout and interactive features.</p>
          <a href="#" className="btn">View project</a>
        </div>


          {/* Calculator using Python GUI */}
          <div className="project-card">
          <img src={calimg} alt="Calculator" />
          <h3>Calculator Using Python GUI</h3>
          <p>A simple calculator application built using Python's Tkinter library for the GUI.</p>
          <a href="https://github.com/HemalathaAnnaboina/python_calculator" className="btn">View project</a>
        </div>


          {/* To-Do List using Python */}
          <div className="project-card">
          <img src={todo} alt="todo_list" />
            <h3>To-Do List Using Python</h3>
            <p>A to-do list application developed in Python with file storage for saving and loading tasks.</p>
            <a href="https://github.com/HemalathaAnnaboina/tic-tac-toe" className="btn">View project</a>
          </div>

          {/* Personal Portfolio */}
          <div className="project-card">
            <img src={portfolio} alt="Personal Portfolio" />
            <h3>Personal Portfolio</h3>
            <p>A personal portfolio website built using HTML, CSS, React, and connected to a database with SQL for the contact form.</p>
            <a href="#" className="btn">View project</a>
          </div>

          {/* Tic Tac Toe Game using Python GUI */}
          <div className="project-card">
            <img src={tictac} alt="Tic Tac Toe Game" />
            <h3>Tic Tac Toe Game Using Python GUI</h3>
            <p>An interactive Tic Tac Toe game developed using Python's Tkinter library with a simple graphical interface.</p>
            <a href="https://github.com/HemalathaAnnaboina/tic-tac-toe" className="btn">View project</a>
          </div>

          {/* Weather App using HTML, CSS, React and API */}
          <div className="project-card">
            <img src={ wheather} alt="Weather App" />
            <h3>Weather App</h3>
            <p>A weather application built with React, HTML, CSS, and OpenWeather API integration for real-time data.</p>
            <a href="https://github.com/HemalathaAnnaboina/FUTURE_TRACKCODE_02" className="btn">View project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
