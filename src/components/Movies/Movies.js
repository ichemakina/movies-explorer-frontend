import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
    return (
        <section className="movies">
            <Header />
            <SearchForm />
        </section>
    )
}

export default Movies;