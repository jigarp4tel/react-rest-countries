import React from 'react'
import searchBtn from '../assets/search.svg'

const SearchBar = ({ handleSearch, handleFilter }) => {

    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const handleChange = (e) => {

        const { value } = e.target
        handleSearch(value)
    }

    const handleFilterChange = (e) => {
        const { value } = e.target
        handleFilter(value)
    }

    return (
        <div className="searchbar">
            <form>
                <div className="searchbox">
                    <img className="searchBtn" src={searchBtn} alt="" />
                    <input type="text" placeholder="Search for a country..." onChange={handleChange} />
                </div>
                <div className="select-wrapper">
                    <select defaultValue={'DEFAULT'} onChange={handleFilterChange}>
                        <option value="DEFAULT" disabled >Filter by region</option>
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
