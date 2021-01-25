import * as actionTypes from '../constants/movieConstants'

const INITIAL_STATE = {
    movies: [],
    movies_loaded: false,
    singleMovie: {},
    singleMovie_loaded: false,
}

export const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                movies_loaded: true
            }
        case actionTypes.GET_SINGLE_MOVIE:
            return {
                ...state,
                singleMovie: action.payload,
                singleMovie_loaded: true,
            }
        case actionTypes.RESET_SINGLE_MOVIE:
            return {
                ...state,
                singleMovie: {}
            }
        default:
            return state
    }
}