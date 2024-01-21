import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import { useEffect, useState } from 'react';
import { moviesApi } from "../../utils/MoviesApi.js";

function Movies({ pageUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesApi.getMovies()
            .then((moviesData) => {
                setMovies(moviesData);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="movies">
            <Header pageUrl={pageUrl} />
            <main>
                <SearchForm />
                <MoviesCardList movies={movies} />
            </main>
            <Footer />
        </div>
    )
}

export default Movies;