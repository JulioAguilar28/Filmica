import React, { useEffect, useState } from 'react';
import '../styles/movie-detail.css';
import { Jumbotron, Container, Image, Button } from 'react-bootstrap';
import { ButtonGroup, Spinner } from 'react-bootstrap';

export default function MovieDetail({ match }) {

    useEffect(() => {
        getMovie();
    }, [])

    useEffect(() => {
        getTrailer();
    }, [])

    const [movie, setMovie] = useState({});
    const [trailer, setTrailer] = useState([]);
    const [movieLiked, setMovieLiked] = useState([]);

    const idMovie = match.params.id;

    const urlImg = 'https://image.tmdb.org/t/p/original/'

    const getMovie = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${idMovie}?api_key=bcca94f271dbf6d7595b28f163b8713d`
        );
        const movie = await data.json();
        console.log(movie)
        setMovie(movie)
    }

    const getTrailer = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=bcca94f271dbf6d7595b28f163b8713d&language=en%3DEN`
        );
        const trailer = await data.json();
        setTrailer(trailer.results);
        console.log(trailer.results);
    }

    const loading = () => {
        return (
            <div>
                <Spinner animation="border" />
            </div>
        )
    }

    const saveMovieLiked = (movie) => {
        const liked = {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
        }
        const allMovies = JSON.parse(localStorage.getItem('movies-liked')) || [];
        const repeat = allMovies.filter((movie => {
            return movie.id === liked.id
        })).length;
        if (!repeat) {
            allMovies.push(liked)
            localStorage.setItem("movies-liked", JSON.stringify(allMovies));
            alert('Se añadio a tu lista de favoritas')
        } else {
            alert('Ya esta en tu lista de favoritas')
        }
    }

    return (
        <div className="movie-detail-container">
            {movie == null ? loading() :
                <Jumbotron fluid>
                    <Container>
                        <Image className="img" src={urlImg + movie.poster_path} fluid width="40%" rounded />
                        <div>
                            <h1 className="movie-detail-info">{movie.title}</h1>
                            <h2 className="movie-detail-info">{movie.release_date}</h2>
                            <p className="movie-detail-info">
                                {movie.overview}
                            </p>
                            <Button href={`https://www.youtube.com/watch?v=${trailer.map(key => (key.key))}`} target="_blank" className="ml-4 mb-4" variant="danger">Ver Trailer...</Button>
                            <ButtonGroup>
                                <Button onClick={() => { saveMovieLiked(movie) }} className="py-2 ml-4" variant="danger"><i class="far fa-thumbs-up"></i> Me gusta</Button>
                                <Button className="py-2 ml-4" variant="danger"><i class="far fa-thumbs-down"></i> No me gusta</Button>
                            </ButtonGroup>
                        </div>
                    </Container>
                </Jumbotron>
            }
        </div>
    )
}