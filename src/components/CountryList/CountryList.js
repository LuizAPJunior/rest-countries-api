import React from 'react';
import './CountryList.css';
import PropTypes from 'prop-types';
import Country from '../Country/Country';

const CountryList = ({ countries }) => {
  return (
    <div className="countries">
      {countries
        ? countries.map((country) => <Country key={country.name.common} country={country} />)
        : ''}
    </div>
  );
};

CountryList.propTypes = { countries: PropTypes.array.isRequired };

export default CountryList;
