import React from 'react';
//import Country from './components/Country/Country';
import CountryList from './components/CountryList/CountryList';
import Header from './components/Header/Header';
import useCountries from './hooks/useCountries';

const App = () => {
  const countries = useCountries();

  console.log(countries[0]);

  return (
    <div className="App">
      <Header />
      <main>
        <CountryList countries={countries} />
      </main>
      {/* {countries[0] ? <Country country={countries[0]} /> : ''} */}
    </div>
  );
};

export default App;
