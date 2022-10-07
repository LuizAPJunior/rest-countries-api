import React, { useState } from 'react';
import { ThemeContext, themes } from '../../context/ThemeContext';
import PropTypes from 'prop-types';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.ligth);

  const changeTheme = (value) => {
    if (value) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.ligth);
    }
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
    </>
  );
};

ThemeProvider.propTypes = { children: PropTypes.element.isRequired };
