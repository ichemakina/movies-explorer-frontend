import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import {movies} from "../../utils/constants.js";

function Movies({pageUrl}) {
    return (
        <main className="movies">
            <Header pageUrl={pageUrl} />
            <SearchForm />
            <MoviesCardList movies={movies} />
            <Footer />
        </main>
    )
}

export default Movies;