import React from 'react';
import './CountryList.css';
import Country from '../Country/Country';
import { Link } from 'react-router-dom';
import useCountries from '../../hooks/useCountries';

const CountryList = () => {
  const countries = useCountries();
  return (
    <div className="countries">
      {countries
        ? countries.map((country) => {
            return (
              <Link
                className="countries-link"
                key={country.name.common}
                to={`/${country.name.common}`}
              >
                <Country country={country} />;
              </Link>
            );
          })
        : ''}
    </div>
  );
};

export default CountryList;
