import React, { useEffect } from 'react';

import Axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'

import { getFavMovies, updateFavMovies } from '../redux/actions/favMoviesActions'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './Favorites.css'

const Favorites = () => {

    const favMovies = useSelector(state => state.favMovies.favMovies)

    const dispatch = useDispatch()

    useEffect(() => {
        Axios.get('http://localhost:3001/api/movie/getFavMovies')
            .then((response) => {
                if (response.status === 200) {
                    dispatch(getFavMovies(response.data))
                } else {
                    console.log('Failed getting favMovies')
                }
            })
    }, [])

    const handleDeleteFavMovie = (id) => {
        Axios.delete(`http://localhost:3001/api/favorite/delete/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(updateFavMovies(response.data))
                }
                else {
                    console.log('Failed deleting item')
                }
            })
    }

    const useStyles = makeStyles({
        table: {
            minWidth: 450,
        },
    });

    const classes = useStyles();

    return (
        <div className="favorites">
            <div className="favorites__content">
                {favMovies.length > 0 ?
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Movie Name</TableCell>
                                    <TableCell align="right">Id</TableCell>
                                    <TableCell align="right">Image</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {favMovies.map((item) => (
                                    <TableRow key={item._id}>
                                        <TableCell component="th" scope="row">
                                            {item.movieTitle}
                                        </TableCell>
                                        <TableCell align="right">{item.movieId}</TableCell>
                                        <TableCell align="right">{item.movieImage}</TableCell>
                                        <TableCell align="right"><button onClick={() => handleDeleteFavMovie(item.movieId)}>delete</button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <h2 style={{ textAlign: 'center' }}>You don't have any movies in favorites yet!</h2>

                }

            </div>
        </div>
    )
}

export default Favorites
