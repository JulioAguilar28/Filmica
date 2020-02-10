import React from 'react';
import '../styles/movie-container.css';

import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MovieContainer(props) {

    const Navstyles = {
        color: 'white',
        textDecoration: 'none'
    };

    const urlImg = 'https://image.tmdb.org/t/p/original/'

    return (
        <Card bg="danger" text="white">
            <Link style={Navstyles} to={`/peliculas/${props.movie.id}`}>
                <Card.Img variant="bottom" src={urlImg + props.movie.poster_path} />
            </Link>
            <Card.Body>
                <Link style={Navstyles} to={`/peliculas/${props.movie.id}`}>
                    <Card.Title>{props.movie.title}</Card.Title>
                </Link>
                <Card.Subtitle>{props.movie.release_date}</Card.Subtitle>
                <Card.Text>{props.movie.overview}</Card.Text>
                <Link style={Navstyles} to={`/peliculas/${props.movie.id}`}>
                    <Button variant="light">Más info...</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}