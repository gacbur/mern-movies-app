import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

import SearchBar from '../components/SearchBar'

import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({ show_menu }) => {

    const [show, setShow] = useState()

    const navbarEl = useRef(null)

    useEffect(() => {
        const showSearchBar = () => {
            if (navbarEl.current.clientWidth >= 768) {
                setShow(true)
            } else {
                setShow(false)
            }
        }

        showSearchBar()
        window.addEventListener('resize', showSearchBar)
    }, [navbarEl])

    return (
        <div className="navbar" ref={navbarEl}>
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
            <div
                className={`links__search-bar-cnt ${show ? '' : 'hide'}`}>
                <SearchBar width={300} />
            </div>
        </div >
    )
}

export default Navbar
