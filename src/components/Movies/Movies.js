import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
    return (
        <section className="movies">
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </section>
    )
}

export default Movies;