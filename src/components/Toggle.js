import React, { useState } from 'react'
import { setTheme } from '../utils/theme';

import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

const Toggle = () => {


    const [currentTheme, setCurrentTheme] = useState(
        window.localStorage.getItem("theme") == null ? 'light' : window.localStorage.getItem("theme")
    );

    const themeSwitchHandler = () => {

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
            {(currentTheme === 'light') ? <IoMoonOutline /> : <IoMoonSharp />}
            <div>Dark Mode</div>
        </div>
    )
}

export default Toggle
