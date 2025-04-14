import React from "react";
import "./Home.css";
import hemaImage from "./hema1.jpg"; // Adjust name if needed

const Home = () => {
  return (
    <div className="hero">
      {/* Left Side Text */}
      <div className="text-box">
        <div className="role">Web Developer</div>
        <h1>Hi, I'm Hema</h1>
        <h5 className="subtext">
        
  I am a web developer with a passion for creating clean UIs and building functional websites. 
  I am also deeply interested in Java and Python programming.

        </h5>

        <div className="buttons">
          <a href="/projects" className="btn-yellow">Projects</a>
          <a
            href="https://www.linkedin.com/in/anneboina-hema-015947306" // Replace with your actual LinkedIn
            target="_blank"
            className="btn-outline"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="hero-img">
        <img src={hemaImage} alt="Hema" />
      </div>
    </div>
  );
};

export default Home;
