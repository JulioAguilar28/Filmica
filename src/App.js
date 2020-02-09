import React from 'react';
import './App.css';
import Home from './components/home';
import Movies from './components/movies';
import Liked from './components/liked';
import Movie from './components/movieDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import { MovieProvider } from './context/movieContext';
import Navigation from './components/nav';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <MovieProvider>
                    <div className="content">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/peliculas" exact component={Movies} />
                            <Route path="/liked" component={Liked} />
                            <Route path="/peliculas/:id" exact component={Movie} />
                        </Switch>
                    </div>
                </MovieProvider>
                <Footer />
            </div>
        </Router>
    );
}

export default App;