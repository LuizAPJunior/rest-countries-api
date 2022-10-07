import React, { useState, useContext } from 'react';
import './CountryList.css';
import Country from '../Country/Country';
import useCountries from '../../hooks/useCountries';
import useFilter from '../../hooks/useFilter';
import FilterCountry from '../FilterCountry/FilterCountry';
import FilterRegion from '../FilterRegion/FilterRegion';
import { ThemeContext } from '../../context/ThemeContext';

const CountryList = () => {
  const [region, setRegion] = useState('');
  const [searchCountry, setSearchCountry] = useState('');
  const allCountries = useCountries();
  const countries = allCountries ? useFilter(allCountries, region, searchCountry) : '';
  const { theme } = useContext(ThemeContext);

  return (
    <div className="countries">
      <div className="countries-filter">
        <FilterCountry setSearchCountry={setSearchCountry} />
        <FilterRegion setRegion={setRegion} />
      </div>
      <div className="countries-list">
        {countries
          ? countries.map((country) => {
              return (
                <Country
                  key={country.name.common}
                  style={{ color: theme.text }}
                  country={country}
                />
              );
            })
          : ''}
      </div>
    </div>
  );
};

export default CountryList;
