import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader.js";
import "./Movies.css";
import { useState } from 'react';
import { moviesApi } from "../../utils/MoviesApi.js";
import NotSearchResults from "../NotSearchResults/NotSearchResults.js";

function Movies({ pageUrl }) {
    const [searchResults, setSearchResults] = useState([]);
    const [errors, setErrors] = useState('');
    const [preloader, setPreloader] = useState(false);
    const [notSearchResults, setNotSearchResults] = useState(false);

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
                if (results.length === 0)
                    setNotSearchResults(true);
                else
                    setNotSearchResults(false);
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
                <MoviesCardList movies={searchResults} />
            </main>
            <Footer />
        </div>
    )
}

export default Movies;