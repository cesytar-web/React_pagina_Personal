import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header">
      <span>Header</span>
      <div>
        <span>
          <Link to="/">home</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        <span>
          <Link to="/about">about</Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;
