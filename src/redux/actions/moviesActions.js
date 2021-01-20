import * as actionTypes from '../constants/movieConstants'

export const getMovies = (prevMovies, movies) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.GET_MOVIES,
        payload: {
            movies,
            prevMovies
        }
    })
}

export const getSingleMovie = (movie) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.GET_SINGLE_MOVIE,
        payload: movie
    })
}

export const resetSingleMovie = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.RESET_SINGLE_MOVIE
    })
}