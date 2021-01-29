import React from 'react'

import { Link } from 'react-router-dom'

import { BsFillHeartFill } from 'react-icons/bs'

import SearchBar from '../components/SearchBar'

import './Sidedrawer.css'

const Sidedrawer = ({ show, hide_menu }) => {
    return (
        <div className={`sidedrawer ${show ? 'show' : ''}`}>
            <ul className="sidedrawer__links" onClick={hide_menu}>
                <li>
                    <Link exact to="/">Home</Link>
                </li>
                <li>
                    <Link exact to="/favorites">Favorites <BsFillHeartFill className="sidedrawer__links__heart" /></Link>
                </li>
            </ul>
            <SearchBar />
        </div >
    )
}

export default Sidedrawer
