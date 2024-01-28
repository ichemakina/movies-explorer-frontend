import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import { useEffect, useState } from 'react';
import { api } from "../../utils/Main.js";
import { search, shortFilmsFilter } from "../../utils/filterFunctions.js";
import NotSearchResults from "../NotSearchResults/NotSearchResults.js";

function SavedMovies({ pageUrl }) {
    const [movies, setMovies] = useState([]);
    const [errors, setErrors] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [notSearchResults, setNotSearchResults] = useState(false);
    const [displayedMovies, setDisplayedMovies] = useState([]);
    const [isShortFilmsFilter, setIsShortFilmsFilter] = useState(false);
    const [removeMovieErrors, setRemoveMovieErrors] = useState({ message: '', movieId: '' });
    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        api.getMovies()
            .then((moviesData) => {
                setMovies(moviesData);
                setDisplayedMovies(moviesData);
            })
            .catch(() => {
                setErrors("Произошла ошибка. Подождите немного и попробуйте ещё раз")
            })
    }, []);

    function handleDeleteMovie(movieId) {
        api.removeMovie(movieId)
            .then(() => {
                if ((movies.length === 1 && movies[0]._id === movieId) ||
                    (isSearch && searchResults.length === 1 && searchResults[0]._id === movieId)) {
                    setNotSearchResults(true);
                }
                setMovies((state) => state.filter((c) => c._id !== movieId));
                setSearchResults((state) => state.filter((c) => c._id !== movieId));
                setDisplayedMovies((state) => state.filter((c) => c._id !== movieId));
            })
            .catch(() => {
                setRemoveMovieErrors({ message: "Произошла ошибка. Пожалуйста, попробуйте позже.", movieId: movieId });
            });
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
        let results = search(movies, searchValue);
        setIsSearch(true);
        setSearchResults(results)
        getDisplayedMovies(results, isShortFilmsFilter);
        setErrors('');

    };

    function handleShortFilmsFilter(isChecked) {
        if (isSearch)
            getDisplayedMovies(searchResults, isChecked);
        else
            getDisplayedMovies(movies, isChecked);
        setIsShortFilmsFilter(isChecked);
    }

    return (
        <div className="saved-movies">
            <Header pageUrl={pageUrl} />
            <main>
                <SearchForm handleSearch={handleSearch} handleShortFilmsFilter={handleShortFilmsFilter} errors={errors} isShortFilmsFilter={isShortFilmsFilter} />
                {notSearchResults && <NotSearchResults />}
                {displayedMovies.length !== 0 && <MoviesCardList movies={displayedMovies} errors={removeMovieErrors} isSavedMoviesPage={true} handleDeleteMovie={handleDeleteMovie} savedMovies={movies} />}
            </main>
            <Footer />
        </div>
    )
}

export default SavedMovies;