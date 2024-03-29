import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

import { getMovies, getMoviesError, moviesLoading, moviesFailed, getGenres, pickGenres } from '../../redux/actions/genresActions'

import MovieItem from '../../components/movieItem/MovieItem'
import Loading from '../../components/loading/Loading'
import GoUpButton from '../../components/goUpButton/GoUpButton'

import { Element } from 'react-scroll'

import './Genres.css'

const Genres = () => {

    const dispatch = useDispatch()

    const [loadMorePages, setLoadMorePages] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)

    const moviesByGenre = useSelector(state => state.genres.moviesByGenre)
    const moviesByGenre_error = useSelector(state => state.genres.moviesByGenre_error)
    const movies_loading = useSelector(state => state.genres.moviesByGenre_loading)
    const movies_failed = useSelector(state => state.genres.moviesByGenre_failed)
    const genres = useSelector(state => state.genres.genres)
    const pickedGenres = useSelector(state => state.genres.pickedGenres)

    useEffect(() => {
        const getGenresData = async () => {
            const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
            try {
                const results = await axios.get(URL)
                const genres = await results.data.genres
                dispatch(getGenres([...genres]))
            } catch (e) { console.log(e) }
        }
        getGenresData()
    }, [dispatch])

    const handleGenres = (genreId) => {
        const isInGenres = pickedGenres.find(Id => Id === genreId)
        isInGenres ?
            dispatch(pickGenres([...pickedGenres.filter(Id => Id !== genreId)]))
            :
            dispatch(pickGenres([...pickedGenres, genreId]))
    }

    useEffect(() => {
        const getMoviesData = async () => {
            const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
            dispatch(moviesLoading(true))
            dispatch(getMoviesError(false))
            try {
                const results = await axios.get(URL, { params: { page: loadMorePages, with_genres: String(pickedGenres) } })
                const data = await results.data
                data.total_pages > 1 ?
                    setHasNextPage(true)
                    :
                    setHasNextPage(false)
                dispatch(getMovies([...data.results]))
                dispatch(moviesLoading(false))
                if (data.results.length === 0) {
                    dispatch(moviesFailed(true))
                }
            } catch (e) {
                console.log(e)
                dispatch(moviesLoading(false))
                dispatch(getMoviesError(true))
            }
        }
        getMoviesData()
    }, [pickedGenres])

    useEffect(() => {
        const getMoviesData = async () => {
            const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
            dispatch(moviesLoading(true))
            dispatch(moviesFailed(false))
            try {
                const results = await axios.get(URL, { params: { page: loadMorePages, with_genres: pickedGenres } })
                const data = await results.data.results
                dispatch(getMovies([...moviesByGenre, ...data]))
                dispatch(moviesLoading(false))
                data.length === 0 && dispatch(moviesFailed(true))
            } catch (e) {
                console.log(e)
                dispatch(getMoviesError(true))
                dispatch(moviesLoading(false))
            }
        }
        loadMorePages !== 1 && getMoviesData()
    }, [loadMorePages])

    const handleLoadMoreMovies = () => {
        setLoadMorePages(prevState => prevState + 1)
    }

    return (
        <Element className="categories" name="categories">
            <div className="categories__buttons">
                {genres.length > 0 ? genres.map(genre => {
                    return (
                        <button
                            className={pickedGenres.includes(genre.id) ? "active" : ""}
                            onClick={() => handleGenres(genre.id)}
                            key={genre.id}
                            id={genre.id}
                        >
                            {genre.name}
                        </button>
                    )
                }) : <Loading />}
            </div>
            <div className="categories__movies">
                {moviesByGenre.length > 0 &&
                    moviesByGenre.map((movie, index) => {
                        return (
                            <MovieItem
                                key={index}
                                image={movie.poster_path && `${process.env.REACT_APP_IMAGE_URL}w500${movie.poster_path}`}
                                title={movie.title}
                                vote_average={movie.vote_average}
                                id={movie.id}
                            />
                        )
                    })
                }
            </div>
            {movies_failed && <div className="categories__movies-failed">
                <h2>We couldnt't find movies with this specific genres, sorry!</h2>
            </div>}
            {moviesByGenre_error && <div className="categories__movies-error">
                <h2>Sorry, we are not able to display movies due to error, try refreshing the page!</h2>
            </div>}
            {!movies_failed && !moviesByGenre_error ? <div className="categories__loadmore-btn-wrapper">
                {hasNextPage && <button
                    onClick={() => handleLoadMoreMovies()}
                >
                    Load more
                </button>}
            </div> : null}
            <div className="categories__loading-wrapper">
                {movies_loading && <Loading />}
            </div>
            <GoUpButton
                scrollToElementName={'categories'}
            />
        </Element>
    )
}

export default Genres
