import { useEffect, useState } from 'react';

import countriesService from '../services/countries';

const useCountry = (name) => {
  const [country, setCountry] = useState('');

  useEffect(() => {
    countriesService.getCountry(name).then((response) => setCountry(response[0]));
  }, []);

  return country;
};

export default useCountry;
