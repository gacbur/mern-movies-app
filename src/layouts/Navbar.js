import React from 'react'

import { NavLink } from 'react-router-dom'

import './Navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = ({ show_menu }) => {
    return (
        <div className="navbar">
            <NavLink className="navbar__logo-link" exact to="/">
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
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li >
                    <NavLink exact to="/favourites">Favourites</NavLink>
                </li>
                <li className="logout">
                    <NavLink exact to="/logout">Logout</NavLink>
                </li>
            </ul>
        </div >
    )
}

export default Navbar
