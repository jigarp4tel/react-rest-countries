import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';

const CountryList = () => {

    const [countryList, setCountryList] = useState([])

    useEffect(() => {
        getAllCountries();
    })


    const getAllCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountryList(data))
    }

    const getCountry = (country) => {
        fetch(`https://restcountries.eu/rest/v2/name/${country}`)
            .then(res => res.json())
            .then(data => setCountryList(data))
    }

    return (
        <div className="country-list-grid">
            {countryList.map(country => (
                <CountryCard key={country.name} country={country} />
            ))}
        </div>
    )
}

export default CountryList
