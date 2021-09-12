import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

const CountryDetails = () => {

    const { name } = useParams();

    const [country, setCountry] = useState(null);
    const [borderCountries, setBorderCountries] = useState([]);

    useEffect(() => {

        const getCountry = async () => {
            let response = await fetch(`https://restcountries.eu/rest/v2/alpha/${name}`)
            let data = await response.json()
            setCountry(data)
            data.borders.map(border => (
                getBorderCountries(border)
            ))
        }

        setBorderCountries([])
        getCountry();

    }, [name])



    const getBorderCountries = async (code) => {
        let response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
        let data = await response.json()
        setBorderCountries(borderCountry => [...borderCountry, data])
    }





    return (

        <main className="country-details-container">
            <Link to="/" className="back-btn btn"><IoArrowBack /><span>Back</span></Link>

            {country &&

                <div className="country-details-wrapper">
                    <div className="flag-wrapper">
                        <img src={country.flag} alt="" />
                    </div>
                    <div className="country-details">
                        <h2>{country.name}</h2>

                        <div className="country-details-info">
                            <div>
                                <div className="country-card-info-stats"><span className="bold">Native Name: </span><span>{country.nativeName}</span></div>
                                <div className="country-card-info-stats"><span className="bold">Population: </span><span>{country.population.toLocaleString()}</span></div>
                                <div className="country-card-info-stats"><span className="bold">Region: </span><span>{country.region}</span></div>
                                <div className="country-card-info-stats"><span className="bold">Sub Region: </span><span>{country.subregion}</span></div>
                                <div className="country-card-info-stats"><span className="bold">Capital: </span><span>{country.capital}</span></div>
                            </div>
                            <div>
                                <div className="country-card-info-stats"><span className="bold">Top Level Domain: </span><span>{country.topLevelDomain}</span></div>
                                <div className="country-card-info-stats"><span className="bold">Currencies: </span><span>{country.currencies.name}</span>
                                </div>
                                <div className="country-card-info-stats"><span className="bold">Languages: </span>
                                    {
                                        country.languages.map((language, id) => (
                                            <span key={language.name}>{(id ? ', ' : '') + language.name}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="border-countries"><span className="bold">Border Countries: </span>
                            {
                                borderCountries.map(border => (
                                    <Link to={`/country/${border.alpha3Code}`} key={border.alpha3Code} className="border-btn btn">{border.name}</Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </main>




    )
}

export default CountryDetails
