import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="country-links">
        <div className="logo">Where in the world?</div>
      </Link>
    </header>
  );
};

export default Header;
