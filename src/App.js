import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryList from './components/CountryList/CountryList';
import Header from './components/Header/Header';
import CountryDetail from './components/CountryDetail/CountryDetail';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/:id" element={<CountryDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
