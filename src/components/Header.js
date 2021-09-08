import React from 'react'
import Toggle from './Toggle'
import { Link } from 'react-router-dom'

const Header = () => {


    return (
        <header>
            <nav>
                <Link to="/" className="logo">Where in the world?</Link>
                <Toggle />
            </nav>
        </header>
    )
}

export default Header
