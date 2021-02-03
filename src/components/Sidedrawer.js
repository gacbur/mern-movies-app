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
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites <BsFillHeartFill className="sidedrawer__links__heart" /></Link>
                </li>
            </ul>
            <div className="sidedrawer__search-bar-cnt">
                <SearchBar width={200} />
            </div>
        </div >
    )
}

export default Sidedrawer
