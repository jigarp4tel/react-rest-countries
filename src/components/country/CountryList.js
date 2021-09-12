import React from 'react'
import CountryCard from './CountryCard';

const CountryList = ({ countryList }) => {



    return (
        <main className="country-list-grid">
            {countryList.map(country => (
                <CountryCard key={country.name} country={country} />
            ))}
        </main>
    )
}

export default CountryList
