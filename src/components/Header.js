import React from 'react'
import Toggle from './Toggle'
import { Link } from 'react-router-dom'

const Header = () => {


    return (
        <header>
            <div className="nav">
                <h1><Link to="/" className="logo">Where in the world?</Link></h1>
                <Toggle />
            </div>
        </header>
    )
}

export default Header
