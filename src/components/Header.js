import React from 'react';
import '../styles/Header.css'

const Header = () => {
  return (
    
    <div className="container gradient-background">
          <h1 className='logo animated-logo'>FilmBucket</h1>
          <nav className="links">
                <a href="/#" className="nav-link">Link</a>
                <a href="/#" className="nav-link">Link</a>
                <a href="/#" className="nav-link">Link</a>
          </nav>
          <div className="search-bar">
              <input type="text" placeholder="Search" />
          </div>
    </div>
    
  );
};

export default Header;
