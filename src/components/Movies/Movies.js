import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader.js";
import "./Movies.css";
import { useState, useEffect } from 'react';
import { moviesApi } from "../../utils/MoviesApi.js";
import NotSearchResults from "../NotSearchResults/NotSearchResults.js";
import { search, shortFilmsFilter } from "../../utils/filterFunctions.js";
import { COMPUTER_ADDITIONAL_MOVIES, COMPUTER_MOVIES_COUNT, PHONE_ADDITIONAL_MOVIES, PHONE_DISPLAY_WIDTH, PHONE_MOVIES_COUNT, TABLET_DISPLAY_WIDTH, TABLET_MOVIES_COUNT } from "../../utils/constants.js";

function Movies({ pageUrl, savedMovies, handleSaveMovie, saveMovieErrors }) {
    const [searchResults, setSearchResults] = useState([]);
    const [displayedMovies, setDisplayedMovies] = useState([]);
    const [errors, setErrors] = useState('');
    const [preloader, setPreloader] = useState(false);
    const [notSearchResults, setNotSearchResults] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [moviesCount, setMoviesCount] = useState([]);
    const [isDisplayedMoreMoviesBtn, setIsDisplayedMoreMoviesBtn] = useState(true);
    const [isShortFilmsFilter, setIsShortFilmsFilter] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        const movies = JSON.parse(localStorage.getItem('searchResults'));

        const filter = JSON.parse(localStorage.getItem('isShortFilmsFilter'));
        setIsShortFilmsFilter(filter);

        const searchValue = localStorage.getItem('searchValue');
        setSearchInputValue(searchValue);

        if (!movies || movies.length === 0)
            return;

        setSearchResults(movies);
        getDisplayedMovies(movies, filter);
    }, [])

    useEffect(() => {
        function getMoviesCount() {
            if (width > TABLET_DISPLAY_WIDTH)
                return COMPUTER_MOVIES_COUNT;
            if (width > PHONE_DISPLAY_WIDTH)
                return TABLET_MOVIES_COUNT;
            return PHONE_MOVIES_COUNT;
        }

        setMoviesCount(getMoviesCount());
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
            setMoviesCount(getMoviesCount());
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);

    useEffect(() => {
        getDisplayedMovies(searchResults, isShortFilmsFilter);
    }, [searchResults, width]);

    function getAllMovies(searchValue) {
        moviesApi.getMovies()
            .then((data) => {
                setAllMovies(data);
                searchMovies(data, searchValue);
            })
            .catch(() => {
                setErrors('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
            })
            .finally(() => {
                setPreloader(false);
            });
    }

    function searchMovies(movies, searchValue) {
        let results = search(movies, searchValue);
        setSearchResults(results);
        localStorage.setItem('searchValue', searchValue);
        localStorage.setItem('searchResults', JSON.stringify(results));
        getDisplayedMovies(results, isShortFilmsFilter);
        setErrors('');
    }

    function getDisplayedMovies(movies, isFiltered) {
        if (isFiltered)
            movies = shortFilmsFilter(movies);

        if (searchInputValue !== '' && movies.length === 0 && !preloader)
            setNotSearchResults(true);
        else
            setNotSearchResults(false);

        const partOfMovies = movies.slice(0, moviesCount);
        setDisplayedMovies(partOfMovies);
        if (movies.length <= partOfMovies.length)
            setIsDisplayedMoreMoviesBtn(false);
        else
            setIsDisplayedMoreMoviesBtn(true);
    }

    function handleSearch(searchValue) {
        if (!searchValue) {
            setErrors('Нужно ввести ключевое слово');
            setSearchResults([]);
            setNotSearchResults(false);
            return;
        }

        if (allMovies.length === 0) {
            setPreloader(true);
            setSearchResults([]);
            setIsDisplayedMoreMoviesBtn(true);
            getAllMovies(searchValue);
        }
        else
            searchMovies(allMovies, searchValue);
    };

    function handleMoreMovies() {
        let count = width > TABLET_DISPLAY_WIDTH
            ? COMPUTER_ADDITIONAL_MOVIES
            : PHONE_ADDITIONAL_MOVIES;

        const moviesCount = displayedMovies.length + count;
        setDisplayedMovies(searchResults.slice(0, moviesCount));
        if (searchResults.length <= moviesCount)
            setIsDisplayedMoreMoviesBtn(false);
    }

    function handleShortFilmsFilter(isChecked) {
        getDisplayedMovies(searchResults, isChecked);
        setIsShortFilmsFilter(isChecked);
        localStorage.setItem('isShortFilmsFilter', JSON.stringify(isChecked));
    }

    return (
        <div className="movies">
            <Header pageUrl={pageUrl} />
            <main>
                <SearchForm handleSearch={handleSearch} handleShortFilmsFilter={handleShortFilmsFilter} errors={errors} isShortFilmsFilter={isShortFilmsFilter} searchInputValue={searchInputValue} />
                {preloader && <Preloader />}
                {notSearchResults && <NotSearchResults />}
                {displayedMovies.length !== 0 && <MoviesCardList movies={displayedMovies} errors={saveMovieErrors} handleMoreMovies={handleMoreMovies} isDisplayedMoreMoviesBtn={isDisplayedMoreMoviesBtn} handleSaveMovie={handleSaveMovie} savedMovies={savedMovies} />}
            </main>
            <Footer />
        </div>
    )
}

export default Movies;