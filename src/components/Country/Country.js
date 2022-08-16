import React from 'react';
import PropTypes from 'prop-types';
import './Country.css';

const Country = ({ country }) => {
  return (
    <div className="country">
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
  );
};

Country.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Country;
