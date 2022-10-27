import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useCountries from '../../hooks/useCountries';
import './CountryDetail.css';
import { ThemeContext } from '../../context/ThemeContext';

const CountryDetail = () => {
  const name = useParams().id;
  const countries = useCountries();
  const country = countries ? countries.find((country) => country.name.common === name) : '';
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const borderCountry = (borderCountryInitials) => {
    return countries.find((country) => borderCountryInitials === country.cca3).name.common;
  };

  const countryCurrencies = (currencies) => {
    const currenciesObj = Object.entries(currencies);
    return currenciesObj.map((currency) => currency[1]['name']).join(', ');
  };

  const borderCountryLink = (borderCountry) => {
    navigate(`/${borderCountry}`);
  };

  return (
    <>
      {country ? (
        <div className="countryDetail">
          <button
            className="back-button"
            onClick={() => navigate(-1)}
            style={{ backgroundColor: theme.elements, color: theme.text }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={theme.text}
              viewBox=" 0 0 48 48"
              height="20"
              width="16"
            >
              <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z" />
            </svg>
            Back
          </button>
          <div className="countryDetail-container">
            <div className="countryDetail-flag">
              <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
            </div>
            <div className="countryDetail-info">
              <h2 className="country-name">{country.name.common}</h2>
              <div className="countryDetail-info-col">
                <div className="countryDetail-info-item">
                  <p>
                    <span>Native Name: </span>
                    {
                      country.name.nativeName[
                        Object.keys(country.name.nativeName)[
                          Object.keys(country.name.nativeName).length - 1
                        ]
                      ]['common']
                    }
                  </p>
                  <p>
                    <span>Population: </span> {country.population.toLocaleString()}
                  </p>
                  <p>
                    <span>Region: </span> {country.region}
                  </p>
                  <p>
                    <span>Sub Region: </span>
                    {country.subregion}
                  </p>
                  <p>
                    <span>Capital: </span> {country.capital}
                  </p>
                </div>
                <div className="countryDetail-info-item">
                  <p>
                    <span>Top Level Domain: </span> {country.tld}
                  </p>
                  <p>
                    <span>Currencies: </span>
                    {countryCurrencies(country.currencies)}
                  </p>
                  <p>
                    <span>Languages:</span> {Object.values(country.languages).join(', ')}
                  </p>
                </div>
              </div>
              {country.borders ? (
                <div className="borderCountries-container">
                  <p id="borderCountries-header">Border Countries:</p>
                  <div className="borderCountries-list">
                    {country.borders.map((country) => (
                      <button
                        key={country}
                        type="button"
                        onClick={() => borderCountryLink(borderCountry(country))}
                        className="borderCountry-button"
                        style={{ backgroundColor: theme.elements, color: theme.text }}
                      >
                        {borderCountry(country)}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default CountryDetail;
