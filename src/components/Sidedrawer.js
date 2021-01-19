import React from 'react'

import { Link } from 'react-router-dom'

import { BsFillHeartFill } from 'react-icons/bs'

import './Sidedrawer.css'

const Sidedrawer = ({ show, hide_menu }) => {
    return (
        <div className={`sidedrawer ${show ? 'show' : ''}`}>
            <ul className="sidedrawer__links" onClick={hide_menu}>
                <li>
                    <Link exact to="/">Home</Link>
                </li>
                <li>
                    <Link exact to="/login">Favourites <BsFillHeartFill className="sidedrawer__links__heart" /></Link>
                </li>
                <li>
                    <Link exact to="/register">Logout</Link>
                </li>
            </ul>
        </div >
    )
}

export default Sidedrawer
