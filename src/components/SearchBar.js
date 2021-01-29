import React from 'react'

import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";

import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
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
    });

    const films = ['max payne', 'Lord of the rings', 'Harry potter', 'Avengers', 'Paranormal activity',]

    const classes = useStyles();

    const searchPlaceholder = () => {
        return (
            <p>
                Search for movies <BsSearch />
            </p>
        )
    }

    return (
        <div className="search-bar">
            <Autocomplete
                style={{ width: 300, Color: "white" }}
                freeSolo
                classes={classes}
                id="free-solo-2-demo"
                disableClearable
                options={films.map(item => item)}
                renderInput={(params) => (
                    <TextField style={{ Color: 'white' }}
                        {...params}
                        label={searchPlaceholder()}
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        </div>
    )
}

export default SearchBar 
