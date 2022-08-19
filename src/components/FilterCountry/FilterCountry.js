import React, { useEffect } from 'react';
import useField from '../../hooks/useField';
import PropTypes from 'prop-types';
import './FilterCountry.css';

const FilterCountry = ({ setSearchCountry }) => {
  const filterCountry = useField('search');
  useEffect(() => {
    setSearchCountry(filterCountry.value);
  }, [filterCountry.value]);

  return <input {...filterCountry} placeholder="Search for a country..." />;
};

FilterCountry.propTypes = { setSearchCountry: PropTypes.func.isRequired };

export default FilterCountry;
