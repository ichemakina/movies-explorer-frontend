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
import { api } from "../../utils/Main.js";
import { beatfilmMoviesUrl } from "../../utils/apiConfig";

function Movies({ pageUrl }) {
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
    const [savedMovies, setSavedMovies] = useState([]);
    const [saveMovieErrors, setSaveMovieErrors] = useState({ message: '', movieId: '' });

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
            if (width > 840)
                return 16;
            if (width > 580)
                return 8;
            return 5;
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

    useEffect(() => {
        api.getMovies()
            .then((data) => {
                setSavedMovies(data);
            })
            .catch(console.error);
    }, [])

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
        setPreloader(true);
        setSearchResults([]);
        setIsDisplayedMoreMoviesBtn(true);
        moviesApi.getMovies()
            .then(movies => {
                let results = search(movies, searchValue);
                setSearchResults(results);
                localStorage.setItem('searchValue', searchValue);
                localStorage.setItem('searchResults', JSON.stringify(results));
                getDisplayedMovies(results, isShortFilmsFilter);
                setErrors('');
            })
            .catch(() => {
                setErrors('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
            })
            .finally(() => {
                setPreloader(false);
            });
    };

    function handleMoreMovies() {
        let count = width > 840 ? 4 : 2;
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

    function handleSaveMovie(movie) {
        if (savedMovies.some(savedMovie => savedMovie.movieId === movie.id)) {
            setSaveMovieErrors({ message: "Фильм уже сохранен.", movieId: movie.id });
            return;
        }
        else
            setSaveMovieErrors({ message: '', movieId: '' });

        const imageLink = `${beatfilmMoviesUrl}/${movie.image.url}`;
        let newMovie = {
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
            director: movie.director,
            country: movie.country,
            year: movie.year,
            duration: movie.duration,
            description: movie.description,
            trailerLink: movie.trailerLink,
            image: imageLink,
            thumbnail: imageLink,
            movieId: movie.id
        }
        api.saveMovie(newMovie)
            .then((movie) => {
                setSavedMovies((movies => [...movies, movie]));
            })
            .catch(() => {
                setSaveMovieErrors({ message: "Произошла ошибка. Пожалуйста, попробуйте позже.", movieId: movie.id });
            });
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