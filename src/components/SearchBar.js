import React, { useState } from 'react'

import { IoSearch, IoChevronDown, IoChevronUp } from "react-icons/io5";

const SearchBar = ({ handleSearch, handleFilter }) => {

    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const [isListOpen, setIsListOpen] = useState(false);
    const [regionValue, setRegionValue] = useState('Filter by Region')

    const handleChange = (e) => {

        const { value } = e.target
        handleSearch(value)
    }


    const toggleDropdown = () => {
        setIsListOpen(!isListOpen)
    }

    const handleRegionChange = (region) => {
        setRegionValue(region)
        toggleDropdown()
        handleFilter(region)
    }

    return (
        <div className="searchbar">
            <div className="form" >
                <div className="searchbox">
                    <IoSearch />
                    <input type="text" placeholder="Search for a country..." onChange={handleChange} />
                </div>
                <div className="dropdown">
                    <div className="dropdown-title" onClick={toggleDropdown}>
                        {regionValue}
                        {
                            isListOpen ? <IoChevronUp /> : <IoChevronDown />
                        }
                    </div>
                    {isListOpen &&
                        <ul>
                            {
                                regions.map(region => (
                                    <li key={region} onClick={() => handleRegionChange(region)}>{region}</li>
                                ))
                            }
                        </ul>}
                </div>
            </div>
        </div>
    )
}

export default SearchBar
