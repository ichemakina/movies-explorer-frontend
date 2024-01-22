import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader.js";
import "./Movies.css";
import { useState, useEffect } from 'react';
import { moviesApi } from "../../utils/MoviesApi.js";
import NotSearchResults from "../NotSearchResults/NotSearchResults.js";

function Movies({ pageUrl }) {
    const [searchResults, setSearchResults] = useState([]);
    const [displayedMovies, setDisplayedMovies] = useState([]);
    const [errors, setErrors] = useState('');
    const [preloader, setPreloader] = useState(false);
    const [notSearchResults, setNotSearchResults] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [moviesCount, setMoviesCount] = useState([]);

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
        getDisplayedMovies(searchResults)
    }, [searchResults, width]);

    function getDisplayedMovies(movies) {
        const displayedMovies = movies.slice(0, moviesCount);
        setDisplayedMovies(displayedMovies);
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
        setNotSearchResults(false)
        moviesApi.getMovies()
            .then(movies => {
                const results = movies.filter(movie =>
                    movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
                );
                setSearchResults(results);
                if (movies.length === 0) {
                    setNotSearchResults(true);
                }
                else
                    setNotSearchResults(false);
                getDisplayedMovies(results);
                setErrors('');
            })
            .catch(() => {
                setErrors('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
            })
            .finally(() => {
                setPreloader(false);
            });
    };

    return (
        <div className="movies">
            <Header pageUrl={pageUrl} />
            <main>
                <SearchForm handleSearch={handleSearch} errors={errors} />
                {preloader && <Preloader />}
                {notSearchResults && <NotSearchResults />}
                {displayedMovies.length !== 0 && <MoviesCardList movies={displayedMovies} />}
            </main>
            <Footer />
        </div>
    )
}

export default Movies;