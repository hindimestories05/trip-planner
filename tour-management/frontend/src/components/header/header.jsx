import React from 'react';

import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">
        <a id='logo' href='/'><h2 id='title-web'>ItineraryPlanner</h2></a>
      </div>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/tours">Tour</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="buttons">
        <button><a href='/login'>Login</a></button>
        <button><a href='/register'>Register</a></button>
      </div>
    </header>
  );
}

export default Header;
