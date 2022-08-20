import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useCountries from '../../hooks/useCountries';

import './CountryDetail.css';

const CountryDetail = () => {
  const name = useParams().id;
  const countries = useCountries();
  const country = countries ? countries.find((country) => country.name.common === name) : '';
  const navigate = useNavigate();

  const borderCountry = (borderCountryInitials) => {
    return countries.find((country) => borderCountryInitials === country.cca3).name.common;
  };

  const countryCurrencies = (currencies) => {
    const currenciesObj = Object.entries(currencies);
    return currenciesObj.map((currency) => currency[1]['name']).join(', ');
  };

  return (
    <div>
      {country ? (
        <div className="countryDetail">
          <button className="back-button" onClick={() => navigate(-1)}>
            Back
          </button>
          <div className="countryDetail-container">
            <div className="countryDetail-flag">
              <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
            </div>
            <div className="countryDetail-info">
              <h1 className="country-name">{country.name.common}</h1>
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
                <div className="borderCountries-list">
                  <span>Border Countries:</span>
                  {country.borders.map((country) => (
                    <Link
                      key={country}
                      to={`../${borderCountry(country)}`}
                      className="countries-link"
                    >
                      <button className="borderCountry-button">{borderCountry(country)}</button>
                    </Link>
                  ))}
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
    </div>
  );
};

export default CountryDetail;
