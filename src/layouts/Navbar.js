import React from 'react'

import { NavLink } from 'react-router-dom'

import './Navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({ show_menu }) => {
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
                    <NavLink to="/favourites">Favourites</NavLink>
                </li>
                <li className="logout">
                    <NavLink to="/logout">Logout</NavLink>
                </li>
            </ul>
        </div >
    )
}

export default Navbar
