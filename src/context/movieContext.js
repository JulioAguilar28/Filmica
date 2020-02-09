import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = props => {

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=bcca94f271dbf6d7595b28f163b8713d&language=en-US&page=1')
            .then(response => {
                const popularMovies = response.data.results.splice(0, 5);
                setMovies(popularMovies)
                console.log(popularMovies)
            })
    }

    const [movies, setMovies] = useState([]);

    return (
        <MovieContext.Provider value={[movies]}>
            {props.children}
        </MovieContext.Provider>
    )
}