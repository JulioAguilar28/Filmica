import React from 'react';
import MoviesLiked from './moviesLiked';
import '../styles/liked.css';

export default function Liked() {
    return (
        <div className="movies-liked-container">
            <div className="movies-liked-header">
                <h2>Peliculas que te gustan</h2>
            </div>
            <MoviesLiked />
        </div>
    )
}