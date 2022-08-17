import React, { useState } from 'react';
import './CountryList.css';
import Country from '../Country/Country';
import { Link } from 'react-router-dom';
import useCountries from '../../hooks/useCountries';
import useFilter from '../../hooks/useFilter';
import FilterCountry from '../FilterCountry/FilterCountry';
import FilterRegion from '../FilterRegion/FilterRegion';

const CountryList = () => {
  const [region, setRegion] = useState('');
  const [searchCountry, setSearchCountry] = useState('');
  const allCountries = useCountries();

  const countries = allCountries ? useFilter(allCountries, region, searchCountry) : '';
  return (
    <div className="countries">
      <div className="countries-filter">
        <FilterCountry setSearchCountry={setSearchCountry} />
        <FilterRegion setRegion={setRegion} region={region} />
      </div>
      <div className="countries-list">
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
    </div>
  );
};

export default CountryList;
