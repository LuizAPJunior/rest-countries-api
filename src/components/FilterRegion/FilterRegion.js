import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import FilterRegionStyle from './FilterRegionStyle';

const options = [
  { value: '', label: 'Filter By Region' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const FilterRegion = ({ setRegion }) => {
  const handleChange = (selectedOption) => {
    setRegion(selectedOption.value);
  };

  return (
    <Select
      styles={FilterRegionStyle}
      defaultValue={options[0]}
      onChange={handleChange}
      options={options}
    />
  );
};

FilterRegion.propTypes = {
  setRegion: PropTypes.func.isRequired,
};

export default FilterRegion;
