import React from 'react'

const CountryCard = ({ country }) => {
    const { flag, name, population, region, capital } = country

    return (
        <div className="country-card">
            <div className="country-card-flag">
                <img src={flag} alt="flag" />
            </div>
            <div className='country-card-info'>
                <h3 className="country-card-info-title">{name}</h3>
                <div className="country-card-info-stats"><span className="bold">Population: </span><span>{population.toLocaleString()}</span></div>
                <div className="country-card-info-stats"><span className="bold">Region: </span><span>{region}</span></div>
                <div className="country-card-info-stats"><span className="bold">Capital: </span><span>{capital}</span></div>
            </div>
        </div>
    )
}

export default CountryCard