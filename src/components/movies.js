import React, { useContext, useState, useEffect } from "react";
import "../styles/movies.css";
import MovieContainer from "./movieContainer";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";

function Movies() {
	const [inputMovie, setInputMovie] = useState('');
	const [results, setResults] = useState([]);
	const [useSearch, setUseSearch] = useState(false);
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		getMovies();
	}, [page]);

	const getMovies = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=bcca94f271dbf6d7595b28f163b8713d&language=en-US&page=${page}`
		);
		const movies = await data.json();
		console.log(movies.results);
		setMovies(movies.results);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=bcca94f271dbf6d7595b28f163b8713d&language=en-US&query=${inputMovie}&include_adult=false`
		)
			.then(res => res.json())
			.then(results => {
				console.log(results.results);
				setResults(results.results)
			})
		setInputMovie('')
		setUseSearch(true);
	}

	const handleChange = (event) => {
		setInputMovie(event.target.value);
	}

	const renderMovies = () => {
		return (
			movies.map(movie => (
				<li key={movie.id}>
					<MovieContainer movie={movie} />
				</li>
			))
		);
	}

	const renderMovieSearched = () => {

		if (results.length === 0) {
			return (
				<div>
					<p>Lo lamento! No se encontro la pelicula</p>
					<Link className="btn btn-outline-danger" to="/">Regresar a Peliculas</Link>
				</div>
			)
		}
		return (
			results.map(movie => (
				<li key={movie.id}>
					<MovieContainer movie={movie} />
				</li>
			))
		);
	}

	const nextPage = (page) => {
		setPage(page + 1);
		console.log(page);
	}

	const prevPage = (page) => {
		setPage(page - 1);
		console.log(page);
	}

	return (
		<div className="movies-container">
			<div className="movies-header">
				<h2>Peliculas</h2>
				<span></span>
				<form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
					<input className="form-control mr-sm-2" type="text" value={inputMovie} onChange={handleChange} placeholder="Search" />
					<button className="btn btn-outline-danger my-2 my-sm-0" onSubmit={handleSubmit}>Buscar</button>
				</form>
			</div>
			<div>
				<ul className="movies-list">
					{!useSearch ? renderMovies() : renderMovieSearched()}
				</ul>
			</div>
			<div className="mx-auto">
				{!useSearch ?
					<Pagination>
						<Pagination.Prev onClick={() => { prevPage(page) }} />
						<Pagination.Next onClick={() => { nextPage(page) }} />
					</Pagination> : ' '}
			</div>
		</div>
	);
}

export default Movies;
