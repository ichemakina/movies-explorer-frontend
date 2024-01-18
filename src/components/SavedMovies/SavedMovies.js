import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import { savedMovies } from "../../utils/constants.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function SavedMovies({ pageUrl }) {
    return (
        <div className="saved-movies">
            <Header pageUrl={pageUrl} />
            <main>
                <SearchForm />
                <MoviesCardList movies={savedMovies} isSavedMoviesPage={true} />
            </main>
            <Footer />
        </div>
    )
}

export default SavedMovies;