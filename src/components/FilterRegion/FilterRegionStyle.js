const FilterRegionStyle = {
  control: (styles) => ({
    ...styles,
    width: 200,
    minHeigth: '56px',
    border: 'none',
    boxShadow: '0 .5px 3px 1px rgba(0, 0, 0, .09)',
    paddingLeft: '16px',
    fontSize: '14px',
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
      color: isFocused ? 'black' : 'black',
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
      display: 'none',
    };
  },
  dropdownIndicator: (styles) => {
    return {
      ...styles,
      color: 'black',
      ':hover': { color: 'black', cursor: 'pointer' },
    };
  },
  menu: (styles, { isSelected }) => {
    return {
      ...styles,
      border: isSelected ? '0 !important' : '0',
      outline: isSelected ? '0 !important' : '0 !important',
      boxShadow: '0 .5px 3px 1px rgba(0, 0, 0, .09)',
      fontSize: '14px',
    };
  },
};

export default FilterRegionStyle;
