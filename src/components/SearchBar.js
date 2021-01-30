import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'

import { getSingleMovie } from '../redux/actions/moviesActions'

import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";

import { BsSearch } from 'react-icons/bs'


const SearchBar = ({ width }) => {

    const [movie, setMovie] = useState('')
    const [results, setResults] = useState([])

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (movie.length > 0) {
            const getSearchingResults = async (movie) => {

                const API = `${process.env.REACT_APP_API_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movie}`

                const response = await fetch(API)
                const responseJson = await response.json()
                if (responseJson.results) {
                    setResults(responseJson.results)
                }

            }

            getSearchingResults(movie)
        }
    }, [movie])


    const useStyles = makeStyles({
        inputRoot: {
            color: "white",
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                Color: 'white'
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "lightgray",
                Color: 'white'
            },
        }
    })

    const classes = useStyles();

    const searchPlaceholder = () => {
        return <p>Search for movies <BsSearch /> </p>
    }

    const [movieOption, setMovieOption] = useState('');

    const getMovie = () => {
        const singleMovie = results.filter(item => item.title === movieOption)
        dispatch(getSingleMovie(...singleMovie))
        const singleMovieID = singleMovie.map(item => item.id)

        history.push(`/movie/${singleMovieID}`)
    }

    useEffect(() => {
        getMovie()
    }, [movieOption])


    return (
        <div className="search-bar">
            <Autocomplete
                style={{ width, Color: "white" }}
                freeSolo
                classes={classes}
                id="free-solo-2-demo"
                disableClearable
                options={results.map(item => item.original_title)}
                value={movieOption}
                onChange={(event, newValue) => setMovieOption(newValue)}
                renderInput={(params) => (
                    <TextField style={{ Color: 'white' }}
                        {...params}
                        label={searchPlaceholder()}
                        margin="normal"
                        variant="outlined"
                        value={movie}
                        onChange={(e) => setMovie(e.target.value)}
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        </div>
    )
}

export default SearchBar 
