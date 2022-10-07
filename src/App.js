import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryList from './components/CountryList/CountryList';
import Header from './components/Header/Header';
import CountryDetail from './components/CountryDetail/CountryDetail';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" style={{ backgroundColor: theme.background, color: theme.text }}>
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
