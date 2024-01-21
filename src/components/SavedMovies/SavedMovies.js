import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import { useState } from 'react';

function SavedMovies({ pageUrl }) {
    const [movies, setMovies] = useState([]);

    return (
        <div className="saved-movies">
            <Header pageUrl={pageUrl} />
            <main>
                <SearchForm />
                <MoviesCardList movies={movies} isSavedMoviesPage={true} />
            </main>
            <Footer />
        </div>
    )
}

export default SavedMovies;