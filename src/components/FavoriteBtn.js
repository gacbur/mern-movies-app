import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import { useDispatch } from 'react-redux'

import { addFavMovie, updateFavMovies } from '../redux/actions/favMoviesActions'


import { BsFillHeartFill } from 'react-icons/bs'


const FavoriteBtn = ({ movieId, movieInfo, }) => {

    const [inFavorite, setInFavorite] = useState(false)
    const dispatch = useDispatch()

    const movieData = {
        movieId: movieId,
        movieTitle: movieInfo.title,
        movieImage: movieInfo.backdrop_path,
        MovieRunTime: movieInfo.runtime,
    }

    useEffect(() => {

        if (inFavorite) {
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
        } else if (!inFavorite) {

            Axios.delete(`http://localhost:3001/api/movie/delete/${movieId}`)
                .then(response => {
                    dispatch(updateFavMovies(response.data))
                }).catch((err) => {
                    console.log(err)
                })
        }

    }, [inFavorite])

    return (
        <>
            <button
                onClick={() => setInFavorite(prevState => !prevState)}
            >{inFavorite ? "Delete from favorite" : "Add to favorite"} <BsFillHeartFill className="add-fav__btn" /></button>
        </>
    )
}

export default FavoriteBtn
