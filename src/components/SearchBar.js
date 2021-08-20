import React from 'react'
import searchBtn from '../assets/search.svg'

const SearchBar = () => {

    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    return (
        <div className="searchbar">
            <form>
                <div className="searchbox">
                    <img className="searchBtn" src={searchBtn} alt="" />
                    <input type="text" placeholder="Search for a country..." />
                </div>
                <div className="select-wrapper">
                    <select>
                        <option value="" disabled selected>Filter by region</option>
                        {regions.map(region => (
                            <option key={region} value={region} >{region}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
