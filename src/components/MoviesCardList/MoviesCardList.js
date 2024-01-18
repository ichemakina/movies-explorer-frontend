import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, isSavedMoviesPage = false }) {
    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__elements">
                {
                    movies.map((movie) => {
                        return (
                            <MoviesCard key={movie._id} movie={movie} isSavedMoviesPage={isSavedMoviesPage} />
                        )
                    })
                }
            </ul>
            {isSavedMoviesPage && <div className="movies-card-list__devider"></div>}
            {!isSavedMoviesPage && <button type="button" className="movies-card-list__more-btn">Ещё</button>}
        </section>
    )
}

export default MoviesCardList;