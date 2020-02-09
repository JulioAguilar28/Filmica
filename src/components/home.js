import React from 'react';
import '../styles/home.css';
import CarouselHome from './carouselHome';

export default function Home() {

    return (
        <div className="home-container">
            <div className="home-header">
                <h2>Peliculas Populares</h2>
            </div>
            <div className="carousel-home mx-auto mb-5">
                <CarouselHome />
            </div>
        </div>
    )
}

{/* <ul className="movies-list">
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <MovieContainer movie={movie} />
                        </li>
                    ))}
                </ul> */}