import * as actionTypes from '../constants/favMovieConstants'

export const addFavMovie = (movie) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.ADD_FAV_MOVIE,
        payload: movie
    })
}