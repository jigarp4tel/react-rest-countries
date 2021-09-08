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
            let response = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
            let data = await response.json()

            setCountry(data)
            data[0].borders.map(border => (
                getBorderCountries(border)
            ))
        }

        setBorderCountries([])
        getCountry();

    }, [name])



    const getBorderCountries = async (code) => {
        let response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
        let data = await response.json()
        setBorderCountries(borderCountry => [...borderCountry, data.name])
    }



    return (

        <div className="country-details-container">
            <Link to="/" className="back-btn btn"><IoArrowBack /><span>Back</span></Link>

            {country &&

                <div className="country-details-wrapper">
                    <div className="flag-wrapper">
                        <img src={country[0].flag} alt="" />
                    </div>
                    <div className="country-details">
                        <h2>{country[0].name}</h2>

                        <div className="country-details-info">
                            <div>
                                <div className="country-card-info-stats"><span className="bold">Native Name: </span><span>{country[0].nativeName}</span></div>
                                <div className="country-card-info-stats"><span className="bold">Population: </span><span>{country[0].population.toLocaleString()}</span></div>
                                <div className="country-card-info-stats"><span className="bold">Region: </span><span>{country[0].region}</span></div>
                                <div className="country-card-info-stats"><span className="bold">Sub Region: </span><span>{country[0].subregion}</span></div>
                                <div className="country-card-info-stats"><span className="bold">Capital: </span><span>{country[0].capital}</span></div>
                            </div>
                            <div>
                                <div className="country-card-info-stats"><span className="bold">Top Level Domain: </span><span>{country[0].topLevelDomain}</span></div>
                                <div className="country-card-info-stats"><span className="bold">Currencies: </span><span>{country[0].currencies[0].name}</span>
                                </div>
                                <div className="country-card-info-stats"><span className="bold">Languages: </span>
                                    {
                                        country[0].languages.map((language, id) => (
                                            <span key={language.name}>{(id ? ', ' : '') + language.name}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="border-countries"><span className="bold">Border Countries: </span>
                            {
                                borderCountries.map(border => (
                                    <Link to={`/country/${border}`} key={border} className="border-btn btn">{border}</Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </div>




    )
}

export default CountryDetails
