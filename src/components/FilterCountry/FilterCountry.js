import React, { useContext, useEffect } from 'react';
import useField from '../../hooks/useField';
import PropTypes from 'prop-types';
import './FilterCountry.css';
import { ThemeContext } from '../../context/ThemeContext';
import { useLocation } from 'react-router-dom';

const FilterCountry = ({ setSearchCountry }) => {
  const filterCountry = useField('search');
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    setSearchCountry(filterCountry.value);
  }, [filterCountry.value]);

  useEffect(() => {
    if (theme.input === 'hsl(var(--white))' && location.pathname === '/rest-countries-api') {
      document.querySelector('label').style.setProperty('--inputFocus', '0 0% 100%');
      document.querySelector('input[type=search]').style.setProperty('--placeholder', '0 0% 100%');
    }
    if (theme.input === 'hsl(var(--dark-gray))' && location.pathname === '/rest-countries-api') {
      document.querySelector('label').style.setProperty('--inputFocus', '200 15% 8%');
      document.querySelector('input[type=search]').style.setProperty('--placeholder', '0 0% 52%');
    }
  }, [theme.input]);

  return (
    <div className="search-icon">
      <label
        style={{
          backgroundColor: theme.elements,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={theme.input}
          viewBox="0 -8 56 56"
          height="28"
          width="28"
        >
          <path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" />
        </svg>
        <input
          {...filterCountry}
          placeholder="Search for a country..."
          style={{
            backgroundColor: theme.elements,
            color: theme.text,
          }}
        />
      </label>
    </div>
  );
};

FilterCountry.propTypes = { setSearchCountry: PropTypes.func.isRequired };

export default FilterCountry;
