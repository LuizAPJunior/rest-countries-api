import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { ThemeContext } from '../../context/ThemeContext';

const options = [
  { value: '', label: 'Filter By Region' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const FilterRegion = ({ setRegion }) => {
  const { theme } = useContext(ThemeContext);

  const handleChange = (selectedOption) => {
    setRegion(selectedOption.value);
  };

  return (
    <Select
      styles={{
        control: (styles, { isFocused }) => ({
          ...styles,
          width: 200,
          minHeigth: '56px',
          border: 'none',
          boxShadow: '0 .5px 3px 1px rgba(0, 0, 0, .09)',
          paddingLeft: '16px',
          fontSize: '14px',
          backgroundColor: theme.elements,
          outline: isFocused ? `1px solid ${theme.text}` : 'none',
        }),
        indicatorsContainer: (provided) => {
          return {
            ...provided,
            height: '56px',
            paddingRight: '8px',
          };
        },
        option: (styles, { isSelected, isFocused }) => {
          return {
            ...styles,
            display: isSelected ? 'none' : 'block',
            paddingLeft: '24px',
            overflowY: 'hidden',
            color: isFocused ? theme.text : theme.text,
            ':hover': { backgroundColor: theme.background },
            ':not(:hover)': { backgroundColor: theme.elements },
          };
        },
        indicatorSeparator: (styles) => {
          return {
            ...styles,
            display: 'none',
          };
        },
        input: (styles) => {
          return {
            ...styles,
            caretColor: 'transparent',
          };
        },
        dropdownIndicator: (styles) => {
          return {
            ...styles,
            color: theme.text,
            ':hover': { color: theme.text, cursor: 'pointer' },
          };
        },
        menu: (styles, { isSelected }) => {
          return {
            ...styles,
            maxWidth: 200,
            border: isSelected ? '0 !important' : '0',
            outline: isSelected ? '0 !important' : '0 !important',
            boxShadow: '0 .5px 3px 1px rgba(0, 0, 0, .09)',
            fontSize: '14px',
            backgroundColor: theme.elements,
            color: theme.text,
          };
        },
        singleValue: (styles) => {
          return {
            ...styles,
            color: theme.text,
          };
        },
      }}
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
