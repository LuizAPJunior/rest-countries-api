import React from 'react';
import PropTypes from 'prop-types';

const FilterRegion = ({ setRegion, region }) => {
  return (
    <select
      name="regions"
      id="regions-select"
      value={region}
      onChange={(event) => setRegion(event.target.value)}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

FilterRegion.propTypes = {
  setRegion: PropTypes.func.isRequired,
  region: PropTypes.string.isRequired,
};

export default FilterRegion;
