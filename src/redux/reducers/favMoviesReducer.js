import * as actionTypes from '../constants/favMovieConstants'

const INITIAL_STATE = {
    favMovies: []
}

export const favMoviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_FAV_MOVIE:
            return {
                ...state,
                favMovies: [...state.favMovies, action.payload]
            }
        default:
            return state;
    }
}