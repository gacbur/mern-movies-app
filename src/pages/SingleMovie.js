import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import MainImage from '../components/MainImage'
import FavoriteBtn from '../components/FavoriteBtn'

import { useDispatch, useSelector } from 'react-redux'

import { getSingleMovie } from '../redux/actions/moviesActions'

import './SingleMovie.css'

const SingleMovie = (props) => {

    const dispatch = useDispatch()

    const singleMovieId = props.match.params.id

    const [ratingColor, setRatingColor] = useState()

    useEffect(() => {

        Axios.get(`${process.env.REACT_APP_API_URL}movie/${singleMovieId}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.data)
            .then(movieItem => {
                dispatch(getSingleMovie(movieItem))
            }).catch(err =>
                console.log("Failed getting single movie item" + err)
            )
        // nie do konca potrzebne
    }, [singleMovieId, dispatch])



    const singleMovie = useSelector(state => state.movies.singleMovie)
    const singleMovie_loaded = useSelector(state => state.movies.singleMovie_loaded)

    const {
        adult,
        title,
        overview,
        original_language,
        poster_path,
        release_date,
        status,
        vote_average,
    } = singleMovie

    useEffect(() => {
        const getRatingColor = () => {
            if (vote_average > 0 && vote_average <= 2.5) {
                setRatingColor("#d6544b")
            }
            else if (vote_average > 2.5 && vote_average <= 5) {
                setRatingColor("#ffa929")
            }
            else if (vote_average > 5 && vote_average <= 6.8) {
                setRatingColor("#d4cd55")
            }
            else if (vote_average > 6.8 && vote_average <= 10) {
                setRatingColor("#3ed664")
            }
        }
        getRatingColor()
    }, [singleMovie_loaded, vote_average])

    return (
        <>
            {
                singleMovie_loaded ?
                    <>
                        <div className="single-movie__main-image">
                            <MainImage image={`${process.env.REACT_APP_IMAGE_URL}w1280${singleMovie.backdrop_path}`} />
                        </div>
                        <div className="single-movie">
                            <div className="single-movie__add-fav">
                                <h1>{title}</h1>
                                <FavoriteBtn
                                    movieId={singleMovieId}
                                    movieInfo={singleMovie}
                                    moviePoster={poster_path}
                                />
                            </div>
                            <div className="single-movie__full-description">
                                <div className="full-description__img">
                                    <img src={`${process.env.REACT_APP_IMAGE_URL}w500${poster_path}`} alt="" />
                                </div>
                                <div className="full-description__desc">
                                    <p><strong>Description: </strong>{overview}</p>
                                    <p><strong>Original language: </strong>{original_language}</p>
                                    <p><strong>Release date: </strong>{release_date}</p>
                                    <p><strong>Status: </strong>{status}</p>
                                    <div className="desc__avg-rating"><p><strong>Average Rating: </strong><div style={{ backgroundColor: ratingColor }} className="avg-rating__icon">{vote_average}</div></p></div>
                                    <p><strong>Genre: </strong>{singleMovie.genres ? singleMovie.genres[0].name : 'no data... Sorry'}</p>
                                    <p><strong>Age: </strong>{adult ? '18+' : 'below 18'}</p>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div>Loading...</div>
            }
        </>
    )
}

export default SingleMovie
