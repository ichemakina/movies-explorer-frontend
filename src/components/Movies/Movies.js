import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import { movies } from "../../utils/constants.js";

function Movies({ pageUrl }) {
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