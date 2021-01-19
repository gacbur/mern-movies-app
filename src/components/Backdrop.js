import React from 'react'

import './Backdrop.css'

const Backdrop = ({ show, hide_menu }) => {
    return show && <div
        className="backdrop"
        onClick={hide_menu}
    >
    </div>
}

export default Backdrop
