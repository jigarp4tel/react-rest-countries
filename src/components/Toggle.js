import React, { useState } from 'react'
import { setTheme } from '../utils/theme';
import moonlight from '../assets/moon-light.svg';
import moondark from '../assets/moon-dark.svg';

const Toggle = () => {


    const [currentTheme, setCurrentTheme] = useState(
        window.localStorage.getItem("theme") == null ? 'light' : window.localStorage.getItem("theme")
    );

    const themeSwitchHandler = () => {
        console.log('trigger')
        if (localStorage.getItem('theme') === 'dark') {
            setCurrentTheme('light');
            setTheme('light')
        } else {
            setCurrentTheme('dark');
            setTheme('dark')
        }

    }

    return (
        <div className="theme-switcher" onClick={() => themeSwitchHandler()}>
            <img src={(currentTheme === 'light') ? moonlight : moondark} alt="" />
            <div>Dark Mode</div>
        </div>
    )
}

export default Toggle
