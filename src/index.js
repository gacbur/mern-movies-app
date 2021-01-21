import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import { moviesReducer } from './redux/reducers/moviesReducer'
import { favMoviesReducer } from './redux/reducers/favMoviesReducer'

const reducers = combineReducers({
  movies: moviesReducer,
  favMovies: favMoviesReducer
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
