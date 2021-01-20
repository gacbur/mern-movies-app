import React from 'react'

import './MainImage.css'

const MainImage = ({ image, title, text }) => {
    return (
        <div className='main-image'>
            <img className="main-image__img" src={`${image}`} alt=""></img>
        </div>
    )
}

export default MainImage
