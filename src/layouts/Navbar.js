import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import SearchBar from '../components/SearchBar'

import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'

// funkcja zwracjaca searchbar jak width - 768

const Navbar = ({ show_menu }) => {

    const showSearchBar = () => {
        let width = window.innerWidth

        if (width > 768) {
            return null
        } else {
            return <SearchBar />
        }
    }

    window.addEventListener('resize', showSearchBar)

    return (
        <div className="navbar">
            <NavLink className="navbar__logo-link" to="/" exact>
                <div className="navbar__logo">
                    <h3>
                        Movies App
                    </h3>
                </div>
            </NavLink>
            <button
                className="navbar__hamburger"><GiHamburgerMenu
                    onClick={show_menu}
                />
            </button>
            <ul className="navbar__links">
                <li>
                    <NavLink to="/favorites">Favorites</NavLink>
                </li>
            </ul>
            {showSearchBar()}
        </div >
    )
}

export default Navbar
