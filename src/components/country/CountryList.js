import React from 'react'
import CountryCard from './CountryCard';

const CountryList = ({ countryList }) => {



    return (
        <div className="country-list-grid">
            {countryList.map(country => (
                <CountryCard key={country.name} country={country} />
            ))}
        </div>
    )
}

export default CountryList
