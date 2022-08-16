import { useEffect, useState } from 'react';

import countriesService from '../services/countries';

const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesService.getAll().then((response) => setCountries(response));
  }, []);
  return countries;
};

export default useCountries;
