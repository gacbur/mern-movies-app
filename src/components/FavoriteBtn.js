import React from 'react'
import Axios from 'axios'

import { useDispatch } from 'react-redux'

import { addFavMovie } from '../redux/actions/favMoviesActions'

import { BsFillHeartFill } from 'react-icons/bs'


const FavoriteBtn = ({ movieId, movieInfo, }) => {

    const dispatch = useDispatch()

    const movieData = {
        movieId: movieId,
        movieTitle: movieInfo.title,
        movieImage: movieInfo.backdrop_path,
        MovieRunTime: movieInfo.runtime,
    }

    const handleAddFavMovie = () => {
        Axios.post('http://localhost:3001/api/movie/addFavMovie',
            {
                movieId: movieData.movieId,
                movieTitle: movieData.movieTitle,
                movieImage: movieData.movieImage,
                MovieRunTime: movieData.MovieRunTime
            }
        ).then((response) => {

            const favMovieItem = {
                _id: response.data._id,
                movieId: movieData.movieId,
                movieTitle: movieData.movieTitle,
                movieImage: movieData.movieImage,
                MovieRunTime: movieData.MovieRunTime
            }

            dispatch(addFavMovie(favMovieItem))
        }).catch(() => {
            alert('it did not worked')
        })
    }

    return (
        <>
            <button
                onClick={handleAddFavMovie}
            >Add to fav <BsFillHeartFill className="add-fav__btn" /></button>
        </>
    )
}

export default FavoriteBtn
