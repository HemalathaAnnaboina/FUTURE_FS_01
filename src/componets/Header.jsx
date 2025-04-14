// Header.jsx
import React from 'react';
import './header.css'; // Import the CSS for styling

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>Hema latha</h1>  {/* Replace with your logo text */}
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      
        <a href="/skills">Skills</a>
      </nav>
    </header>
  );
}

export default Header;
