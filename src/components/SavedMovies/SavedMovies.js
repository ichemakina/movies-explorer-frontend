import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import { savedMovies } from "../../utils/constants.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function SavedMovies() {
    return (
        <section className="saved-movies">
            <Header />
            <SearchForm />
            <MoviesCardList movies={savedMovies} isSavedMoviesPage={true} />
            <Footer />
        </section>
    )
}

export default SavedMovies;