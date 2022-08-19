const useFilter = (countries, region, countrySearched) => {
  const countriesByRegion = region
    ? countries.filter((country) => country.region === region)
    : countries;
  const regexSearch = new RegExp(countrySearched, 'i');
  const countriesToShow = countrySearched
    ? countriesByRegion.filter((country) => country.name.common.match(regexSearch))
    : countriesByRegion;
  return countriesToShow;
};

export default useFilter;
