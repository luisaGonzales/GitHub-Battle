import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header>
      <ul className="main-nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/battle">Battle</NavLink></li>
        <li><NavLink to="/popular">Popular</NavLink></li>
      </ul>    
    </header>
  );
  
  export default Header;