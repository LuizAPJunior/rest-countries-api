import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Country.css';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const Country = ({ country }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link className="countries-link" to={`/rest-countries-api/${country.name.common}`}>
      <div className="country" style={{ backgroundColor: theme.elements, color: theme.text }}>
        <img
          className="country-flag"
          src={country.flags.png}
          alt={`flag of ${country.name.common}`}
        />
        <div className="country-info">
          <h3 className="country-name">{country.name.common}</h3>
          <div>
            <span>Population:</span> {country.population.toLocaleString()}
          </div>
          <div>
            <span>Region: </span> {country.region}
          </div>
          <div>
            <span>Capital:</span> {country.capital}
          </div>
        </div>
      </div>
    </Link>
  );
};

Country.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Country;
