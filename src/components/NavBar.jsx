import React, { useState } from 'react';
import '../navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">LOGO</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNav}>
          <span className="navbar-icon"></span>
          <span className="navbar-icon"></span>
          <span className="navbar-icon"></span>
        </div>
        <div className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
          <a href="/post-feed" className="navbar-item">Posts</a>
          <a href="/" className="navbar-item">Pricing</a>
          <a href="/" className="navbar-item">Blog</a>
        </div>
        <div className="navbar-user">
          <img src="/static/images/avatar/2.jpg" alt="User Avatar" className="navbar-avatar" />
          <div className="navbar-settings">
            <a href="/" className="navbar-item">Profile</a>
            <a href="/" className="navbar-item">Account</a>
            <a href="/" className="navbar-item">Dashboard</a>
            <a href="/" className="navbar-item">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
