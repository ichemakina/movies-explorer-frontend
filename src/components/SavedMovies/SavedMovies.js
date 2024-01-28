import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import { useEffect, useState } from 'react';
import { search, shortFilmsFilter } from "../../utils/filterFunctions.js";
import NotSearchResults from "../NotSearchResults/NotSearchResults.js";

function SavedMovies({ pageUrl, savedMovies, deleteMovie, removeMovieErrors }) {
    const [errors, setErrors] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [notSearchResults, setNotSearchResults] = useState(false);
    const [displayedMovies, setDisplayedMovies] = useState([]);
    const [isShortFilmsFilter, setIsShortFilmsFilter] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        setDisplayedMovies(savedMovies);
    }, []);

    function handleDeleteMovie(movieId) {
        deleteMovie(movieId);

        if ((savedMovies.length === 1 && savedMovies[0]._id === movieId) ||
            (isSearch && searchResults.length === 1 && searchResults[0]._id === movieId)) {
            setNotSearchResults(true);
        }
        if (errors.length === 0) {
            const movies = isSearch
                ? searchResults.filter((c) => c._id !== movieId)
                : savedMovies.filter((c) => c._id !== movieId);
            getDisplayedMovies(movies, isShortFilmsFilter);
            setSearchResults((state) => state.filter((c) => c._id !== movieId));
            setDisplayedMovies((state) => state.filter((c) => c._id !== movieId));
        }
    }

    function getDisplayedMovies(movies, isFiltered) {
        if (isFiltered)
            movies = shortFilmsFilter(movies);

        if (movies.length === 0) {
            setNotSearchResults(true);
        }
        else
            setNotSearchResults(false);

        setDisplayedMovies(movies);
    }

    function handleSearch(searchValue) {
        if (!searchValue) {
            setErrors('Нужно ввести ключевое слово');
            setSearchResults([]);
            setNotSearchResults(false);
            return;
        }
        setSearchResults([]);
        setNotSearchResults(false);
        let results = search(savedMovies, searchValue);
        setIsSearch(true);
        setSearchResults(results)
        getDisplayedMovies(results, isShortFilmsFilter);
        setErrors('');

    };

    function handleShortFilmsFilter(isChecked) {
        if (isSearch)
            getDisplayedMovies(searchResults, isChecked);
        else
            getDisplayedMovies(savedMovies, isChecked);
        setIsShortFilmsFilter(isChecked);
    }

    return (
        <div className="saved-movies">
            <Header pageUrl={pageUrl} />
            <main>
                <SearchForm handleSearch={handleSearch} handleShortFilmsFilter={handleShortFilmsFilter} errors={errors} isShortFilmsFilter={isShortFilmsFilter} />
                {notSearchResults && <NotSearchResults />}
                {displayedMovies.length !== 0 && <MoviesCardList movies={displayedMovies} errors={removeMovieErrors} isSavedMoviesPage={true} handleDeleteMovie={handleDeleteMovie} savedMovies={savedMovies} />}
            </main>
            <Footer />
        </div>
    )
}

export default SavedMovies;