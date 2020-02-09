import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { MovieContext } from '../context/movieContext';

export default function CarouselHome(props) {

    const [movies] = useContext(MovieContext);

    const urlImg = 'https://image.tmdb.org/t/p/original'

    return (
        <Carousel>
            {movies.map(movie => (
                <Carousel.Item key={movie.id}>
                    <img
                        className="d-block img-fluid"
                        src={urlImg + movie.poster_path}
                        alt={movie.title}
                    />
                    <Carousel.Caption>
                        <h3>{movie.title}</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}