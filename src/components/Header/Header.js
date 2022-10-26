import React, { useContext, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="header" style={{ backgroundColor: theme.elements }}>
      <Link to="/rest-countries-api" className="country-links">
        <h1 className="logo" style={{ color: theme.text }}>
          Where in the world?
        </h1>
      </Link>

      <button
        className="darkmode"
        onClick={() => {
          setDarkMode(!darkMode);
          changeTheme(!darkMode);
        }}
        style={{ backgroundColor: theme.elements, color: theme.text }}
      >
        <div className="svg-moon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill={darkMode ? theme.text : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-moon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
        <span>Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
