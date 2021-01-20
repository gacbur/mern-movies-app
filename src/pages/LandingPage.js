import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import MainImage from '../components/MainImage'
import MovieItem from '../components/MovieItem'

import { getMovies, resetSingleMovie } from '../redux/actions/moviesActions'

import { useDispatch, useSelector } from 'react-redux'

import './LandingPage.css'

const LandingPage = () => {

    const dispatch = useDispatch()

    const movies = useSelector(state => state.movies)
    const movies_loaded = useSelector(state => state.movies_loaded)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        const path = `${process.env.REACT_APP_API_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        fetchMovies(path)
    }, [])

    const fetchMovies = (endpoint) => {
        Axios.get(endpoint)
            .then(response => {
                console.log(response.data.page)
                dispatch(getMovies(movies, response.data.results))
                setCurrentPage(response.data.page)
            })
        dispatch(resetSingleMovie())
    }

    const handleLoadMoreMovies = () => {
        const path = `${process.env.REACT_APP_API_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage + 1}`
        fetchMovies(path)
    }

    return (
        <>
            <div className="main-image-cnt">
                {
                    movies_loaded ? <MainImage
                        image={`${process.env.REACT_APP_IMAGE_URL}w1280${movies[2].backdrop_path}`}
                        title={movies[2].original_title}
                        text={movies[2].overview}
                    /> : null
                }
            </div>
            <div className="landing-page">
                <h1>Movies</h1>
                <div className="landing-page__movies">
                    {
                        movies_loaded
                            ?
                            movies.map((item, key) => {
                                return (
                                    <MovieItem
                                        key={key}
                                        image={item.poster_path && `${process.env.REACT_APP_IMAGE_URL}w500${item.poster_path}`}
                                        id={item.id}
                                    />
                                )
                            })
                            :
                            <h2 style={{ textAlign: "center" }}>Loading...</h2>
                    }

                </div>
                <div className="landing-page__load-more">
                    <button
                        onClick={() => handleLoadMoreMovies()}
                    >
                        Load more</button>
                </div>
            </div>
        </>
    )
}

export default LandingPage
