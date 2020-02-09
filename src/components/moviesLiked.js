import React, { useEffect, useState } from 'react';
import MovieContainer from './movieContainer';
import '../styles/liked.css';

const MoviesLiked = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const movies = localStorage.getItem('movies-liked');
        if (movies) {
            setMovies(JSON.parse(movies));
        }
    }, [])

    return (
        <div className="movies-liked">
            {movies.map(movie => (
                <MovieContainer movie={movie} />
            ))}
        </div>
    )
}

export default MoviesLiked;